# Exercise 4.3: D3 Setup

## Overview

This exercise sets up a responsive SVG canvas using D3.js as preparation for creating a bar chart from CSV data in the following exercises.

The SVG is generated dynamically using D3 and placed inside a responsive container so that it can scale according to the browser window size.

## What I Did

- Continued from the Energy Consumption website used in the previous exercise.
- Removed the D3 manipulation code from Exercise 4.2.
- Kept the D3 library and `main.js` script linked in `index.html`.
- Added a responsive SVG container to the webpage.
- Added CSS to make the SVG container responsive.
- Used D3 to create an SVG element.
- Added a `viewBox` of `0 0 1200 1600`.
- Added a temporary border around the SVG canvas to show its boundaries.
- Used D3 to append a blue test rectangle to the SVG.
- Tested the webpage using Live Server.

## D3 Code

The SVG canvas was created using D3:

```javascript
const svg = d3.select(".responsive-svg-container")
    .append("svg")
    .attr("viewBox", "0 0 1200 1600")
    .style("border", "1px solid black");
```

A test rectangle was then added:

```javascript
svg
    .append("rect")
    .attr("x", 10)
    .attr("y", 10)
    .attr("width", 414)
    .attr("height", 16)
    .attr("fill", "blue");
```

## Responsive SVG Container

The following CSS was used to make the SVG container responsive:

```css
.responsive-svg-container {
    margin-right: auto;
    margin-left: auto;
    width: 100%;
    max-width: 1200px;
}
```

The following container was added to `index.html`:

```html
<div class="responsive-svg-container"></div>
```

## Result

The final webpage displays a responsive SVG canvas with a thin blue rectangle positioned near the top-left corner.

This exercise prepares the website for the next stage, where data from a CSV file will be used to generate SVG elements dynamically.

## Generative AI Use

Generative AI (ChatGPT) was used to assist with understanding the exercise instructions, checking the D3 setup, and troubleshooting the implementation. The suggested code was reviewed and tested before being included in the final work.

## References

- Dufour, A. M. & Meeks, E. (2024). *D3.js in Action*.
- COS30045 Week 4 lecture materials.

## Live Website

[View Exercise 4.3 on Mercury](https://mercury.swin.edu.au/cos30045/s105996175/exercise4/exercise4.3/)

