# Button Component

Description: The Button component is a functional React component that renders a styled button as an anchor (`<a>`) element with customizable properties.

## Component Code

```
import styles from "./button.module.scss";

export default function Button({ className, children, primary, ...props }) {
  const buttonClass = `${styles.btn} ${primary && styles.primary} ${className}`;

  return (
    <a
      className={buttonClass}
      {...props}>
      {children}
    </a>
  );
}
```

## Import:

- `styles` module from `./button.module.scss` containing the CSS styles for the component.

## Props:

- `className` (string): A custom class name that can be passed to the component for additional styling.
- `children` (React Node): The content to be displayed within the button.
- `primary` (boolean): Determines if the button should have the primary style applied. If `true`, the primary style will be applied.
- `...props` (object): Additional props that can be passed to the anchor (`<a>`) element.

## Anchor Element:

- `className`: A dynamic class name that combines the following:
  - `styles.btn`: Base style for the button.
  - `styles.primary`: Optional primary style, applied if the - `primary` prop is `true`.
  - `className`: Custom class name passed via the `className` prop.
- `{...props}`: Spreads any additional props passed to the Button component to the anchor (`<a>`) element.
- `children`: Content to be displayed within the button.

## Usage

```
import Button from "./button";

// ...

function App() {
  return (
    <div>
      <Button primary className="custom-class" href="https://example.com">
        Click me
      </Button>
    </div>
  );
}

export default App;
```
