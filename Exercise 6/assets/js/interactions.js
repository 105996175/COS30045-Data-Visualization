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