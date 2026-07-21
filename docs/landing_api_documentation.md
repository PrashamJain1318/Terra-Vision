# LocalLens AI Landing Page APIs Reference Guide

This document describes the public REST endpoints exposed for the public Landing Page dynamic content modules.

---

## 1. Endpoints Overview
- **Base URL Namespace**: `/api/v1/landing`

---

## 2. API Endpoints Specifications

### GET /hero
- **Description**: Returns configurations for Hero subtitles, titles, CTAs, and colors.
- **Success Status**: `200 OK`
- **Response Payload**:
  ```json
  {
    "success": true,
    "message": "Hero configurations fetched successfully",
    "data": {
      "title": "See Beyond the Destination.",
      "subtitle": "Unveil hidden local treasures...",
      "ctaText": "Start Free Trial",
      "ctaLink": "/signup"
    }
  }
  ```

### GET /features
- **Description**: Returns all feature grids cards, sorted by displayOrder.
- **Success Status**: `200 OK`

### GET /statistics
- **Description**: Returns active counts stats cards.
- **Success Status**: `200 OK`

### GET /testimonials
- **Description**: Returns all reviews matching user feedback.
- **Success Status**: `200 OK`

### GET /footer
- **Description**: Returns layout options, contact emails, copyright text, and social URLs.
- **Success Status**: `200 OK`
