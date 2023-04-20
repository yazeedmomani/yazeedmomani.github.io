# React Slider Component with Swiper

Description: A reusable Slider component for React applications, utilizing the Swiper library for creating responsive, customizable, and touch-friendly carousels.

## Table of Contents

- Component Code
- Usage

## Component Code

```
import React from "react";
import { Swiper } from "swiper/react";
import "swiper/css";

const swiperConfig = {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
};

export default function Slider({ children }) {
  return <Swiper {...swiperConfig}>{children}</Swiper>;
}
```

### Dependencies

- `react`
- `swiper`

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

3. Add the necessary CSS classes for the pagination and navigation elements in your stylesheets.
