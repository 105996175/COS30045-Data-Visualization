# Exercise 4.6: Scaling Charts

## Overview

This exercise improves the bar chart created in Exercise 4.5 by adding D3 scales.

The goal is to make the chart adapt to the available SVG size instead of using raw data values directly for the bar dimensions.

Two D3 scales are used:

- `d3.scaleLinear()` for the quantitative count data on the x-axis.
- `d3.scaleBand()` for the categorical brand data on the y-axis.

## What I Did

- Continued from the Exercise 4.5 bar chart.
- Changed the SVG `viewBox` to `0 0 500 500`.
- Added a linear scale for the TV count values.
- Added a band scale for the TV brand categories.
- Used the linear scale to calculate each bar width.
- Used the band scale to calculate each bar position.
- Used `yScale.bandwidth()` to calculate bar thickness.
- Added padding between the bars.
- Removed the old fixed `barHeight` and `barSpacing` values.
- Kept the data sorted from highest to lowest count.

## SVG Setup

The SVG uses a smaller viewBox so the chart must rely on scaling:

```javascript
const svg = d3.select(".responsive-svg-container")
    .append("svg")
    .attr("viewBox", "0 0 500 500")
    .style("border", "1px solid black");
```

## Linear Scale

A linear scale is used to convert the TV count values into bar widths:

```javascript
const xScale = d3.scaleLinear()
    .domain([0, 1100])
    .range([0, 500]);
```

The domain represents the range of count values in the dataset.

The range represents the available width of the SVG.

The bar width is then calculated using:

```javascript
.attr("width", d => xScale(d.count))
```

## Band Scale

A band scale is used to position the TV brands vertically:

```javascript
const yScale = d3.scaleBand()
    .domain(data.map(d => d.brand))
    .range([0, 500])
    .padding(0.1);
```

The brand names are used as the categorical domain.

The `padding(0.1)` value creates a small gap between each bar.

The y-position of each bar is calculated using:

```javascript
.attr("y", d => yScale(d.brand))
```

The height of each bar is calculated using:

```javascript
.attr("height", yScale.bandwidth())
```

## Bar Chart Code

The completed bar chart function is:

```javascript
const drawBarChart = data => {

    const xScale = d3.scaleLinear()
        .domain([0, 1100])
        .range([0, 500]);

    const yScale = d3.scaleBand()
        .domain(data.map(d => d.brand))
        .range([0, 500])
        .padding(0.1);

    svg
        .selectAll("rect")
        .data(data)
        .join("rect")
        .attr("width", d => xScale(d.count))
        .attr("height", yScale.bandwidth())
        .attr("fill", "blue")
        .attr("x", 0)
        .attr("y", d => yScale(d.brand));
};
```

## Result

The final chart fits within a `500 × 500` SVG.

The largest TV brand count is scaled to fit the available chart width, while the smaller values are scaled proportionally.

The bars are also distributed evenly down the y-axis with consistent spacing between them.

At this stage, the chart does not yet display labels. Labels will be added in the next exercise.

## Files

- `index.html` - Energy Consumption webpage containing the SVG container.
- `assets/css/style.css` - Website and responsive SVG styling.
- `assets/js/main.js` - D3 code for loading the CSV data and creating the scaled bar chart.
- `assets/js/script.js` - Existing JavaScript for the Energy Consumption website.
- `data/tvBrandCount.csv` - Processed TV brand count dataset.

## Generative AI Use

Generative AI (ChatGPT) was used to assist with understanding the Exercise 4.6 scaling instructions, comparing the intermediate examples with the completed exercise code, explaining D3 linear and band scales, and checking the final chart output.

The suggested explanations and code were reviewed and tested before being included in the final work.

## References

- Dufour, A. M. & Meeks, E. (2024). *D3.js in Action*.
- COS30045 Week 4 lecture materials.

## Live Website

[View Exercise 4.6 on Mercury](https://mercury.swin.edu.au/cos30045/s105996175/exercise4/exercise4.6/)

