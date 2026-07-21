# Mongoose Database Testing & Collection Schema Reference Guide

This document describes the schema validations, index policies, seed script protocols, and Postman examples for Phase 3 database structures.

---

## 1. Mongoose Collections Schema Definition

### User Collection
- **Name**: `users`
- **Fields**:
  - `name` (String, required, trim, max 50 chars)
  - `email` (String, required, unique, lowercase, regex-checked)
  - `password` (String, required, min 8 chars)
  - `profileImage` (String, default empty)
  - `preferences` (Object)
    - `travelStyle` (String, enum: `adventure`, `leisure`, `cultural`, etc.)
    - `interests` (Array of Strings)
  - `isDeleted` (Boolean, default `false`, via Soft Delete plugin)
  - `deletedAt` (Date, default `null`)

### Trip Collection
- **Name**: `trips`
- **Fields**:
  - `user` (ObjectId, ref: `User`, required)
  - `title` (String, required, max 100 chars)
  - `destination` (Object)
    - `name` (String, required)
    - `coordinates` (Object)
      - `lat` (Number, required)
      - `lng` (Number, required)
  - `startDate` (Date, required)
  - `endDate` (Date, required)
  - `status` (String, enum: `planning`, `upcoming`, `active`, `completed`, default `planning`)

### Planner Collection
- **Name**: `planners`
- **Fields**:
  - `trip` (ObjectId, ref: `Trip`, required, unique)
  - `user` (ObjectId, ref: `User`, required)
  - `itinerary` (Array of Day Itineraries)
    - `dayNumber` (Number, required)
    - `date` (Date)
    - `activities` (Array of Activities)
      - `name` (String, required)
      - `description` (String)
      - `time` (String)
      - `location` (Object: coordinates & names)
      - `cost` (Number, default 0)
  - `totalEstimatedCost` (Number, default 0)

### Memory Collection
- **Name**: `memories`
- **Fields**:
  - `user` (ObjectId, ref: `User`, required)
  - `trip` (ObjectId, ref: `Trip`, required)
  - `title` (String, required)
  - `description` (String)
  - `media` (Array of Media Assets)
    - `url` (String, required)
    - `publicId` (String, required)
    - `type` (String, enum: `image`, `video`, default `image`)
  - `location` (Object)

### SavedPlace Collection
- **Name**: `savedplaces`
- **Fields**:
  - `user` (ObjectId, ref: `User`, required)
  - `placeId` (String, required)
  - `name` (String, required)
  - `address` (String)
  - `coordinates` (Object)
    - `lat` (Number, required)
    - `lng` (Number, required)
  - `category` (String, enum: `restaurant`, `attraction`, `hotel`, `transit`, `shopping`, `other`)
  - `rating` (Number, min 0, max 5)

### AIHistory Collection
- **Name**: `aihistories`
- **Fields**:
  - `user` (ObjectId, ref: `User`, required)
  - `interactionType` (String, enum: `vision`, `chat`, `recommendation`, required)
  - `prompt` (String, required)
  - `response` (String, required)
  - `metaData` (Object: `imageUrl` and `modelUsed`)

---

## 2. Seed Data Instructions

To seed mock validation data:
1. **Configure Environment Variables**: Verify that your `.env` contains a valid `MONGO_URI`.
2. **Execute Seeding Script**:
   ```bash
   cd backend
   node scripts/seed.js
   ```
3. **Verify Insertion**: Confirm that the collection indexes are populated.

---

## 3. Database Validation Checklist (For future releases)
- [ ] Verify that saving a `SavedPlace` with a duplicate combination of `user` and `placeId` throws a Mongo index collision error.
- [ ] Confirm that queries targeting `Trip` automatically exclude documents flagged with `isDeleted: true`.
- [ ] Confirm that `User` emails are formatted and lowercase.
