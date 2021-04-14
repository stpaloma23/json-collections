// adding the json to the html
let output = document.getElementById("collectionOfZodiacs");

var jsonZodiacsDatabase = [
  {
    "sign":"Aries",
    "dates": "March 20 - April 19",
    "element":"Fire",
    "planet": "Mars",
    "symbol": "images/aries.png",
    "color": "#ff8c00"
  },
  {
    "sign":"Taurus",
    "dates": "April 19-May 20",
    "element":"Earth",
    "planet": "Venus",
    "symbol":"images/taurus.png",
    "color": "#87a96b"
  },
  {
    "sign":"Gemini",
    "dates": "May 20 - June 21",
    "element":"Air",
    "planet": "Mercury",
    "symbol":"images/gemini.png",
    "color": "#f2f3f4"
  },
  {
    "sign":"Cancer",
    "dates": "June 21 - July 22",
    "element":"Water",
    "planet": "the Moon",
    "symbol": "images/cancer.png",
    "color": "#87cefa"
  },
  {
    "sign":"Leo",
    "dates": "July 22 - August 22",
    "element":"Fire",
    "planet": "the Sun",
    "symbol": "images/leo.png",
    "color": "#ff8c00"
  },
  {
    "sign":"Virgo",
    "dates": "August 22 - September 22",
    "element":"Earth",
    "planet": "Mercury",
    "symbol": "images/virgo.png",
    "color": "#87a96b"
  },
  {
    "sign":"Libra",
    "dates": "September 22 - October 23",
    "element":"Air",
    "planet": "Venus",
    "symbol":"images/libra.png",
    "color": "#f2f3f4"
  },
  {
    "sign":"Scorpio",
    "dates": "October 23 - November 22",
    "element":"Water",
    "planet": "Pluto",
    "symbol":"images/scorpio.png",
    "color": "#87cefa"
  },
  {
    "sign":"Sagittarius",
    "dates": "November 22 - December 21",
    "element":"Fire",
    "planet": "Jupiter",
    "symbol":"images/sag.png",
    "color": "#ff8c00"
  },
  {
    "sign":"Capricorn",
    "dates": "December 21 - January 20",
    "element":"Earth",
    "planet": "Saturn",
    "symbol":"images/cap.png",
    "color": "#87a96b"
  },
  {
    "sign":"Aquarius",
    "dates": "January 19 - February 18",
    "element":"Air",
    "planet": "Uranus",
    "symbol":"images/aqua.png",
    "color": "#f2f3f4"
  },
  {
    "sign":"Pisces",
    "dates": "February 18 - March 20",
    "element":"Water",
    "planet": "Neptune",
    "symbol":"images/pisces.png",
    "color": "#87cefa"
  }
];

//reading from the JSON colelction and sending each index to be added to html website
for (var i=0; i<jsonZodiacsDatabase.length; i++){
  createZodiacs(jsonZodiacsDatabase[i]);
}

// this function takes the json collection and adds the elemnts to html
function createZodiacs(partOfDatabase){
  let newDiv = document.createElement("DIV"); //creating html tag
  newDiv.classList.add("zodiacSign"); // creating css tag
  //setting the color of each box, color is based of element
  if(partOfDatabase["element"] == "Fire"){
    newDiv.style.backgroundColor = partOfDatabase["color"];
  }
  else if (partOfDatabase["element"] == "Earth") {
    newDiv.style.backgroundColor = partOfDatabase["color"] ;
  }
  else if (partOfDatabase["element"] == "Water") {
    newDiv.style.backgroundColor = partOfDatabase["color"];
  }
  else if (partOfDatabase["element"] == "Air") {
    newDiv.style.backgroundColor = partOfDatabase["color"];
  }

  let zodiacName  = document.createElement("H3"); //create html tag
  zodiacName.innerText = partOfDatabase["sign"]; //find the data in the json and write it to the html
  zodiacName.classList.add("zName"); //css tag
  newDiv.appendChild(zodiacName); //adding the content to the box

  let dates = document.createElement("H4");
  dates.innerText = "Dates: "+partOfDatabase["dates"];
  dates.classList.add("dateRange");
  newDiv.appendChild(dates);

  let elements = document.createElement("H4");
  elements.classList.add("elements");
  elements.innerText = "Element: " + partOfDatabase["element"];
  newDiv.appendChild(elements);

  let  planetRule= document.createElement("H4");
  planetRule.classList.add("rulingPlanet");
  planetRule.innerText = "Planet: " + partOfDatabase["planet"];
  newDiv.appendChild(planetRule);

  let theImage = document.createElement("IMG");
  theImage.classList.add("zodiacSymbol");
  theImage.src = partOfDatabase["symbol"];
  newDiv.appendChild(theImage);

  output.appendChild(newDiv); // adding the new data to the html 
}
