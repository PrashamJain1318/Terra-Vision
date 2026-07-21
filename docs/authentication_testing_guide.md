# LocalLens AI Authentication QA & Testing Strategy

This document details the test scenarios, validation criteria, and security checklist for verifying the authentication and authorization layer (Phase 4).

---

## 1. Authentication Test Scenarios

### Registration Tests
1. **Successful Account Creation**: Register with a unique email, full name, and password. Expected: `201 Created` with a hashed password in the DB.
2. **Duplicate Registration Check**: Re-attempt registering with the same email. Expected: `409 Conflict` (Duplicate Key index collision).
3. **Invalid Parameter Fields**: Verify empty email or name throws custom `ValidationError`. Expected: `400 Bad Request`.
4. **Short Passwords**: Verify password length < 8 characters throws validation errors. Expected: `400 Bad Request`.

### Login & Credentials Checks
1. **Success Logins**: Enter valid email and password. Expected: `200 OK` returning access tokens and attaching secure cookie headers.
2. **Incorrect Credentials**: Attempt login using wrong password or missing accounts. Expected: `401 Unauthorized` with generic credentials error message (avoiding disclosure of account existence).
3. **Missing Form Parameters**: Send query without email or password parameter keys. Expected: `400 Bad Request`.

### Access Token Refresh Checks
1. **Access Token Refresh (Silent)**: Fetch `/api/v1/auth/refresh` sending valid refresh token cookie credentials. Expected: `200 OK` returning new access token.
2. **Expired Session Check**: Attempt refresh request with expired or invalid tokens. Expected: `401 Unauthorized`.

### Protected Route Guards
1. **Guest Request Access**: Attempt fetching data from custom route `/api/v1/trips` without bearer/cookies values. Expected: `401 Unauthorized` (Custom Error Class `UNAUTHORIZED`).
2. **Admin-only Actions Access**: Attempt executing admin actions using standard user session tokens. Expected: `403 Forbidden` (Custom Error Class `FORBIDDEN`).

### Session Termination (Logout)
1. **Clear Cookie Sessions**: Trigger logout endpoints `/api/v1/auth/logout`. Expected: Access and refresh token cookies cleared on the client.

---

## 2. Security Configuration Checklist

- [ ] **Secure Storage**: Enforce access/refresh tokens in secure cookies (`HttpOnly=true`, `SameSite=Lax`, and `Secure` in production).
- [ ] **Bcrypt Work Factor**: Set salt rounds to at least **12** to prevent quick brute-force computations.
- [ ] **Information Leakage**: Verify endpoints do not return raw stack traces or internal DB error logs in production.
- [ ] **Token Lifetime Limits**: Confirm Access tokens expire in <= 15 minutes, and Refresh tokens expire in <= 7 days.
