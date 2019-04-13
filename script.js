var h3 = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementsByTagName("body")[0];
var randomButton = document.getElementsByClassName("randomButton")[0];


function colorChange(){
    //apply 2 selected colors for background
    body.style.background = "linear-gradient(to right, "
                            + color1.value + ", "
                            + color2.value + ")";

    //set the input color buttons to same colors, and write down the background style
    color1.setAttribute("value", color1.value);
    color2.setAttribute("value", color2.value);
    h3.textContent = body.style.background + ";";
}

color1.addEventListener("input", colorChange);

color2.addEventListener("input", colorChange);



//Function to convert rgb color to hex format
var hexDigits = new Array("0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f");

function hex(x) {
  return isNaN(x) ? "00" : hexDigits[(x - x % 16) / 16] + hexDigits[x % 16];
}

var bckgnd = getComputedStyle(body).backgroundImage.split(new RegExp('[, ()]', 'g'));
var clr1 = "#" + hex(bckgnd[5]) + hex(bckgnd[7]) + hex(bckgnd[9]);
var clr2 = "#" + hex(bckgnd[13]) + hex(bckgnd[15]) + hex(bckgnd[17]);

//Set the input color buttons to be the same with initial background colors
color1.setAttribute("value", clr1);
color2.setAttribute("value", clr2);

//Display the initial background style
h3.textContent = getComputedStyle(body).backgroundImage + ";";


//Randomize background colors
function randomRgbValue(){
    return "#" + hex(Math.floor(Math.random() * 256))
               + hex(Math.floor(Math.random() * 256))
               + hex(Math.floor(Math.random() * 256));
}

function randomColorChange(){

    //generate 2 random colors
    var randClr1 = randomRgbValue();
    var randClr2 = randomRgbValue();

    //apply 2 random colors for background
    body.style.background = "linear-gradient(to right, "
                            + randClr1 + ", "
                            + randClr2 + ")";

    //set the input color buttons to same colors, and write down the background style
    color1.setAttribute("value", randClr1);
    color2.setAttribute("value", randClr2);
    h3.textContent = body.style.background + ";";
}

randomButton.addEventListener("click", randomColorChange);