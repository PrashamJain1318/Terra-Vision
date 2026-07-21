# LocalLens AI Dashboard APIs Reference Guide

This document maps all backend dashboard REST endpoints exposed under the `/api/v1/dashboard` namespace.

---

## 1. Endpoints Base Config
- **Prefix**: `/api/v1/dashboard`
- **Access Level**: Authenticated (`protect` JWT route checks)

---

## 2. API Endpoints Specifications

### GET /overview
- **Description**: Returns aggregated metrics summary for the active user.
- **Success Status**: `200 OK`
- **Response Format**:
  ```json
  {
    "success": true,
    "message": "Overview metrics fetched successfully",
    "data": {
      "user": { "name": "Jane Doe", "email": "jane.doe@locallens.ai" },
      "travelScore": 150,
      "countriesVisited": 1,
      "citiesVisited": 1,
      "tripsPlanned": 1,
      "upcomingTrips": 1,
      "completedTrips": 0,
      "savedPlacesCount": 1,
      "memoriesCount": 1,
      "aiSuggestionsCount": 1,
      "recentNotificationsCount": 1
    }
  }
  ```

### GET /quick-actions
- **Description**: Returns quick action links for the workspace dashboard banners.
- **Success Status**: `200 OK`

### GET /statistics
- **Description**: Returns structured card data for trips, countries, cities, and scores.
- **Success Status**: `200 OK`

### GET /recent-trips
- **Description**: Returns up to 5 of the user's latest trips.
- **Success Status**: `200 OK`

### GET /recent-memories
- **Description**: Returns up to 5 of the user's latest memories.
- **Success Status**: `200 OK`

### GET /saved-places
- **Description**: Returns bookmarked locations list.
- **Success Status**: `200 OK`

### GET /notifications
- **Description**: Returns recent notification alerts.
- **Success Status**: `200 OK`

### GET /activity
- **Description**: Returns a timeline list of recent audit activity logs.
- **Success Status**: `200 OK`
