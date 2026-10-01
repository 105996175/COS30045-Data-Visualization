const drawScatterplot = (data) => {

    // Set the dimensions and margins of the chart area
    const svg = d3.select("#scatterplot")
        .append("svg")
        .attr("viewBox", `0 0 ${width} ${height}`);

    // Create an inner chart group with margins
    innerChartS = svg
        .append("g")
        .attr("transform", `translate(${margin.left}, ${margin.top})`);

    // Calculate the maximum star rating
    const maxStar = d3.max(data, d => d.star);

    // Calculate the maximum energy consumption
    const maxEnergy = d3.max(data, d => d.energyConsumption);


    // Set up the x-scale for star rating
    xScaleS
        .domain([0, maxStar])
        .range([0, innerWidth]);


    // Set up the y-scale for energy consumption
    yScaleS
        .domain([0, maxEnergy])
        .range([innerHeight, 0])
        .nice();


    // Set up the colour scale for screen technology
    colorScale
        .domain(data.map(d => d.screenTech))
        .range(d3.schemeCategory10);

    // Draw the scatterplot circles
    innerChartS
        .selectAll("circle")
        .data(data)
        .join("circle")
        .attr("r", 4)
        .attr("cx", d => xScaleS(d.star))
        .attr("cy", d => yScaleS(d.energyConsumption))
        .attr("fill", d => colorScale(d.screenTech))
        .attr("opacity", 0.5);

    // Construct the x-axis
    const bottomAxisS = d3.axisBottom(xScaleS);

    // Add the x-axis
    innerChartS
        .append("g")
        .attr("transform", `translate(0, ${innerHeight})`)
        .call(bottomAxisS);


    // Add the x-axis label
    svg
        .append("text")
        .text("Star Rating")
        .attr("text-anchor", "end")
        .attr("x", width - 10)
        .attr("y", height - 5);


    // Construct the y-axis
    const leftAxisS = d3.axisLeft(yScaleS);

    // Add the y-axis
    innerChartS
        .append("g")
        .call(leftAxisS);


    // Add the y-axis label
    svg
        .append("text")
        .text("Labeled Energy Consumption (kWh/year)")
        .attr("x", 5)
        .attr("y", 20);

    // Add a legend for the color scale
    const legend = svg
        .append("g")
        .attr("transform", `translate(${width - 100}, ${margin.top})`);

    // Loop through the color scale domain to create legend entries
    colorScale.domain().forEach((screenTech, i) => {

        // Create a group for each legend entry
        const legendRow = legend
            .append("g")
            .attr("transform", `translate(0, ${i * 20})`);

        // Add a colored rectangle for each screenTech
        legendRow.append("rect")
            .attr("width", 10)
            .attr("height", 10)
            .attr("fill", colorScale(screenTech));

        // Add text next to the rectangle
        legendRow.append("text")
            .attr("x", 20)
            .attr("y", 10)
            .attr("text-anchor", "start")
            .style("alignment-baseline", "middle")
            .text(screenTech);
    });
};