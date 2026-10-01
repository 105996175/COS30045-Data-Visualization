// Load the CSV file with a row conversion function
d3.csv("assets/data/Ex6_TVdata_withStar.csv", d => ({
    brand: d.brand,
    model: d.model,
    screenSize: +d.screenSize,
    screenTech: d.screenTech,
    energyConsumption: +d.energyConsumption,
    star: +d.star
}))
    .then(data => {

        // Log the processed data to the console
        console.log(data);

        // Call functions after data is loaded
        drawHistogram(data);
        populateFilters(data);
        drawScatterplot(data);

    })
    .catch(error => {
        console.error("Error loading the CSV file:", error);
    });