# LocalLens AI — Standardized Project Directory Structure

Architect: Prasham Jain (`PrashamJain1318`)

---

```
TerraVision/
├── backend/
│   ├── controllers/         # Thin Express request orchestrators
│   ├── docs/                # Feature API & schema specifications
│   ├── middleware/          # Security, auth, and rate limiters
│   ├── models/              # Mongoose database schemas
│   ├── postman/             # Postman API test collections
│   ├── providers/           # External API provider adapters & factories
│   ├── routes/              # Express REST router definitions
│   ├── services/            # Core business logic services
│   ├── utils/               # Formatter and utility functions
│   └── validators/          # Input schema validation rules
│
├── frontend/
│   ├── app/                 # Next.js App Router root layout & dashboard routes
│   ├── components/          # Reusable React UI components
│   │   ├── dashboard/       # Dashboard framework components
│   │   ├── maps/            # GIS Map canvas and route components
│   │   ├── planner/         # AI Travel Planner components
│   │   └── vision/          # Vision scanner & result components
│   ├── config/              # Feature configuration tokens & theme specs
│   ├── context/             # Domain state context interfaces
│   ├── hooks/               # Custom React hooks (useMaps, useVision, etc.)
│   ├── pages/               # Sub-module page views
│   ├── providers/           # React context provider wrappers
│   └── tests/               # Automated unit & integration tests
│
└── docs/                    # System architecture & QA documentation
```
