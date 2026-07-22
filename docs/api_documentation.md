# LocalLens AI — REST API Reference Specification

All backend endpoints are prefixed with `/api/v1`.

---

## 🗺️ Maps & Spatial Telemetry APIs (`/api/v1/maps`)

| Endpoint | Method | Description |
|---|---|---|
| `/search` | `GET` | Perform spatial search for city & category via Google Places API + MongoDB cache. |
| `/place/:id` | `GET` | Retrieve rich Google Place Details enriched with Gemini AI Scores. |
| `/hidden-gems` | `GET` | Extract secret non-touristy places using Gemini AI spatial filters. |
| `/restaurants` | `GET` | Retrieve local culinary hotspots & dietary options. |
| `/weather` | `GET` | Fetch real-time weather, AQI index, UV index, sunrise/sunset, & helpline numbers. |
| `/route` | `GET` | Calculate driving, walking, cycling, or transit route ETA and fuel estimates. |
| `/bookmark` | `POST` | Save place to user's persistent wishlist. |
| `/bookmark/:id` | `DELETE` | Remove place bookmark. |

---

## 🤖 Platform & Multi-Agent APIs (`/api/v1/platform`)

| Endpoint | Method | Description |
|---|---|---|
| `/orchestrate` | `POST` | Orchestrate requests across 8 specialized AI sub-agents. |
| `/marketplace` | `GET` | List available travel marketplace tools & extensions. |
| `/developer/keys` | `POST` | Issue enterprise API developer keys. |

---

## 🚀 Public Beta & Telemetry APIs (`/api/v1/beta`)

| Endpoint | Method | Description |
|---|---|---|
| `/event` | `POST` | Log client-side user behavior event for product analytics. |
| `/feedback` | `POST` | Submit bug report or feature request with auto-captured device info. |
| `/flags` | `GET` | Fetch current A/B feature flag rollout status. |
| `/flags/toggle` | `POST` | Admin endpoint to enable/disable feature flags. |
| `/analytics` | `GET` | Retrieve live DAU, MAU, latency metrics, and crash telemetry. |

---

## 📱 Mobile & Ecosystem APIs (`/api/v1/mobile`)

| Endpoint | Method | Description |
|---|---|---|
| `/device-sync` | `GET` | Sync offline storage and pending background items. |
| `/push-subscribe` | `POST` | Register FCM/APNS mobile push notification token. |
