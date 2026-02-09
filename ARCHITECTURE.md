
# Frontend Architectural Design

This document describes the frontend architecture of the **Energy Ingestion & Simulation Platform** built using **Next.js (App Router)**.
The frontend is designed to act both as a **production analytics dashboard** and a **visual simulator** for backend ingestion and assignment logic.

---

## 1. Design Principles

The frontend follows these core principles:

1. **Server-first data fetching**
   - Analytics data is fetched using Next.js Server Components
   - Improves performance and reduces client-side state complexity
   - Enables built-in caching and revalidation

2. **Clear separation of concerns**
   - Routing & layouts → `app/`
   - UI components → `components/`
   - Domain logic & contracts → `lib/`

3. **Backend-aligned domain model**
   - Frontend types mirror backend entities (Meter, Vehicle, Charging Session)
   - Simulator uses the same state concepts as ingestion logic

4. **Progressive real-time**
   - Polling first
   - WebSockets later (without UI refactors)

---

## 2. Folder Structure

```
src/
├─ app/                  # Routing, layouts, pages
│  ├─ layout.tsx         # Root HTML/body layout
│  ├─ page.tsx           # Redirects to /dashboard
│  ├─ dashboard/         # Analytics dashboard
│  └─ simulator/         # Visual meter–vehicle simulator
│
├─ components/
│  ├─ dashboard/         # KPI cards, charts, activity feed
│  └─ simulator/         # Roads, vehicles, meters, modals
│
├─ lib/
│  ├─ server/            # Server-only data fetchers
│  ├─ types/             # Domain models & API contracts
│  └─ constants.ts
│
├─ hooks/                # Custom hooks (minimal)
└─ public/               # Static assets
```

---

## 3. Rendering Strategy

| Feature | Rendering Strategy |
|------|-------------------|
| Dashboard KPIs | Server Component |
| Charts | Client Component |
| Recent Activity | Client (polling) |
| Simulator | Client (state-driven) |

This hybrid model ensures performance without sacrificing interactivity.

---

## 4. Dashboard Architecture

### Responsibilities
- Provide system-level analytics
- Support date range filtering via URL (`?range=24h|7d`)
- Remain resilient to partial backend failures

### Data Flow
```
URL (range)
   ↓
Server Component (DashboardPage)
   ↓
Analytics APIs
   ↓
Typed Data → UI Components
```

### Features
- KPI cards
- Power usage chart
- Charging sessions chart
- Recent Activity feed
- Auto revalidation (30s)

### Error Handling
- Route-level error boundary for fatal failures
- Chart-level fallbacks for partial failures
- Explicit empty states for no data

---

## 5. Simulator Architecture

The simulator is a **visual system debugger**, not a demo animation.

### Core Concepts
- Meter = Resource
- Vehicle = Job
- Assignment = Backend decision
- Charging session = State transition

### Visual Model
- Each meter is rendered as a horizontal road
- Meter is a fixed anchor box
- Vehicles move based on assignment state

### Simulator State
```
Meter {
  id: string
  state: available | occupied
}

Vehicle {
  id: string
  soc: number
  capacity: number
  state: waiting | assigned | charging | leaving
  assignedMeterId?: string
}
```

### Key Benefit
The simulator UI can switch from mock logic to real backend ingestion without refactoring.

---

## 6. Backend Integration

### Phase 1
- REST APIs
- Polling-based updates
- Server-side caching

### Phase 2
- WebSockets for simulator events
- Push-based updates
- Same UI, no breaking changes

**Rule:** Backend owns truth, frontend owns visualization.

---

## 7. CORS & Deployment

- Frontend and backend may run on different hosts
- Preferred: enable CORS on backend
- Alternative: Next.js API proxy (dev-only)

---

## 8. Scalability & Maintainability

- New dashboards = new routes
- Simulator scales to many meters and vehicles
- Backend logic can evolve independently
- UI remains predictable and testable

---

## 9. Summary

This frontend architecture is:
- Explicit
- Backend-aligned
- Future-proof
- Debug-friendly

It supports both **analytics** and **visual simulation** without conflating responsibilities.
