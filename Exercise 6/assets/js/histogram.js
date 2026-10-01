const drawHistogram = (data) => {

    // Set the dimensions and margins of the chart area
    const svg = d3.select("#histogram")
        .append("svg")
        .attr("viewBox", `0 0 ${width} ${height}`);

    // Create an inner chart group with margins
    const innerChart = svg.append("g")
        .attr("transform", `translate(${margin.left}, ${margin.top})`);


    // Get the bins for our data set using the bin generator
    const bins = binGenerator(data);

    // Log the bins to the console for debugging
    console.log(bins);


    // Calculate the minimum and maximum energy consumption values
    const minEng = bins[0].x0;
    const maxEng = bins[bins.length - 1].x1;

    // Calculate the maximum length of the bins
    const binsMaxLength = d3.max(bins, d => d.length);

    console.log(
        "minEng:", minEng,
        "maxEng:", maxEng,
        "binsMaxLength:", binsMaxLength
    );


    // Set the domains and ranges for the x and y scales
    xScale
        .domain([minEng, maxEng])
        .range([0, innerWidth]);

    yScale
        .domain([0, binsMaxLength])
        .range([innerHeight, 0])
        .nice();


    // Draw the histogram bars
    innerChart
        .selectAll("rect")
        .data(bins)
        .join("rect")
        .attr("x", d => xScale(d.x0))
        .attr("y", d => yScale(d.length))
        .attr("width", d => xScale(d.x1) - xScale(d.x0))
        .attr("height", d => innerHeight - yScale(d.length))
        .attr("fill", barColor)
        .attr("stroke", bodyBackgroundColor)
        .attr("stroke-width", 2);


    // Construct the x-axis
    const bottomAxis = d3.axisBottom(xScale);

    // Add the x-axis
    innerChart
        .append("g")
        .attr("transform", `translate(0, ${innerHeight})`)
        .call(bottomAxis);


    // Add the x-axis label
    svg
        .append("text")
        .text("Labeled Energy Consumption (kWh/year)")
        .attr("text-anchor", "end")
        .attr("x", width - 10)
        .attr("y", height - 5);


    // Construct the y-axis
    const leftAxis = d3.axisLeft(yScale);

    // Add the y-axis
    innerChart
        .append("g")
        .call(leftAxis);


    // Add the y-axis label
    svg
        .append("text")
        .text("Frequency")
        .attr("x", 5)
        .attr("y", 20);
};