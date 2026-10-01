const populateFilters = (data) => {

    d3.select("#filters_screen")
        .selectAll(".filter")
        .data(filters_screen)
        .join("button")
        .attr("class", d => `filter ${d.isActive ? "active" : ""}`)
        .text(d => d.label)
        .on("click", (e, d) => {

            if (!d.isActive) {

                // Update the isActive state for all filters
                filters_screen.forEach(filter => {
                    filter.isActive = d.id === filter.id;
                });

                // Update the filter buttons' active class
                d3.selectAll("#filters_screen .filter")
                    .classed("active", filter => filter.isActive);

                // Update the histogram
                updateHistogram(d.id, data);
            }
        });
};


const updateHistogram = (filterId, data) => {

    const updatedData = filterId === "all"
        ? data
        : data.filter(tv => tv.screenTech === filterId);

    const updatedBins = binGenerator(updatedData);

    d3.selectAll("#histogram rect")
        .data(updatedBins)
        .transition()
        .duration(500)
        .ease(d3.easeCubicInOut)
        .attr("y", d => yScale(d.length))
        .attr("height", d => innerHeight - yScale(d.length));
};


const createTooltip = () => {

    // Append tooltip group to the scatterplot inner chart
    const tooltip = innerChartS
        .append("g")
        .attr("class", "tooltip")
        .style("opacity", 0);

    // Add tooltip background rectangle
    tooltip
        .append("rect")
        .attr("width", tooltipWidth)
        .attr("height", tooltipHeight)
        .attr("rx", 3)
        .attr("ry", 3)
        .attr("fill", barColor)
        .attr("fill-opacity", 0.75);

    // Add tooltip text
    tooltip
        .append("text")
        .text("NA")
        .attr("x", tooltipWidth / 2)
        .attr("y", tooltipHeight / 2 + 2)
        .attr("text-anchor", "middle")
        .attr("alignment-baseline", "middle")
        .attr("fill", "white")
        .style("font-weight", 900);
};


const handleMouseEvents = () => {

    innerChartS
        .selectAll("circle")

        .on("mouseenter", (e, d) => {

            console.log("Mouse entered circle", d);

            // Update tooltip text with screen size
            d3.select(".tooltip text")
                .text(d.screenSize);

            // Get the position of the selected circle
            const cx = e.target.getAttribute("cx");
            const cy = e.target.getAttribute("cy");

            // Move tooltip above the circle and make it visible
            d3.select(".tooltip")
                .attr(
                    "transform",
                    `translate(${cx - 0.5 * tooltipWidth}, ${cy - 1.5 * tooltipHeight})`
                )
                .transition()
                .duration(200)
                .style("opacity", 1);
        })

        .on("mouseleave", (e, d) => {

            console.log("Mouse left circle", d);

            // Hide the tooltip
            d3.select(".tooltip")
                .style("opacity", 0)
                .attr("transform", "translate(0, 500)");
        });
};