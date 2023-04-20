# Arrow Component

Description: The Arrow component is a customizable and reusable React component that renders an arrow icon. It is designed to be used in various parts of an application, and its appearance and behavior can be customized through its props.

## Code

```
import styles from "./arrow.module.scss";

export default function Arrow({ direction, className, onClick }) {
  const classes = `bx bx-chevron-${direction} ${styles.arrow} ${className}`;

  return (
    <i
      className={classes}
      onClick={onClick}></i>
  );
}
```

## Props:

- `direction` (string, required): Determines the direction of the arrow. It can only be one of the following values: "up", "down", "left", or "right".
- `className` (string, optional): Additional class names to apply to the arrow component, allowing for further customization.
- `onClick` (function, optional): A function that will be called when the arrow component is clicked. The function should not expect any arguments.

## Usage

To use the Arrow component, import it and pass the required props:

```
import Arrow from './arrow';

function ExampleComponent() {
  const handleClick = () => {
    console.log('Arrow clicked!');
  };

  return (
    <div>
      <Arrow direction="right" onClick={handleClick} />
    </div>
  );
}
```

In the example above, the Arrow component will render an arrow pointing to the right. When the arrow is clicked, the handleClick function will be executed, logging "Arrow clicked!" to the console.
