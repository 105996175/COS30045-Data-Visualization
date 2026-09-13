# Exercise 4.4: Load Data from CSV

## Overview

This exercise focuses on loading and preparing CSV data so that it can be used with D3.js.

The TV brand data was processed in KNIME, exported as a CSV file, added to the website repository, and then loaded into D3 using `d3.csv()`.

## Data Preparation

The provided 2026 TV Data KNIME workflow was used to prepare the dataset.

The workflow:

- Kept the required TV data columns.
- Converted brand names to lowercase.
- Replaced "samsung electronics" with "samsung".
- Filtered televisions based on availability.
- Filtered televisions sold in Australia.
- Grouped the data by brand.
- Counted the number of television models for each brand.
- Renamed the final columns to `brand` and `count`.
- Filtered the results to include brands with 20 or more models.

A CSV Writer node was then used to export the final data as:

`tvBrandCount.csv`

The CSV file was added to the `data` folder in the Exercise 4.4 website.

## Loading the CSV with D3

The CSV data was loaded using `d3.csv()`:

```javascript
d3.csv("data/tvBrandCount.csv", d => {
    return {
        brand: d.brand,
        count: +d.count
    };
})
```

The `+d.count` conversion was used to convert the `count` values from strings into numbers.

## Exploring the Dataset

The loaded data was inspected in the browser console using:

```javascript
console.log(data);
console.log(data.length);
console.log(d3.max(data, d => d.count));
console.log(d3.min(data, d => d.count));
console.log(d3.extent(data, d => d.count));
```

The 2026 dataset produced:

- Number of rows: `25`
- Maximum count: `1096`
- Minimum count: `24`
- Extent: `[24, 1096]`

## Sorting the Data

The data was sorted in descending order using:

```javascript
data.sort((a, b) => b.count - a.count);
```

This places the brands with the highest number of television models first.

## Preparing for the Bar Chart

The sorted data is passed to:

```javascript
drawBarChart(data);
```

The `drawBarChart()` function will be created in the next exercise.

At this stage, the browser may display a `ReferenceError` for `drawBarChart` because the function has not yet been defined. The CSV data has still been successfully loaded, converted, inspected and sorted.

## Files

- `index.html` - Energy Consumption webpage.
- `assets/css/style.css` - Website styling.
- `assets/js/main.js` - D3 code for loading and preparing the CSV data.
- `assets/js/script.js` - Existing JavaScript for the Energy Consumption website.
- `data/tvBrandCount.csv` - Processed TV brand count dataset.

## Result

The CSV data is successfully loaded into D3 as an array of JavaScript objects.

The dataset contains 25 TV brands after filtering, with the numerical `count` values ready to be used for creating a D3 bar chart in the next exercise.

## Generative AI Use

Generative AI (ChatGPT) was used to assist with understanding the Exercise 4.4 instructions, troubleshooting the KNIME Row Filter and CSV Writer settings, checking the D3 CSV-loading code, and verifying the browser console output.

The suggested steps and code were reviewed and tested before being included in the final work.

## References

- Dufour, A. M. & Meeks, E. (2024). *D3.js in Action*.
- COS30045 Week 4 lecture materials.
