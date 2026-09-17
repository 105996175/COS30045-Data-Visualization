# Exercise 4.7: Adding Labels

## Overview

This exercise extends the D3 bar chart created in Exercise 4.6 by adding labels for each TV brand and displaying the count value at the end of each bar.

The bars and labels are grouped together using SVG `<g>` elements so they can be positioned and transformed as one unit.

## What I Did

- Continued from the completed Exercise 4.6 bar chart.
- Created space on the left side of the chart for brand labels.
- Replaced the previous rectangle-only selection with SVG `<g>` groups.
- Bound the TV brand data to the groups.
- Used `transform` and `translate()` to position each group according to the band scale.
- Added the blue bar rectangles back inside each group.
- Added the TV brand name as a text label.
- Right-aligned the brand labels using `text-anchor="end"`.
- Added the count value after the end of each bar.
- Adjusted the x-scale range so the bars and count labels fit inside the SVG.
- Kept the data sorted from highest to lowest count.

## Grouping Bars and Labels

A group is created for each TV brand so the bar and its labels move together:

```javascript
const barAndLabel = svg
    .selectAll("g")
    .data(data)
    .join("g")
    .attr("transform", d => `translate(0, ${yScale(d.brand)})`);
```

The group is positioned vertically using the band scale.

## Adding the Bars

The rectangles are added inside each group:

```javascript
barAndLabel
    .append("rect")
    .attr("width", d => xScale(d.count))
    .attr("height", yScale.bandwidth())
    .attr("fill", "blue")
    .attr("x", 100)
    .attr("y", 0);
```

The bars begin at `x = 100` to leave space for the brand labels.

The rectangle y-position is set to `0` because the group itself is already positioned using `translate()`.

## Adding Brand Labels

The TV brand names are added using SVG text elements:

```javascript
barAndLabel
    .append("text")
    .text(d => d.brand)
    .attr("x", 90)
    .attr("y", 15)
    .attr("text-anchor", "end")
    .style("font-size", "13px");
```

The `text-anchor="end"` attribute right-aligns the brand names next to the bars.

## Adding Count Labels

The count value is displayed after each bar:

```javascript
barAndLabel
    .append("text")
    .text(d => d.count)
    .attr("x", d => 100 + xScale(d.count) + 4)
    .attr("y", 12)
    .style("font-size", "13px");
```

The x-position is calculated using the starting position of the bar, its scaled width, and a small gap.

## Bar Chart Function

The completed bar chart function is:

```javascript
const drawBarChart = data => {

    const xScale = d3.scaleLinear()
        .domain([0, 1100])
        .range([0, 350]);

    const yScale = d3.scaleBand()
        .domain(data.map(d => d.brand))
        .range([0, 500])
        .padding(0.1);

    const barAndLabel = svg
        .selectAll("g")
        .data(data)
        .join("g")
        .attr("transform", d => `translate(0, ${yScale(d.brand)})`);

    barAndLabel
        .append("rect")
        .attr("width", d => xScale(d.count))
        .attr("height", yScale.bandwidth())
        .attr("fill", "blue")
        .attr("x", 100)
        .attr("y", 0);

    barAndLabel
        .append("text")
        .text(d => d.brand)
        .attr("x", 90)
        .attr("y", 15)
        .attr("text-anchor", "end")
        .style("font-size", "13px");

    barAndLabel
        .append("text")
        .text(d => d.count)
        .attr("x", d => 100 + xScale(d.count) + 4)
        .attr("y", 12)
        .style("font-size", "13px");
};
```

## Result

The final visualisation is a horizontal bar chart showing:

- the TV brand name on the left;
- a horizontal blue bar for each brand;
- the exact count value at the end of each bar;
- brands sorted from the highest count to the lowest count.

The grouping of the bar and labels ensures that all elements remain aligned with the corresponding data item.

## Files

- `index.html` - Energy Consumption webpage containing the responsive SVG container.
- `assets/css/style.css` - Website and chart styling.
- `assets/js/main.js` - D3 code for loading data and creating the labelled bar chart.
- `assets/js/script.js` - Existing JavaScript used by the Energy Consumption website.
- `data/tvBrandCount.csv` - Processed TV brand count dataset.

## Generative AI Use

Generative AI (ChatGPT) was used to assist with understanding the Exercise 4.7 instructions, explaining SVG grouping, positioning the labels, troubleshooting label clipping, and checking the final chart against the example demonstrated in class.

The suggested code and explanations were reviewed and tested before being included in the final work.

## References

- Dufour, A. M. & Meeks, E. (2024). *D3.js in Action*.
- COS30045 Week 4 lecture materials.

## Live Website

[View Exercise 4.7 on Mercury](https://mercury.swin.edu.au/cos30045/s105996175/exercise4/exercise4.7/)