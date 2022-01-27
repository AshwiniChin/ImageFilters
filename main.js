

function makeBlur() {
    console.log("making image blur");
    img = document.getElementById("image1");
    document.getElementById("result").innerHTML = "<img src='" + img.src + "'>";
    document.getElementById("result").style.filter = "blur(2px)";
}

function editBlackWhite() {
    console.log("making image black & white");
    img = document.getElementById("image1");
    document.getElementById("result").innerHTML = "<img src='" + img.src + "'>";
    document.getElementById("result").style.filter = "grayscale()";
}

function editSepia() {
    console.log("making image editSepia");
    img = document.getElementById("image1");
    document.getElementById("result").innerHTML = "<img src='" + img.src + "'>";
    document.getElementById("result").style.filter = "sepia()";
}

function editInvert() {
    console.log("making image invert colors");
    img = document.getElementById("image1");
    document.getElementById("result").style.filter = "invert()";
    document.getElementById("result").innerHTML = "<img src='" + img.src + "'>";
    
}




