# Button Component

The `Button` component is a reusable and customizable button component for React applications. It can be used as a simple link (using the `<a>` element) or as a navigation link (using the `<Link>` element from `react-router-dom`). The component accepts various props to control its appearance and behavior.


## Dependencies

The `Button` component has the following dependencies:

1. `react`: The core React library is required to build and use this component.
2. `react-router-dom`: This library is used for client-side navigation when the `to` prop is provided.

To install these dependencies in your project, run the following command:

```
npm install react react-router-dom
```

Or, if you prefer using `yarn`:

```
yarn add react react-router-dom
```


## Imports

```
import styles from "./button.module.scss";
import { Link } from "react-router-dom";
```

1. `styles`: An import of the CSS module containing the styles for the button component.
2. `Link`: A named import from the `react-router-dom` library, used for client-side navigation between routes.


## Component Signature

```
export default function Button({ className, children, primary, to, ...props }) {
  // ...
}
```

The `Button` component is a functional component that accepts the following props:

1. `className`: (Optional) A custom CSS class to be added to the button.
2. `children`: The content of the button (usually text).
3. `primary`: (Optional) A boolean indicating whether the button should have primary styling.
4. `to`: (Optional) A path to navigate to when the button is clicked. If provided, the button will use the `<Link>` element from `react-router-dom`.
5. `...props`: Any additional props to be passed to the button.

## Implementation

```
const buttonClass = `${styles.btn} ${primary && styles.primary} ${className}`;

if (to)
  return (
    <Link
      to={to}
      className={buttonClass}>
      {children}
    </Link>
  );

return (
  <a
    role="button"
    className={buttonClass}
    {...props}>
    {children}
  </a>
);
```

1. The `buttonClass` constant is created by concatenating the base button class, primary class (if `primary` prop is true), and any custom `className` provided.
2. If the `to` prop is provided, the component renders a `<Link>` element with the `to` and `className` props, along with the button's content (`children`).
3. If the `to` prop is not provided, the component renders an `<a>` element with a `role` attribute set to "button", the `className`, and the button's content (`children`). Additionally, any extra props (`...props`) are spread onto the `<a>` element.


## Usage

To use the `Button` component in your React application, simply import it and use it in your JSX code. Below are a few examples of how to use the component with different props:

### Basic Usage

```
import Button from "./Button";

function MyComponent() {
  return (
    <div>
      <Button>Click me</Button>
    </div>
  );
}
```

This example renders a basic button with the text "Click me".

### Primary Button

```
import Button from "./Button";

function MyComponent() {
  return (
    <div>
      <Button primary>Click me</Button>
    </div>
  );
}
```

This example renders a primary-styled button with the text "Click me".

### Custom CSS Class

```
import Button from "./Button";

function MyComponent() {
  return (
    <div>
      <Button className="my-custom-class">Click me</Button>
    </div>
  );
}
```

This example renders a button with the text "Click me" and a custom CSS class "my-custom-class".

### Navigation Button

```
import Button from "./Button";

function MyComponent() {
  return (
    <div>
      <Button to="/about">About</Button>
    </div>
  );
}
```

This example renders a button that navigates to the "/about" route when clicked. It uses the `react-router-dom`'s `<Link>` component under the hood.

### Additional Props

```
import Button from "./Button";

function MyComponent() {
  return (
    <div>
      <Button onClick={() => alert("Button clicked!")}>Click me</Button>
    </div>
  );
}
```

This example renders a button with an `onClick` event handler that displays an alert when the button is clicked.