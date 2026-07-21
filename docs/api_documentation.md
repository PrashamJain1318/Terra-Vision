# API Endpoint Reference Documentation

This document describes all available REST endpoints exposed by the LocalLens AI Backend Gateway.

---

## 1. Global Setup Requirements
- **Base URL**: `http://localhost:5000/api`
- **Request Headers**:
  - `Content-Type`: `application/json`

---

## 2. Endpoints Namespace

### System Health
- **Endpoint**: `/v1/health`
- **Method**: `GET`
- **Access**: Public
- **Description**: Verifies API gateway status and system uptime.
- **Success Response (200 OK)**:
  ```json
  {
    "success": true,
    "message": "System is healthy",
    "data": {
      "status": "UP",
      "timestamp": "2026-07-22T03:04:31.000Z",
      "uptime": 12.43
    },
    "timestamp": "2026-07-22T03:04:31.000Z"
  }
  ```
