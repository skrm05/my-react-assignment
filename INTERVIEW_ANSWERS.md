# Interview Answers — React Assignment

---

## Section 1: Introduction to React

**Q1. What is React and why was it created by Facebook?**

React is a JavaScript library for building user interfaces. Facebook created it in 2011 to solve the problem of building large applications with data that changes over time. Before React, updating the DOM manually was slow and error-prone. React introduced the concept of components and a virtual DOM to make UI updates fast and predictable.

**Q2. How does React compare to Angular and Vue?**

React is a library (only the view layer), Angular is a full framework (routing, forms, HTTP all built-in), and Vue sits in between. React gives more flexibility but requires more decisions — you choose your own router, state management, etc. Angular has a steeper learning curve. Vue is easier to learn but less popular in large enterprise projects.

**Q3. Key advantages of React in production?**

- Component reusability reduces code duplication
- Virtual DOM makes rendering efficient
- Large ecosystem (Next.js, React Native, etc.)
- Strong community and industry adoption
- React DevTools for easy debugging
- One-way data flow makes bugs easier to trace

**Q4. Difference between Create React App and Vite?**

CRA uses Webpack which is slow — cold start can take 30 seconds on large projects. Vite uses native ES modules and ESBuild for transpilation, making cold start near-instant and HMR (Hot Module Reload) almost instant. CRA is also officially deprecated. Vite is now the recommended tool.

**Q5. Typical React project structure?**

`src/` folder contains `components/`, `pages/`, `hooks/`, `utils/`, `assets/`. `App.jsx` is the root component, `main.jsx` is the entry point that mounts React to the DOM. `index.html` is in the root for Vite projects.

---

## Section 2: JSX

**Q6. What is JSX? Is it HTML or JavaScript?**

JSX is JavaScript XML — it is a syntax extension for JavaScript. It looks like HTML but it is actually JavaScript. Every JSX element like `<div>Hello</div>` gets compiled to `React.createElement('div', null, 'Hello')` by Babel/Vite.

**Q7. Why can't browsers understand JSX directly?**

Browsers only understand plain HTML, CSS, and JavaScript. JSX is not valid JavaScript — it is a syntax extension. A transpiler (Babel) converts JSX into regular `React.createElement()` calls that browsers can understand.

**Q8. JSX expressions vs JSX statements?**

JSX uses `{}` curly braces for expressions only — things that return a value like `{user.name}`, `{2 + 2}`, `{condition ? 'yes' : 'no'}`. You cannot use full statements like `if/else` or `for` loops directly inside JSX — you must use expressions or move logic outside the return.

**Q9. JSX for user profile with conditional styling:**

```jsx
function UserProfile({ user }) {
  return (
    <div style={{ background: user.isActive ? "#d1fae5" : "#fee2e2" }}>
      <p>{user.name}</p>
    </div>
  );
}
```

**Q10. JSX attributes different from HTML attributes?**

`class` → `className`, `for` → `htmlFor`, `onclick` → `onClick`, `tabindex` → `tabIndex`, `style` takes a JavaScript object not a string. Boolean attributes like `disabled` can be written as just `disabled` without `={true}`.

**Q11. Return multiple elements without wrapping?**

Yes, using React Fragments: `<React.Fragment>` or shorthand `<>` `</>`. This avoids adding an extra DOM node.

**Q12. JSX comments:**

```jsx
{
  /* This is a JSX comment */
}
```

**Q13. `<img src={imageUrl} />` transpilation:**

Vite/Babel compiles this to `React.createElement('img', { src: imageUrl })`. The `{}` extracts the JavaScript variable value and passes it as a prop to the element.

---

## Section 3: Components

**Q14. Functional vs Class Components?**

Functional components are plain JavaScript functions that return JSX. They use hooks for state and lifecycle. Class components extend `React.Component`, use `this.state`, and lifecycle methods like `componentDidMount`. Functional components are now preferred — they are simpler, more readable, and support all React features via hooks.

**Q15. Naming conventions:**

Component names must start with a capital letter. PascalCase is the convention (e.g., `ProductCard`, `UserProfile`). Files should also be named with PascalCase (`ProductCard.jsx`).

**Q16. Functional component with name and age props:**

```jsx
function UserInfo({ name, age }) {
  return (
    <p>
      {name} is {age} years old
    </p>
  );
}
```

**Q17. Can component return null?**

Yes. When a component returns `null`, React renders nothing to the DOM for that component. The component still exists in the tree and re-renders normally — it just produces no visible output.

**Q18. Component composition:**

Composition means building complex UIs by combining smaller components. Instead of inheritance, React prefers composition — e.g., `<ProductList>` contains multiple `<ProductCard>` components. This makes code reusable, testable, and easier to maintain.

**Q19. How many components per file?**

Convention is one main exported component per file. Small helper components used only in that file can be co-located in the same file (not exported).

**Q20. Default export vs named export:**

