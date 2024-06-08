# belly-button-challenge


The project consist of the following:

Use the D3 library to read in samples.json from the URL https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json.

Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.

Use sample_values as the values for the bar chart.

Use otu_ids as the labels for the bar chart.

Use otu_labels as the hovertext for the chart.

bar Chart
Create a bubble chart that displays each sample.

Use otu_ids for the x values.

Use sample_values for the y values.

Use sample_values for the marker size.

Use otu_ids for the marker colors.

Use otu_labels for the text values.

Bubble Chart
Display the sample's metadata, i.e., an individual's demographic information.

Loop through each key-value pair from the metadata JSON object and create a text string.

Append an html tag with that text to the #sample-metadata panel.

Update all the plots when a new sample is selected. Additionally, you are welcome to create any layout that you would like for your dashboard. An example dashboard is shown as follows:

Deploy your app to a free static page hosting service, such as GitHub Pages. Submit the links to your deployment and your GitHub repo. Ensure that your repository has regular commits and a thorough README.md file

Sources:

The syntax on how to get metada and samples information was obtained from Xpert Learning Assistant:

"let metadata = field.find(item => item.id === sample)"
"let bacteria = samples.find(item => item.id === String(sample))"

The syntax on how to use the function "foreach" was obtained from Xpert Learning Assistant:
"Object.entries(metadata).forEach(([key,value])=>{metadataPanel.append("p").text(`${key}: ${value}`)"
"names.forEach(name => {dropdown.append("option").text(name).attr("value", name)})"

      


