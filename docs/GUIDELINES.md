# Coding Guidelines

### Naming

**Use PascalCase for:**
1. TypeScript types and interfaces
2. Components, including their file names (and associated test files)

**Use camelCase for:**
1. Function names, including their file names (and test file names)
2. Variables and property names

**Additional rules:**
1. Do not prefix interfaces or types with `I` or `T` respectively

---

### Components

1. Have only 1 file for each logical component (e.g. `Card`, `Table`, `Heading`)

---

### Queries

1. Do not return instances of `useQuery` from a custom hook
2. Use the `queryOptions` API to create query options
3. Use the `mutationOptions` API to create mutation options
4. Do not write query keys inline - always extract them to an object for reuse
5. Prefer to use `skipToken` ([docs](https://tanstack.com/query/v5/docs/framework/react/guides/disabling-queries)) over the `enabled` property to disable queries
6. If an API endpoint requires a `commandId`, always pass it as `commandId: uuidv7()` — never generate it inside `mutationFn` (see [API docs](api/README.md))

---

### Types

1. Use `undefined` - do not use `null`
2. Do not export types unless they need to be shared across components or files.
3. Co-locate types inside the file they're used if they do not require exporting.
4. Do not add types to the global namespace
5. Do not augment or modify existing types in the global namespace
6. Shared types should be defined in a `types.ts` in their respective domain directory
7. Prefer variant strings over booleans for function parameters (i.e. `variant: 'currency'` rather than `currency: true`)
    - Booleans can hide important implementation details, and each boolean exponentially increases the possible states a function has to handle

---

### Testing

1. Tests should not rely on timers unless they are used intentionally.
2. Prefer to test user behaviour. Avoid asserting internal state or implementation details, unless testing pure logic.

---

### Style

**Functions:**

1. Prefer arrow functions over function declaration syntax
2. Only surround function parameters when necessary
    For example, `(arr) => arr.map()` should be `arr => arr.map()`
3. Use implicit returns instead of curly braces where possible
    `number => number * 2` instead of `number => { return number * 2 }`

**General:**
1. Opening curly braces go on the same line as whatever requires them
2. Do not declare multiple variables on the same line using comma syntax
3. Avoid deep relative import strings. Use aliases instead.
4. No disabling linting rules without a comment explaining why.

---

### Spacing

Use Tailwind's spacing scale, and only the steps below. Pick by role, not by eye.

| Step | Size | Use for |
|------|------|---------|
| `1`, `1.5` | 4–6px | Tight pairs (icon + label, list items) |
| `2`, `2.5` | 8–10px | Heading to its content, vertical padding of buttons and inputs |
| `3`–`4` | 12–16px | Related elements within a block, gaps in a row, horizontal padding of inputs and pills |
| `5` | 20px | Horizontal padding of buttons |
| `6` | 24px | Space after a block (e.g. a row of images), horizontal page padding |
| `10` | 40px | Between timeline or list entries |
| `12` | 48px | Section top/bottom padding (all sections), heading to content |
| `16`–`20` | 64–80px | Page-level offsets (below the header) |

1. Do not use arbitrary values (e.g. `mt-[13px]`) for spacing
2. Prefer `gap` and `space-y` on the parent over margins on each child
3. Add a new step to this table before using it

---

### Strings

1. Use single quotes for strings
2. All strings visible for users should be included in localisation files