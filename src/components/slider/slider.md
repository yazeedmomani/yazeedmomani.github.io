# React Slider Component with Swiper

Description: A reusable Slider component for React applications, utilizing the Swiper library for creating responsive, customizable, and touch-friendly carousels.

## Import and Dependencies

The component imports the necessary libraries and components, such as:

- React: The JavaScript library for building user interfaces
- Swiper and useSwiper: The Swiper library and custom hook for implementing the slider
- Arrow: A custom Arrow component for creating the previous and next buttons
- styles: A SASS module containing the styling for the slider

### Configuration

The `swiperConfig` object contains the following properties:

- `slidesPerView`: The number of slides to be shown at once (default: 1).
- `spaceBetween`: The space between each slide in pixels (default: 10).
- `loop`: Whether to loop the slides when the end is reached (default: true).
- `pagination`: An object configuring the pagination element, with properties:
  - `el`: The CSS selector for the pagination element (default: ".swiper-pagination").
  - `clickable`: Whether the pagination bullets are clickable (default: true).
- `navigation`: An object configuring the navigation elements, with properties:
  - `nextEl`: The CSS selector for the "next" navigation button (default: ".swiper-button-next").
  - `prevEl`: The CSS selector for the "previous" navigation button (default: ".swiper-button-prev").

## NextButton and PreviousButton Components

The `NextButton` and `PreviousButton` components are functional components that use the `useSwiper` hook to access the Swiper instance. These components utilize the custom Arrow component with appropriate direction props, onClick handlers, and CSS class names.

## Slider Component

The main `Slider` component takes a `children` prop that contains the slides to be rendered inside the carousel. The Swiper component receives the `swiperConfig` as its properties, and the `children` slides are placed inside it. The previous and next buttons are rendered within a container with a specific CSS class name.

## Usage

1. Import the `Slider` component and `SwiperSlide` from `swiper/react` in the parent component:

   ```
   import Slider from "./slider";
   import { SwiperSlide } from "swiper/react";
   ```

2. Use the `Slider` component with `SwiperSlide` as children, providing the content for each slide:

   ```
   <Slider>
     <SwiperSlide>
       <h1>Slide 1</h1>
     </SwiperSlide>

     <SwiperSlide>
       <h1>Slide 2</h1>
     </SwiperSlide>

     <SwiperSlide>
       <h1>Slide 3</h1>
     </SwiperSlide>

     <SwiperSlide>
       <h1>Slide 4</h1>
     </SwiperSlide>
   </Slider>
   ```
