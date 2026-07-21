# LocalLens AI Backend Architecture Documentation

This document describes the architectural patterns, coding standards, and response/error handling specifications implemented in the LocalLens AI backend (Phase 2).

---

## 1. Directory Blueprint

```
backend/
├── config/              # Centralized environment checks & service settings
│   ├── env.js           # Environment Schema Validation
│   └── logger.js        # Winston logging presets & levels
├── middleware/          # Global Request loggers & exception mappings
│   ├── requestLogger.js # Morgan to Winston stream mapper
│   └── errorMiddleware.js # Dynamic Express error handler
├── routes/              # Route Controllers layer
│   ├── v1/              # Routing modules (grouped by features)
│   └── index.js         # API version namespace orchestrator
├── utils/               # Constants & Response format builders
│   ├── constants.js     # Global definitions & HTTP statuses
│   ├── AppError.js      # Type-safe subclass error templates
│   └── responseHandler.js # Unified response JSON helpers
```

---

## 2. API Response Formats

Every single controller response returns a unified JSON format using the `sendResponse()` utility helper.

### Success Format (`2xx`)
```json
{
  "success": true,
  "message": "Resource retrieved successfully",
  "data": {
    "items": []
  },
  "timestamp": "2026-07-22T02:57:22.000Z"
}
```

### Error Format (`4xx` / `5xx`)
```json
{
  "success": false,
  "message": "Validation Failed",
  "errorCode": "VALIDATION_ERROR",
  "details": {
    "field": "email",
    "issue": "Must be a valid email"
  },
  "timestamp": "2026-07-22T02:57:22.000Z",
  "stack": "Error: ... (hidden in production)"
}
```

---

## 3. Logger Schema
- Console logs colorize status output based on dynamic rules.
- Log instances output to stdout as well as logging targets inside a `logs/` directory:
  - `logs/error.log`: Captures all exceptions status >= 500.
  - `logs/combined.log`: Captures all HTTP requests, debug data, and trace maps.
