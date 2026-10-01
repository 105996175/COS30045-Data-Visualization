// Set up dimensions and margins
const margin = { top: 40, right: 30, bottom: 50, left: 70 };

const width = 800;
const height = 400;

const innerWidth = width - margin.left - margin.right;
const innerHeight = height - margin.top - margin.bottom;

// Set up inner chart variable for scatterplot
let innerChartS;

// Set up tooltip dimensions
const tooltipWidth = 65;
const tooltipHeight = 32;

// Set up colors accessible globally
const barColor = "#606464";
const bodyBackgroundColor = "#fffaf0";


// Set up the scales
const xScale = d3.scaleLinear();
const yScale = d3.scaleLinear();

// Set up the scatterplot scales and color scale
const xScaleS = d3.scaleLinear();
const yScaleS = d3.scaleLinear();
const colorScale = d3.scaleOrdinal();


// Create a bin generator using d3.bin
const binGenerator = d3.bin()
    .value(d => d.energyConsumption);

// Set up filter options
const filters_screen = [
    { id: "all", label: "All", isActive: true },
    { id: "LED", label: "LED", isActive: false },
    { id: "LCD", label: "LCD", isActive: false },
    { id: "OLED", label: "OLED", isActive: false }
];