Default export: `export default function App()` — imported as any name: `import App from './App'`. Named export: `export function Button()` — imported with exact name: `import { Button } from './Button'`. Most components use default exports.

---

## Section 4: Props

**Q21. What are props? Can child modify them?**

Props are read-only data passed from parent to child component. They are like function arguments. No, a child component cannot modify props — props flow one-way (parent → child). If child needs to update parent data, parent passes a callback function as a prop.

**Q22. Passing props from parent to child:**

```jsx
// Parent
<MovieCard title="Interstellar" rating={4.8} />;

// Child
function MovieCard({ title, rating }) {
  return (
    <p>
      {title} — {rating}/5
    </p>
  );
}
```

**Q23. Prop destructuring:**

Instead of `props.title`, we destructure directly in the function parameter: `function Card({ title, rating })`. It's cleaner, less repetition, and easier to see what props the component needs at a glance.

**Q24. Passing a function as prop:**

```jsx
// Parent
<Button onClick={() => setCount((c) => c + 1)}>Click me</Button>;

// Child
function Button({ onClick, children }) {
  return <button onClick={onClick}>{children}</button>;
}
```

**Q25. Children prop:**

`children` is a special prop that contains whatever JSX is placed between opening and closing tags of a component: `<Card><p>Content</p></Card>`. It's different from other props because it doesn't need to be explicitly named.

**Q26. Default props in functional components:**

```jsx
function Button({ variant = 'primary', size = 'medium' }) { ... }
// or
Button.defaultProps = { variant: 'primary' }
```

**Q27. Passing JSX as prop:**

```jsx
<Modal header={<h2>Title</h2>} footer={<button>Close</button>} />
```

---

## Section 5: State Management

**Q28. What is state? How different from regular variables?**

State is data managed inside a component that, when changed, causes React to re-render the component and update the UI. A regular variable change does NOT trigger a re-render — React doesn't know about it. State must be updated via `setState`/setter function for React to know to re-render.

**Q29. useState hook syntax:**

```jsx
const [count, setCount] = useState(0);
// count = current value, setCount = setter function, 0 = initial value
```

`useState` returns an array of two items — current state and the setter function.

**Q30. Why not directly mutate state?**

React uses reference equality to detect changes. If you mutate directly (`state.name = 'new'`), the reference doesn't change, React doesn't detect the change, and no re-render happens. Always create a new object/array.

**Q31. Update object in state:**

```jsx
setUser((prev) => ({ ...prev, name: "New Name" }));
// Spread creates a new object — not mutating original
```

**Q32. Update array in state:**

```jsx
// Add
setItems((prev) => [...prev, newItem]);
// Remove
setItems((prev) => prev.filter((item) => item.id !== targetId));
// Update
setItems((prev) =>
  prev.map((item) => (item.id === targetId ? { ...item, done: true } : item)),
);
```

**Q33. Functional form of setState:**

```jsx
setCount((prev) => prev + 1); // Use this when new value depends on previous value
setCount(count + 1); // Avoid this in async situations — may use stale value
```

Use functional form in event handlers called multiple times, in setTimeout/setInterval, or whenever the new value depends on the previous value.

**Q34. Can useState be called conditionally or in loops?**

No. React hooks must always be called at the top level of a component — never inside if/else, loops, or nested functions. This is because React tracks hooks by their call order. Breaking this causes React to lose track of which hook is which.

**Q35. Is setState synchronous or asynchronous?**

State updates are asynchronous and batched by React. After calling `setCount(5)`, `count` still holds the old value in the same event handler. The new value is available in the next render.

**Q36. Initialize state with complex computation:**

```jsx
// Lazy initialization - function runs only once, not on every render
const [data, setData] = useState(() => expensiveComputation());
```

**Q37. Counter component:**

See Task 5A — `Counter.jsx` in the project.

---

## Section 6: State vs Props

**Q38. Key differences between state and props?**

| State              | Props               |
| ------------------ | ------------------- |
| Owned by component | Passed by parent    |
| Can be changed     | Read only           |
| Internal data      | External data       |
| useState()         | Function parameters |

**Q39. Can props change?**

Yes, but only the parent can change them. When parent re-renders with new prop values, child also re-renders with new props. The child itself cannot change props.

**Q40. When to use state vs props?**

Use state for data that changes due to user interaction, timers, or API responses. Use props for passing that data down to display in children. A common pattern: parent owns state, passes it as props to children.

**Q41. Can you convert props to state? Should you?**

You can: `const [name, setName] = useState(props.name)`. But you usually should not — it creates a desync. The state won't update when props change. Only do this when you intentionally want a one-time initialization.

**Q42. How to lift state up?**

When two sibling components need to share state, move the state to their common parent. Parent manages the state and passes it as props + handler functions to both children. This is "lifting state up."

---

## Section 7: Conditional Rendering

**Q43. Different ways to implement conditional rendering?**

1. `if/else` statement before return
2. Ternary operator `condition ? A : B` inside JSX
3. Logical AND `condition && <Component />` inside JSX
4. Function with `switch` case
5. Immediately invoked function in JSX

