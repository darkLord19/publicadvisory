# PublicAdvisory Monorepo

- `frontend`: React + Vite + TailwindCSS app (pnpm)
- `backend`: Go HTTP API

## Frontend

```bash
pnpm install --filter ./frontend
pnpm --filter ./frontend dev
```

## Backend

```bash
cd backend
go run ./cmd/api
```
