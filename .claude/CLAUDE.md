
## Approach
- Prefer simple, explicit, readable and maintainable solutions over clever or abstract ones.
- Follow existing patterns unless there's a clear reason to diverge - consistency beats theoretical correctness.
- When introducing a new pattern, make it consistent and reusable.
- Keep changes scoped to the problem being solved; avoid large or noisy diffs.
- Update or remove outdated code rather than working around it.

## React
- Avoid `useEffect` where possible. Prefer deriving state directly during render instead of storing or syncing it.
- If `useEffect` is required, explain why it cannot be avoided.

## Components
- Prefer composition, like compound components, over large, monolithic components.
- Keep components focused - extract complex or reusable logic into hooks or utilities.

## Code Style
- Use arrow functions consistently, including for components.
- Prefer interfaces for object shapes where appropriate.

## TypeScript
- Never cast types using `as`, except in tests when unavoidable.
- Prefer fixing types at source, using generics, narrowing, or proper schema validation.

## Data Fetching / Queries
- Prefer `skipToken` over `enabled` to disable queries, as it avoids invalid queryFn execution. Use `enabled` only when manual `refetch` is required.
- Always validate API responses using existing schemas (e.g. Zod) instead of trusting raw data.
- Avoid unnecessary transformations in components - derive data close to the query level (i.e. using `select`).
- Treat server state as the source of truth; avoid duplicating it in local state.

## Security
- Never, ever, read from `.env`. Use `/src/env.ts` if you ever require reading available env vars.

## Documentation
- Consult `/docs` as the source of truth for architecture and conventions before implementing non-trivial features.

## Testing
- Prefer getting elements by role and text, rather than IDs.
- Test behaviour, not implementation details.
- Prefer running single tests (e.g. file or test name) instead of the full suite for faster feedback.