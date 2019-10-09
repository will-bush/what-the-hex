

//function that generates a random hex value
function generateRandomHex() {
    let newColour = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
    document.querySelector("h1").innerHTML = newColour;
    document.body.style.backgroundColor = newColour;
document.querySelector("a").href = "http://www.thecolorapi.com/scheme?hex=" + newColour.slice(1) + "&format=html";
}





