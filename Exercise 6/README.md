# Exercise 6 – Interactive Visualisations

## Overview

Exercise 6 explores interactive data visualisation using D3.js and the TV energy consumption dataset.

The exercises build progressively from a histogram to interactive filtering, a colour-coded scatterplot, and tooltips.

---

## Exercise 6.1 – Histogram

### Aim

Build a histogram showing the distribution of TV energy consumption.

### Completed

- Loaded the TV dataset using D3.
- Created bins using `d3.bin()`.
- Created linear x and y scales.
- Displayed TV energy consumption on the x-axis.
- Displayed frequency on the y-axis.
- Added labelled axes.
- Created the histogram using SVG rectangles.

---

## Exercise 6.2 – Filters

### Aim

Add interactive filters to the histogram created in Exercise 6.1.

### Completed

- Added filter buttons for:
  - All
  - LED
  - LCD
  - OLED
- Added click event listeners using D3.
- Used `isActive` to keep track of the selected filter.
- Used `.classed()` to update the active button style.
- Filtered the dataset using `screenTech`.
- Updated the histogram using the filtered data.
- Added smooth transitions when switching between filters.

---

## Exercise 6.3 – Scatterplot

### Aim

Build a scatterplot and use colour to represent TV screen technology.

### Completed

- Created a scatterplot using the same TV dataset.
- Plotted Star Rating on the x-axis.
- Plotted Labelled Energy Consumption on the y-axis.
- Created circles for each data point.
- Used transparency to make overlapping points easier to see.
- Colour-coded data points based on screen technology.
- Added a legend for:
  - LED
  - LCD
  - OLED
- Displayed the scatterplot on the same webpage as the histogram.

---

## Exercise 6.4 – Tooltips

### Aim

Add interactive tooltips to the scatterplot.

### Completed

- Created an SVG tooltip containing a rectangle and text.
- Added `mouseenter` and `mouseleave` event listeners.
- Displayed the TV screen size when hovering over a data point.
- Positioned the tooltip above the selected circle.
- Added a transition when showing the tooltip.
- Hid the tooltip when the mouse leaves the data point.
- Confirmed the histogram filters continue to work together with the scatterplot tooltip.

---

## Files

The Exercise 6 visualisations use the following files:

- `charts.html`
- `assets/data/Ex6_TVdata_withStar.csv`
- `assets/js/load-data.js`
- `assets/js/shared-constants.js`
- `assets/js/histogram.js`
- `assets/js/interactions.js`
- `assets/js/scatterplot.js`
- `assets/css/visualisation.css`

---

## Technologies Used

- HTML
- CSS
- JavaScript
- D3.js

## Live Website

[View Exercise 6 on Mercury](https://mercury.swin.edu.au/cos30045/s105996175/exercise6/charts.html)