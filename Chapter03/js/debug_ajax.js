// Add all scripts to the JS folder

//function that creates a table with Wisconsin cities and their populations
function cities(){
	var cityPop = [
	{ 
		city: 'Madison',
		population: 233209
	},
	{
		city: 'Milwaukee',
		population: 594833
	},
	{
		city: 'Green Bay',
		population: 104057
	},
	{
		city: 'Superior',
		population: 27244
	}
	];

	//creates the table element
	var table = document.createElement("table");

	//creates a header row
	var headerRow = document.createElement("tr");

	//adds the "City" and "Population" columns to the header row
	headerRow.insertAdjacentHTML("beforeend","<th>City</th><th>Population</th>")

	//adds the header row to the table
	table.appendChild(headerRow);

	//loop to add a new row for each city
    	for(var i = 0; i < cityPop.length; i++){
        //assign longer html strings to a variable
        var rowHtml = "<tr><td>" + cityPop[i].city + "</td><td>" + cityPop[i].population + "</td></tr>";
        //add the row's html string to the table
        table.insertAdjacentHTML('beforeend',rowHtml);
    	}
	
    document.querySelector("#mydiv").appendChild(table);

	addColumns(cityPop);
}

//function that adds columns to the table
function addColumns(cityPop){

    document.querySelectorAll("tr").forEach(function(row, i){
		
		//makes a third column that characterizes each city as Small, Medium, or Large based on populations
    	if (i == 0){
    		row.insertAdjacentHTML('beforeend', '<th>City Size</th>');
    	} else {
    		var citySize;
    		if (cityPop[i-1].population < 100000){

    			citySize = 'Small';

    		} else if (cityPop[i-1].population < 500000){
			
    			citySize = 'Medium';

    		} else {
    			citySize = 'Large';
    		};
			
			row.insertAdjacentHTML('beforeend', '<td>' + citySize + '</td>');
    	};
    });
};

//function that adds the hover and click events
function addEvents(){

	//adds an Event Listener for the hover event
	document.querySelector("table").addEventListener("mouseover", function(){
	
		var color = "rgb(";

		//generates a random number three times to create a color
		for (var i=0; i<3; i++){

			var random = Math.round(Math.random() * 255);

			color += random;
			
			if (i<2){
				color += ",";
			
			} else {
				color += ")";
			};
		};
		document.querySelector("table").style.color = color;
	});

	function clickme(){

		alert('Hey, you clicked me!');
	};

		//adds Event Listener for the click event
		document.querySelector("table").addEventListener("click", clickme);
};

//calls the initialize function when the window has loaded
window.onload = initialize();

//code for Activity 4
//initializes functions when the script loads
function initialize(){
	cities();
	addEvents();
    debugAjax();  
}

//function that retrieves data from the geojson file, coverts it to a usable form, and sends it to a callback function
function debugAjax(){

	//defines a variable for my data in the geojson file
	var mydata;

	//retrieves data from the geojson file
	fetch("data/MegaCities.geojson")
		//converts data to a usable form
		.then(function(response){
			return response.json();
		})
		//sends retrieved data to a callback function so it can be accessed in other areas of the script
		.then(debugCallback)
};

//function that adds title of "GegJSON data" before the printed data
function debugCallback(mydata){
	document.querySelector("#mydiv").insertAdjacentHTML('beforeend', "GeoJSON data: " + JSON.stringify(mydata));
};



