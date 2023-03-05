# Introduction to CSS

CSS (Cascading Style Sheets) is a styling language that allows you to create beautiful and engaging designs for your web pages. By separating the presentation of a web page from its content, CSS provides greater flexibility and control over the appearance of your web pages.

## Syntax
CSS uses selectors and declarations to apply styles to HTML elements. A selector is used to target a specific HTML element, while a declaration is used to specify the style rules for that element. Here's an example:

```
selector {
  property: value;
}
```

In this example, the selector targets the HTML element(s) that the style rule applies to. The property determines what style you want to change, and the value is the new value you want to assign to that property.

## Selectors
Selectors are used to target specific HTML elements to apply CSS styles to. Here are some of the most commonly used selectors:

- Element selector targets all instances of an element type (e.g. p for paragraphs -> `tagName { ... }`)

- Class selector targets elements with a specific class (e.g. .my-class -> `.className { ... }`)

- ID selector targets elements with a specific ID (e.g. #my-id -> `#idName { ... }`)

- Descendant selector targets elements that are descendants of a specific element (e.g. ul li targets all li elements that are descendants of a ul element -> `parentTag descendantTag { ... }`)

- Child selector targets elements that are direct children of a specific element (e.g. ul > li targets all li elements that are direct children of a ul element -> `parentTag > childTag { ... }`)

- Attribute selector targets elements with a specific attribute (e.g. [href] targets all elements with an href attribute -> `tagName[attribute] { ... }`)

## Properties

CSS has a wide range of properties that can be used to style HTML elements. Here are some of the most commonly used properties:

- `color` sets the color of the text (e.g. color: red)

- `font-family` sets the font for the text (e.g. font-family: Arial, sans-serif)

- `font-size` sets the size of the text (e.g. font-size: 16px)

- `background-color` sets the background color of an element (e.g. background-color: blue)

- `padding` sets the padding of an element (e.g. padding: 10px)

- `margin` sets the margin of an element (e.g. margin: 10px)

- `border` sets the border of an element (e.g. border: 1px solid black)

- `display` sets how an element is displayed (e.g. display: block)

- `position` sets the position of an element (e.g. position: absolute)

    - Flexbox sets how child elements are positioned within a container (e.g. display: flex)

    - Grid sets how child elements are positioned within a container (e.g. display: grid)

- `Animation` sets animations for an element (e.g. animation: slide-in 1s forwards)

- `Transform` sets transformations for an element (e.g. transform: rotate(45deg))

## Semantics
Semantics in CSS refer to the meaning of HTML elements and how they can be used to create more meaningful and accessible web pages. For example, using semantic HTML elements like `header`, `main`, and `footer` can improve the structure and accessibility of your web page. CSS can be used to style these elements to make them visually appealing and engaging.

## Responsiveness

Responsiveness refers to the ability of a website or web application to adapt to different screen sizes and devices. This means that the layout and design of a website should be flexible enough to look good on a desktop computer, a tablet, a smartphone, and other devices.

People access the internet from a variety of devices, and it's essential to provide a consistent user experience across all of them. A responsive website can help you reach a broader audience and improve user engagement and satisfaction.

Respnsiveness can come in the from of:

### Respnsive sizing

Sizing refers to how we specify the dimensions of elements on a web page. There are several units of measurement that we can use in CSS:

- `px`: This is a fixed unit of measurement, which means that the size will always be the same regardless of the screen size or device. It's not recommended to use this for sizing elements on a web page because it's not responsive.

- `em`: This unit of measurement is relative to the font size of the element. For example, if an element has a font size of 16px and we set the width to 10em, the width will be 160px. This can be useful for responsive design because the size of the element will adjust based on the font size.

- `rem`: This unit of measurement is similar to em, but it's relative to the root element (i.e., the html element). This makes it easier to create consistent sizing across the entire page.

- `vw` and `vh`: These units of measurement are relative to the viewport width and height, respectively. For example, if we set the width of an element to 50vw, the width will be 50% of the viewport width. This is useful for creating responsive designs that adjust based on the size of the viewport.

- percentages(`%`): This unit of measurement is also relative and is expressed as a percentage of the parent element. For example, if a child element has a width of 50% and the parent element has a width of 500px, the child element will have a width of 250px.

When deciding which unit of measurement to use, it's important to consider the context and purpose of the element. For example, we might want to use vw and vh for the overall layout of the page, em for text sizing, and rem for consistent spacing between elements.

### CSS functions

CSS functions are built-in functions that can be used to manipulate values within CSS properties. They allow you to perform calculations and transformations on values to achieve desired effects in your CSS styling. There are several CSS functions that are commonly used

```
rgb(red, green, blue) 
rgba(red, green, blue, alpha)
```
- RGB and RGBA functions 
    - The RGB and RGBA functions are used to define colors in CSS.
    - RGB stands for "red, green, blue" and it allows you to define a color by specifying the amount of each primary color. The values for each color range from 0 to 255.
    - RGBA is similar to RGB, but it allows you to specify an alpha value (which controls the transparency of the color). The alpha value ranges from 0 (fully transparent) to 1 (fully opaque).

```
hsl(hue, saturation, lightness)
hsla(hue, saturation, lightness, alpha)
```
- HSL and HSLA functions
    - The HSL and HSLA functions are similar to the RGB and RGBA functions, but they allow you to define colors in terms of hue, saturation, and lightness. The HSL function takes three values: hue (in degrees), saturation (as a percentage), and lightness (as a percentage).


- calc function `calc(expression)`
    - The calc function is a powerful CSS function that allows you to perform calculations on numerical values. You can use it to perform basic arithmetic operations such as addition, subtraction, multiplication, and division. The syntax for the calc function is as follows:


- There are many other CSS functions that can be used to achieve different effects in your styling. Here are a few examples:
    - Transform functions: Used to apply transformations to elements, such as rotating or scaling them. Examples include rotate(), scale(), and translate().
    - Filter functions: Used to apply visual effects to elements, such as blurring or adjusting brightness. Examples include blur(), brightness(), and contrast().
    - Gradient functions: Used to create gradient backgrounds for elements. Examples include linear-gradient() and radial-gradient().


#### Media Queries

Media queries are a powerful feature of CSS that allow us to apply different styles to a page based on the characteristics of the device or browser that is being used to view it. Media queries can be used to change the layout, font sizes, and other aspects of the design in order to make a website more responsive to different devices and screen sizes. They are a key tool for creating responsive designs that look good on a variety of devices. By specifying different rules for different screen sizes, we can create layouts that adapt to the available space and provide a good user experience on devices of all sizes.

Basic Syntax

- A media query starts with the `@media` keyword, followed by a set of conditions that must be met for the rules inside the media query to apply. Inside the media query, we can write any valid CSS rules. These rules will only apply if the conditions specified in the media query are met.
Here's an example:
```
@media screen and (max-width: 600px) {
  /* CSS rules go here */
}
```
- In this example, the media query applies to screens with a maximum width of 600 pixels. The screen part specifies that the rules should only apply to devices with a screen, as opposed to devices like printers or screen readers.


Condition Types

- There are several different types of conditions that can be used in media queries. Here are a few of the most common:

    - `width`: Specifies the width of the viewport.
    - `height`: Specifies the height of the viewport.
    - `min-width`: Specifies the minimum width of the viewport.
    - `max-width`: Specifies the maximum width of the viewport.
    - `orientation`: Specifies the orientation of the device (portrait or landscape).
    - `aspect-ratio`: Specifies the aspect ratio of the viewport.
    - `resolution`: Specifies the resolution of the device.

- These conditions can be combined using logical operators like and, or, and not to create more complex conditions.


One common use of media queries is to create a "mobile-first" design, where the basic layout is optimized for smaller screens and additional styles are added as the screen size increases.

Great sites to help are:
[HTML Cheat Sheet](https://htmlcheatsheet.com/css/) and
[W3 Schools](https://www.w3schools.com/css/default.asp)

Some tips and tricks to keep in mind when using CSS:

- Use a CSS reset or normalize
- CSS debugging is done best with `border: 1px solid red`



