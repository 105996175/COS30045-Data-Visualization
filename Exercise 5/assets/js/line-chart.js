const drawLineChart = data => {

    // Use same margins and dimensions as Exercise 5.1
    const margin = {
        top: 60,
        right: 170,
        bottom: 60,
        left: 40
    };

    const width = 1000;
    const height = 500;

    const innerWidth =
        width - margin.left - margin.right;

    const innerHeight =
        height - margin.top - margin.bottom;


    // Create scales
    const xScale = d3.scaleLinear()
        .domain(d3.extent(data, d => d.year))
        .range([0, innerWidth]);

    const yScale = d3.scaleLinear()
        .domain([0, d3.max(data, d => d.averagePrice)])
        .range([innerHeight, 0]);


    // Set up axes
    const bottomAxis = d3.axisBottom(xScale)
        .tickFormat(d3.format("d"));

    const leftAxis = d3.axisLeft(yScale);


    // Create SVG
    const svg = d3.select("#line-chart")
        .append("svg")
        .attr("viewBox", `0 0 ${width} ${height}`);


    // Create inner chart
    const innerChart = svg
        .append("g")
        .attr(
            "transform",
            `translate(${margin.left}, ${margin.top})`
        );


    // Add x-axis
    innerChart
        .append("g")
        .attr(
            "transform",
            `translate(0, ${innerHeight})`
        )
        .call(bottomAxis);


    // Add y-axis
    innerChart
        .append("g")
        .call(leftAxis);


    // Add y-axis label
    innerChart
        .append("text")
        .text("Average Price ($ per MWh)")
        .attr("x", -margin.left)
        .attr("y", -35)
        .attr("text-anchor", "start");

    // Add x-axis label
    innerChart
        .append("text")
        .text("Year")
        .attr("x", innerWidth / 2)
        .attr("y", innerHeight + 45)
        .attr("text-anchor", "middle");


    // Draw scatter plot points
    innerChart
        .selectAll(".point")
        .data(data)
        .join("circle")
        .attr("class", "point")
        .attr("r", 4)
        .attr("cx", d => xScale(d.year))
        .attr("cy", d => yScale(d.averagePrice))
        .attr("fill", "green");


    // Generate line coordinates
    const lineGenerator = d3.line()
        .x(d => xScale(d.year))
        .y(d => yScale(d.averagePrice));


    // Draw line
    innerChart
        .append("path")
        .attr("d", lineGenerator(data))
        .attr("fill", "none")
        .attr("stroke", "green");
};


// Load data
d3.csv("data/ARE_Spot_Prices.csv", d => {
    return {
        year: +d.Year,
        averagePrice:
            +d["Average Price (notTas-Snowy)"]
    };
}).then(data => {

    console.log(data);

    drawLineChart(data);
});