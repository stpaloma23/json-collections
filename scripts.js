let 
var jsonZodiacsDatabase = [
  {
    "sign":"Aries",
    "dates": "March 20 - April 19",
    "element":"fire",
    "planet": "Mars",
    "symbol": "https://askastrology.com/wp-content/uploads/2019/12/Aries_icon-258x300.jpg"
  },
  {
    "sign":"Taurus",
    "dates": "April 19-May 20",
    "element":"Earth",
    "planet": "Venus",
    "symbol":"https://askastrology.com/wp-content/uploads/2019/12/Taurus_icon.jpg"
  },
  {
    "sign":"Gemini",
    "dates": "May 20 - June 21",
    "element":"Air",
    "planet": "Mercury",
    "symbol":"https://askastrology.com/wp-content/uploads/2019/12/Gemini_icon.jpg"
  },
  {
    "sign":"Cancer",
    "dates": "June 21 - July 22",
    "element":"Water",
    "planet": "the Moon",
    "symbol": "https://askastrology.com/wp-content/uploads/2019/12/Cancer_icon.jpg"
  },
  {
    "sign":"Leo",
    "dates": "July 22 - August 22",
    "element":"Fire",
    "planet": "the Sun",
    "symbol": "https://askastrology.com/wp-content/uploads/2019/12/Leo_icon.jpg"
  },
  {
    "sign":"Virgo",
    "dates": "August 22 - September 22",
    "element":"Earth",
    "planet": "Mercury",
    "symbol": "https://askastrology.com/wp-content/uploads/2019/12/Virgo_icon.jpg"
  },
  {
    "sign":"Libra",
    "dates": "September 22 - October 23",
    "element":"Wind",
    "planet": "Venus",
    "symbol":"https://askastrology.com/wp-content/uploads/2019/12/Libra_icon.jpg"
  },
  {
    "sign":"Scorpio",
    "dates": "October 23 - November 22",
    "element":"Water",
    "planet": "Pluto",
    "symbol":"https://askastrology.com/wp-content/uploads/2019/12/Scorpio_icon.jpg"
  },
  {
    "sign":"Sagittarius",
    "dates": "November 22 - December 21",
    "element":"Fire",
    "planet": "Jupiter",
    "symbol":"https://askastrology.com/wp-content/uploads/2019/12/Sagittarius_icon.jpg"
  },
  {
    "sign":"Capricorn",
    "dates": "December 21 - January 20",
    "element":"Earth",
    "planet": "Saturn",
    "symbol":"https://askastrology.com/wp-content/uploads/2019/12/Capricorn_icon.jpg"
  },
  {
    "sign":"Aquarius",
    "dates": "January 19 - February 18",
    "element":"Wind",
    "planet": "Uranus",
    "symbol":"https://askastrology.com/wp-content/uploads/2019/12/Aquarius_icon.jpg"
  },
  {
    "sign":"Pisces",
    "dates": "February 18 - March 20",
    "element":"Water",
    "planet": "Neptune",
    "symbol":"https://askastrology.com/wp-content/uploads/2019/12/Pisces_icon.jpg"
  }
];

document.addEventListener('DOMContentLoaded', function(){
  var zodiacOutput = document.getElementById("zodiacOutput");
  var outputPara = document.getElementById("zodiacOutputPara");
  for (var i=0; i<jsonZodiacsDatabase.length; i++){
    displayZodiacs(jsonZodiacsDatabase[i]);
  }
});

function displayZodiacs(partOfDatabase){
  let newDiv = document.createElement("DIV");
  newDiv.classList.add("container")


  let zodiacName  = document.createElement("H3");
  zodiacName.classList.add("name");
  zodiacName.innerText = partOfDatabase["sign"];
  newDiv.appendChild(zodiacName);

  let dates = document.createElement("H4");
  dates.classList.add("dateRange");
  dates.innerText = partOfDatabase["dates"];
  newDiv.appendChild(dates);

  let elements = document.createElement("H4");
  elements.classList.add("elements");
  elements.innerText = partOfDatabase["element"];
  newDiv.appendChild(elements);

  let  planetRule= document.createElement("H4");
  planetRule.classList.add("rulingPlanet");
  planetRule.innerText = partOfDatabase["planet"];
  newDiv.appendChild(planetRule);

  let theImage = document.createElement("IMG");
  theImage.classList.add("zodiacSymbol");
  theImage.src = partOfDatabase["symbol"];
  newDiv.appendChild(theImage);
}
