// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

data.forEach((sighting) => {
  var row = tbody.append("tr");
  Object.entries(sighting).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
});


// Select the submit button
var submit = d3.select("#filter-btn");

submit.on("click", function() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement1 = d3.select("#datetime");
    var inputElement2 = d3.select('#city');
    var inputElement3 = d3.select('#state');

  // Get the value property of the input element
  var inputDate = inputElement1.property("value");
    var inputCity = inputElement2.property("value");
    var inputState = inputElement3.property("value");



var myfilter = {
};

if (inputDate != '') {
    myfilter['datetime'] = inputDate
};

if (inputCity != '') {
    myfilter['city'] = inputCity
};

if (inputState != '') {
    myfilter['state'] = inputState
};

var finalData = data.filter(function(item) {
  for (var key in myfilter) {
    if (item[key] === undefined || item[key] != myfilter[key])
      return false;
  }
  return true;
});

console.log(finalData)
tbody.html("");
finalData.forEach((sighting) => {
  var row = tbody.append("tr");
  Object.entries(sighting).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);})})
});

