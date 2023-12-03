var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v2/all");
request.send();
request.onload = function() {
    var result = JSON.parse(request.response);
    console.log(result);
    var j = result.length
    console.log(j);
    for (i=0; i<j; i++){
    console.log("name of the country:",result[i].name,"Total population:", result[i].population,"Name of the Region:", result[i].region,"Name of the Sub-region:", result[i].subregion);
    
}
}