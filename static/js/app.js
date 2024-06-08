// Build the metadata panel
function buildMetadata(sample) {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {

    // get the metadata field

    let field = data.metadata

    // Filter the metadata for the object with the desired sample number
    let metadata = field.find(item => item.id === sample)

    // Use d3 to select the panel with id of `#sample-metadata`

    let metadataPanel = d3.select("#sample-metadata")

    // Use `.html("") to clear any existing metadata

    metadataPanel.html("")

    // Inside a loop, you will need to use d3 to append new
    // tags for each key-value in the filtered metadata.

    Object.entries(metadata).forEach(([key,value])=>{
      metadataPanel.append("p").text(`${key}: ${value}`)
      
    })

  });
}

// function to build both charts
function buildCharts(sample) {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {

    // Get the samples field

    let samples = data.samples


    // Filter the samples for the object with the desired sample number

    let bacteria = samples.find(item => item.id === String(sample));


    // Get the otu_ids, otu_labels, and sample_values

    let otuIds = bacteria.otu_ids;
    let otuLabels = bacteria.otu_labels;
    let sampleValues = bacteria.sample_values;

    // Build a Bubble Chart

    let trace = {
      x: otuIds, 
      y: sampleValues, 
      text: otuLabels, 
      mode: 'markers',
      marker: {
        size: sampleValues, 
        color: otuIds,
        colorscale:'Viridis',
        opacity: 0.6
      }
    }

    let values = [trace]

    let layout = {
      title: 'Bacteria Cultures per Sample',
      xaxis: { title: 'OTU ID' },
      yaxis: { title: 'Sample Values' }
    }


    // Render the Bubble Chart

    Plotly.newPlot('bubble', values, layout)


    // For the Bar Chart, map the otu_ids to a list of strings for your yticks

    // Build a Bar Chart
    // Don't forget to slice and reverse the input data appropriately

    let sortedData = sampleValues.slice().sort((a, b) => b - a);
    let topValues = sortedData.slice(0, 10);
    let topIds = otuIds.slice(0, 10)

    let yLabels = topIds.map(id => `OTU ${id} `)


    let trace2 = {
      x: topValues, 
      y: yLabels,
      type:'bar',
      orientation:'h'
      }

      let layout2 = {
        title: 'Top 10 Bacteria Cultures Found',
        xaxis: { title: 'Number of Bacteria' }}

    // Render the Bar Chart

    Plotly.newPlot('bar', [trace2], layout2)


  });
}


// Function to run on page load
function init() {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {

    // Get the names field

    let names = data.names


    // Use d3 to select the dropdown with id of `#selDataset`

    let dropdown = d3.select("#selDataset")


    // Use the list of sample names to populate the select options
    // Hint: Inside a loop, you will need to use d3 to append a new
    // option for each sample name.

    names.forEach(name => {
      dropdown.append("option")
        .text(name)
        .attr("value", name)})


    // Get the first sample from the list

    let firstSample = names[0]


    // Build charts and metadata panel with the first sample

    buildMetadata(parseInt(firstSample))
    buildCharts(firstSample)


  });
}

// Function for event listener
function optionChanged(newSample) {
  // Build charts and metadata panel each time a new sample is selected
  buildMetadata(parseInt(newSample))
  buildCharts(newSample)
}

d3.select("#selDataset").on("change", function() {
  // Get the selected sample value from the dropdown
  let newSample = d3.select(this).property("value")

optionChanged(newSample)})

// Initialize the dashboard
init();
