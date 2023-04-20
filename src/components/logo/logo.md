# Logo Component

Description: The Logo component is a functional React component that renders an SVG logo with customizable styling.

## Import

- `styles` module from `./logo.module.scss` containing the CSS styles for the component.

## Props

- `dark` (boolean): Determines if the logo should be displayed in dark mode. If `true`, the dark mode style will be applied.
- `className` (string): A custom class name that can be passed to the component for additional styling.

## Usage

```
import Logo from "./logo";

// ...

function App() {
  return (
    <div>
      <Logo dark className="custom-class" />
    </div>
  );
}

export default App;
```
