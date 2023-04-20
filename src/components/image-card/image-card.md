# ImageCard Component

The `ImageCard` component is a reusable and customizable image card for displaying images with optional animation and clickability. This component is implemented using React functional components and accepts various properties for controlling its appearance and behavior.

## Import

```
import ImageCard from "./image-card";
```

## Props

| Prop      | Type     | Default | Description                                                   |
| --------- | -------- | ------- | ------------------------------------------------------------- |
| className | string   | `''`    | Custom CSS class to apply to the ImageCard component.         |
| onClick   | function | `null`  | Event handler for click events on the ImageCard component.    |
| animated  | boolean  | `false` | Enables or disables animation of the ImageCard component.     |
| ...props  | object   | `{}`    | Any other props will be passed directly to the `img` element. |

## Usage

To use the `ImageCard` component, simply import it into your project and provide the necessary props.

### Basic Usage

```
import ImageCard from "./image-card";

<ImageCard src="path/to/image.jpg" alt="Image description" />
```

### Clickable Image Card

```
import ImageCard from "./image-card";

<ImageCard
  src="path/to/image.jpg"
  alt="Image description"
  onClick={() => alert('Image clicked!')}
/>
```

### Animated Image Card

```
import ImageCard from "./image-card";

<ImageCard src="path/to/image.jpg" alt="Image description" animated />
```

## Styling

The component uses the `image-card.module.scss` file for styling, which contains CSS classes for the card, clickable state, and animated state. You can customize the appearance of the component by modifying the styles in this file or by providing your own custom CSS classes.
