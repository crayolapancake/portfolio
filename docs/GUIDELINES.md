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

### Documentation

1. Use JSDoc style comments to document components, functions and types

---

### Strings

1. Use single quotes for strings
2. All strings visible for users should be included in localisation files