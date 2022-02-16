// Add all scripts to the JS folder
function jsAjax(){

    //Step 3: Use Fetch to retrieve data
    fetch('data.MegaCities.geojson', init)
        .then(callback) //Step 4: Convert data to usable form
        .then(callback) //Stept 5: Send retrieved data to a callback
};

//define callback function
function callback(response){
    /*console.log(response.json())   
    */

}