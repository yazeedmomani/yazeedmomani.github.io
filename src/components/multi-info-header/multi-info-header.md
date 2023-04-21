# MultiInfoHeader Component

`MultiInfoHeader` is a functional React component that displays a header with a title and a list of statements. The statements are displayed as a series of spans inside the container. This component is highly reusable and can be used in various parts of your application where a header with multiple pieces of information is needed.

## Usage

```
import MultiInfoHeader from "./multi-info-header";

function App() {
  const statements = ["Statement 1", "Statement 2", "Statement 3"];

  return (
    <div>
      <MultiInfoHeader className="custom-class" title="Header Title" statements={statements} />
    </div>
  );
}
```

## Dependencies

- `React` needs to be installed in the project.
- The `multi-info-header.module.scss` file should be present in the same directory as the `MultiInfoHeader` component.

## Props

| Prop         | Type   | Description                                                                                                 | Required |
| ------------ | ------ | ----------------------------------------------------------------------------------------------------------- | -------- |
| `className`  | string | A CSS class that can be applied to the container of the component, allowing for custom styling.             | No       |
| `title`      | string | The title text to be displayed as an `h3` element inside the container.                                     | No       |
| `statements` | array  | An array of strings, each representing a statement to be rendered as a `span` element inside the container. | No       |
