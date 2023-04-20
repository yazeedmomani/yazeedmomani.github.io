# SectionHeader Component

Description: The `SectionHeader` component is a functional React component used to display a section header with a title and a section name. It takes four optional properties: `className`, `title`, `name`, and `dark`.

## Props

- `className` (String): An optional custom CSS class to apply to the component.
- `title` (String): The main title of the section.
- `name` (String): The name of the section, displayed above the title.
- `dark` (Boolean): A flag to indicate if the dark theme should be applied to the component. Default is false.

## Example Usage

```
import SectionHeader from "./SectionHeader";

function MyComponent() {
  return (
    <div>
      <SectionHeader
        className="custom-class"
        title="My Section Title"
        name="My Section Name"
        dark
      />
    </div>
  );
}
```

In the example above, the `SectionHeader` component is imported and used in another component. The `className`, `title`, `name`, and `dark` properties are set with custom values.
