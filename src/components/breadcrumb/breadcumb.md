# Breadcrumb Component

The Breadcrumb component is a navigational aid that displays the current page's location within a navigational hierarchy.

## Usage

To use the Breadcrumb component, import it and pass an array of `items` as a prop. Each item in the array represents a step in the navigation hierarchy, with the last item being the current page.

Here's an example of how to use the Breadcrumb component:

```
import Breadcrumb from "./Breadcrumb";

const items = [
  {
    text: "Home",
    to: "/",
  },
  {
    text: "Projects",
    to: "/projects",
  },
  {
    text: "Josor Steels",
  },
];

function App() {
  return (
    <div>
      <Breadcrumb items={items} />
    </div>
  );
}
```

## Dependencies

- React: The Breadcrumb component is built using React.
- react-router-dom: The component uses the `Link` component from `react-router-dom` to create navigation links.
- BoxIcons: The Breadcrumb component utilizes the BoxIcons library for the chevron-right icon.

## Props

The Breadcrumb component accepts the following props:

- `items` (required): An array of objects representing the navigation hierarchy. Each object should have a `text` property (string) with the text to display, and a `to` property (string) with the path to navigate to when clicked. The last item in the array should not have a `to` property, as it represents the current page.

Example:

```
const items = [
  {
    text: "Home",
    to: "/",
  },
  {
    text: "Projects",
    to: "/projects",
  },
  {
    text: "Josor Steels",
  },
];
```


## Styling

The component uses the `breadcrumb.module.scss` file for styling. Import the styles and customize the look and feel as needed.
