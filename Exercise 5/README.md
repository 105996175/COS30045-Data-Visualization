# Exercise 5 – Multi-Chart Webpage

## Overview

This exercise uses D3.js to create multiple chart types on the same webpage.

The charts were created using different datasets and demonstrate how D3 can be used to visualise categorical and continuous data.

## Exercise 5.1 – Vertical Bar Chart

A vertical bar chart was created to compare the average energy consumption of different screen technologies for 55-inch televisions.

The chart includes:

- X and Y axes
- Screen technology categories
- Energy consumption values
- Labels above each bar
- Responsive SVG layout

The data is sorted from highest to lowest energy consumption.

## Exercise 5.2 – Scatter Plot and Line Chart

A scatter plot and line chart were created using Australian electricity spot price data from 1998 to 2024.

The chart includes:

- Year on the X-axis
- Average electricity spot price on the Y-axis
- Scatter plot points
- A line connecting the data points
- Scaled X and Y axes

This exercise demonstrates how continuous data can be displayed using D3 line generators and linear scales.

## Exercise 5.3 – Donut Chart

A donut chart was created to show the proportion of television models in three screen-size categories:

- Large
- Medium
- Small

The chart uses:

- `d3.pie()` to calculate slice angles
- `d3.arc()` to draw the donut segments
- `d3.scaleOrdinal()` for the colour scale
- Labels positioned inside each segment

## Technologies Used

- HTML
- CSS
- JavaScript
- D3.js

## Data Files

The following datasets were used:

- `Data_exercise 5.1-1.csv`
- `ARE_Spot_Prices.csv`
- `Data_exercise 5.3.csv`

## Files

The charts are separated into individual JavaScript files:

- `bar-chart.js`
- `line-chart.js`
- `donut-chart.js`

All charts are displayed on the same `index.html` webpage.

## Author

Lai Man Yee

## Live Website

[View Exercise 5 on Mercury](https://mercury.swin.edu.au/cos30045/s105996175/exercise5/)