**Q44. Ternary for conditional rendering:**

```jsx
{
  isLoggedIn ? <Dashboard /> : <LoginPage />;
}
```

**Q45. When to use && vs ternary?**

Use `&&` when you only want to show something or show nothing (no else branch): `{count > 0 && <Badge count={count} />}`. Use ternary when you need to show one of two things: `{isPremium ? <PremiumUI /> : <FreeUI />}`.

**Q46. Switch case pattern:**

```jsx
function renderContent(role) {
  switch (role) {
    case "admin":
      return <AdminDashboard />;
    case "editor":
      return <EditorDashboard />;
    default:
      return <GuestView />;
  }
}
// In JSX:
{
  renderContent(userRole);
}
```

**Q47. Render nothing in React?**

Return `null` from a component, or use `condition && element` where condition is false.

**Q48. Performance considerations with conditional rendering?**

When you use ternary `A ? B : C`, both B and C may be mounted/unmounted on every toggle, which is expensive. For frequently toggled elements, consider CSS `display: none` or `visibility: hidden` to keep component in tree but hide it.

---

## Section 8: Lists and Keys

**Q49. Why are keys important?**

Keys help React identify which items have changed, been added, or removed. Without keys, React re-renders the entire list. With proper keys, React only updates changed items — much more efficient.

**Q50. What makes a good key?**

A good key is unique among siblings, stable (doesn't change between renders), and predictable. Database IDs are perfect. UUIDs work well. Bad keys: random numbers (`Math.random()`), timestamps.

**Q51. When is index as key acceptable?**

Only when the list is static (never reordered, filtered, or deleted), and items have no stable ID. Examples: a static list of weekday names. Never use index for lists with add/remove/reorder.

**Q52. Without keys?**

React will show a console warning. Rendering may be incorrect when items are added/removed — React may reuse wrong DOM nodes, causing visual bugs and potential state corruption.

**Q53. Nested list with proper keys:**

```jsx
{
  categories.map((cat) => (
    <div key={cat.id}>
      {cat.products.map((product) => (
        <span key={product.id}>{product.name}</span>
      ))}
    </div>
  ));
}
```

**Q54. Can keys be non-unique?**

Keys must be unique among siblings (within the same list). They don't need to be globally unique. Two separate lists can have same key values. Duplicate keys in same list cause warnings and unpredictable behavior.

---

## Section 9: Fragments

**Q55. What are React Fragments and why needed?**

Fragments let you group multiple JSX elements without adding an extra DOM node. JSX must return a single root element. Without fragments, we'd add unnecessary `<div>` wrappers which breaks CSS flexbox/grid layouts and creates invalid HTML in tables.

**Q56. Difference between `<React.Fragment>` and `<>`?**

Both are equivalent — `<>` is shorthand for `<React.Fragment>`. The only difference: `<React.Fragment>` can accept a `key` attribute (needed in `.map()`). `<>` cannot accept any attributes.

**Q57. Fragment over div wrapper?**

Use fragment when: inside `<table>`, `<tr>`, `<ul>`, `<ol>` (adding div would break HTML validity), when you don't want extra CSS-affecting elements, or when building component libraries where extra wrappers interfere with parent CSS.

---

## Section 10: Event Handling

**Q58. How is React event handling different from vanilla JS?**

React uses camelCase event names (`onClick` not `onclick`). Events are attached as JSX props, not with `addEventListener`. React wraps native events in `SyntheticEvent` for cross-browser consistency. You don't need `removeEventListener` — React handles cleanup.

**Q59. What are Synthetic Events?**

SyntheticEvents are React's cross-browser wrapper around native browser events. They have the same interface as native events (`e.target`, `e.preventDefault()`, `e.stopPropagation()`) but work consistently across all browsers. They are pooled and reused for performance.

**Q60. Pass parameters to event handlers:**

```jsx
// Arrow function in JSX
<button onClick={() => handleClick(product.id)}>Add</button>
// NOT: onClick={handleClick(product.id)} — this calls immediately!
```

**Q61. Event bubbling and delegation in React?**

Event bubbling means events propagate up from child to parent. In React, instead of attaching handlers to each list item, you can attach one handler to the parent and use `e.target` to identify which child was clicked. This is more efficient for large lists.

**Q62. Controlled form component:**

```jsx
function Form() {
  const [data, setData] = useState({ name: "", email: "" });
  const handleChange = (e) =>
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  return (
    <form>
      <input name="name" value={data.name} onChange={handleChange} />
      <input name="email" value={data.email} onChange={handleChange} />
    </form>
  );
}
```

**Q63. `onClick={handleClick}` vs `onClick={handleClick()}`?**

`onClick={handleClick}` — correct. Passes the function reference. React will call it when clicked.

`onClick={handleClick()}` — wrong! This calls the function immediately during render, not on click. This runs on every render and causes infinite loops if it updates state.
