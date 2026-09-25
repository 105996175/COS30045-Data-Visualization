const drawDonutChart = data => {

    // Set up chart dimensions
    const width = 1000;
    const height = 500;

    const radius = Math.min(width, height) / 2 - 20;


    // Create colour scale
    const color = d3.scaleOrdinal()
        .domain(data.map(d => d.Screensize_Category))
        .range(d3.schemeSet2);


    // Calculate angle for each slice
    const pie = d3.pie()
        .value(d => d.Count)
        .sort(null);


    // Create arc generator
    const arcGenerator = d3.arc()
        .innerRadius(radius * 0.6)
        .outerRadius(radius);


    // Create SVG
    const svg = d3.select("#donut-chart")
        .append("svg")
        .attr("viewBox", `0 0 ${width} ${height}`);


    // Centre the donut
    const innerChart = svg
        .append("g")
        .attr(
            "transform",
            `translate(${width / 2}, ${height / 2})`
        );


    // Draw donut slices
    innerChart
        .selectAll("path")
        .data(pie(data))
        .join("path")
        .attr("d", arcGenerator)
        .attr(
            "fill",
            d => color(d.data.Screensize_Category)
        )
        .attr("stroke", "white")
        .attr("stroke-width", 2);


    // Add labels
    innerChart
        .selectAll(".donut-label")
        .data(pie(data))
        .join("text")
        .attr("class", "donut-label")
        .text(d => d.data.Screensize_Category)
        .attr(
            "transform",
            d => `translate(${arcGenerator.centroid(d)})`
        )
        .attr("text-anchor", "middle");
};


// Load data
d3.csv("data/Data_exercise 5.3.csv", d => {
    return {
        Screensize_Category: d.Screensize_Category,
        Count: +d.Count
    };
}).then(data => {

    console.log(data);

    drawDonutChart(data);
});