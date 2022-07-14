//Function that is getting use input and setting the place holder for the city
function WeatherUserInfo() {

    var newName = document.getElementById("cityInput");
    var cityName = document.getElementById("cityName");
    cityName.innerHTML = "--"+newName.value+"--";

    //Using fetch to get weather data from the a weatherMap API
    fetch('https://api.openweathermap.org/data/2.5/forecast?q='+newName.value+'&appid=32ba0bfed592484379e51106cef3f204')
    .then(response => response.json())//Here we are converting our object to json so we can work around with it
    //This arrow function bellow is returing our promise a json file now ready to be used
    .then(data => {

    //The four loop here is getting the min and max values for each day
    for(i = 0; i<5; i++){
        document.getElementById("day" + (i+1) + "Min").innerHTML = "Min: " + Number(data.list[i].main.temp_min - 273.15).toFixed(1)+ "°";
    }

    for(i = 0; i<5; i++){
        document.getElementById("day" + (i+1) + "Max").innerHTML = "Max: " + Number(data.list[i].main.temp_max - 273.15).toFixed(2) + "°";
    }
    //------------------------------------------------------------

    //In this four loop we are getting the weather icon for that specific city for that day
     for(i = 0; i<5; i++){
        document.getElementById("img" + (i+1)).src = "http://openweathermap.org/img/wn/"+
        data.list[i].weather[0].icon
        +".png";
    }
    //------------------------------------------------------------
    console.log(data)


})
//We are alerting the use in case there is something that is went wrong. Where at this we believe the error could have been caused by internet breakage
.catch(err => alert("Something Went Wrong: Try Checking Your Internet Coneciton"))
}

//This function is setting the default value of the city because we do not want our page
//to be dormant also also calls the weatheruserinfor function when its button is cliked
function weatherMapper(){
    document.getElementById("cityInput").defaultValue = "Kampala";
    WeatherUserInfo();
}


//Here we are using the Date module to get and display the necessary data for the upcoming five days of the week
var d = new Date();
var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",];

//In this Function we are trying to loop through our days array to get the correct index integer
//for the specific days
function CheckDay(day){
    if(day + d.getDay() > 6){
        return day + d.getDay() - 7;
    }
    else{
        return day + d.getDay();
    }
}

    for(i = 0; i<5; i++){
        document.getElementById("day" + (i+1)).innerHTML = weekday[CheckDay(i)];
    }
   