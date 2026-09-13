# Exercise 4.5: D3 Binding and Drawing with Data

## Overview

This exercise uses the TV brand count data prepared in Exercise 4.4 and binds the data to SVG rectangle elements using D3.js.

The rectangles are then styled and positioned to form a simple horizontal bar chart.

## What I Did

- Continued from the Exercise 4.4 Energy Consumption website.
- Used the CSV data loaded with `d3.csv()`.
- Passed the processed data into `drawBarChart(data)`.
- Created a `drawBarChart()` function.
- Bound the dataset to SVG rectangle elements using `.data(data)`.
- Created one `<rect>` element for each data row using `.join("rect")`.
- Added a class to each rectangle based on its `count` value.
- Set the width of each bar using `d.count`.
- Set a constant height for all bars.
- Added a blue fill colour.
- Positioned all bars at `x = 0`.
- Used the data index to position each bar vertically.
- Added spacing between the bars.

## Data Binding

The bar chart is created by binding the imported data to SVG rectangles:

```javascript
svg
    .selectAll("rect")
    .data(data)
    .join("rect");
```

This creates one rectangle for each row in the dataset.

## Bar Chart Code

The completed `drawBarChart()` function is:

```javascript
const drawBarChart = data => {

    const barHeight = 20;
    const barSpacing = 5;

    svg
        .selectAll("rect")
        .data(data)
        .join("rect")
        .attr("class", d => {
            console.log(d);
            return `bar bar-${d.count}`;
        })
        .attr("x", 0)
        .attr("y", (d, i) => i * (barHeight + barSpacing))
        .attr("width", d => d.count)
        .attr("height", barHeight)
        .attr("fill", "blue");
};
```

## Bar Positioning

Each bar starts at:

```text
x = 0
```

The vertical position is calculated using:

```javascript
(d, i) => i * (barHeight + barSpacing)
```

With:

```text
barHeight = 20
barSpacing = 5
```

the bars are placed 25 SVG units apart vertically.

## Result

The final webpage displays a horizontal bar chart where:

- each TV brand is represented by one bar;
- the width of each bar is based directly on the TV model count;
- the bars are sorted from largest to smallest;
- the bars are displayed vertically with spacing between them;
- all bars are filled in blue.

At this stage, the chart does not yet use a scale or display labels. These features will be added in later exercises.

## Files

- `index.html` - Energy Consumption webpage containing the responsive SVG container.
- `assets/css/style.css` - Website and responsive SVG styling.
- `assets/js/main.js` - D3 code for loading the CSV data and drawing the bar chart.
- `assets/js/script.js` - Existing JavaScript for the Energy Consumption website.
- `data/tvBrandCount.csv` - Processed TV brand count dataset.

## Generative AI Use

Generative AI (ChatGPT) was used to assist with understanding the Exercise 4.5 instructions, checking the D3 data-binding process, explaining the bar positioning formula, and verifying the final bar chart output.

The suggested code and explanations were reviewed and tested before being included in the final work.

## References

- Dufour, A. M. & Meeks, E. (2024). *D3.js in Action*.
- COS30045 Week 4 lecture materials.

## Live Website

[View Exercise 4.5 on Mercury](https://mercury.swin.edu.au/cos30045/s105996175/exercise4/exercise4.5/)