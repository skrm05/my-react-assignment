# [cite_start]Comparison: Extra Div Wrapper vs Fragment [cite: 233, 234]

## Extra Div Wrapper

When returning multiple elements, wrapping them in a `<div>` adds an extra node to the DOM.

- **Drawbacks**: It bloats the HTML structure. More importantly, it can break HTML semantics and CSS layouts. For example, if you render `<div><td>Data</td></div>` inside a `<tr>`, the table structure is invalid and will render incorrectly. Flexbox or CSS Grid layouts will also treat the wrapper div as a child, ruining the grid.

## [cite_start]Fragment (`<React.Fragment>` or `<></>`) [cite: 237]

Fragments group a list of children without adding extra nodes to the DOM.

- **Benefits**: Keeps the DOM clean and preserves parent-child relationships required by HTML semantics (like `table > tr > td` or `ul > li`) and CSS layouts.

## [cite_start]When fragments are necessary [cite: 235]

1. Returning multiple elements from a component's render method.
2. Inside tables (`<tr>`, `<td>`), lists (`<ul>`, `<li>`), or definition lists (`<dl>`, `<dt>`, `<dd>`) where structural HTML wrappers are strictly forbidden.
3. Grouping elements that are part of a CSS Grid or Flex container where a wrapper div would disrupt the layout flow.
