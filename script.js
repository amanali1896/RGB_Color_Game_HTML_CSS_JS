var numSquares = 6;

var colors = generateRandomColors(numSquares);

var squares = document.querySelectorAll(".square");

var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay"); // we select the id colorDisplay from the element.
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var messageDisplay = document.querySelector("#message");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
easyBtn.addEventListener("click", function () {
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    numSquares=3
    colors=generateRandomColors(numSquares);
    pickedColor=pickColor();
    colorDisplay.textContent=pickedColor;
    for(var i= 0; i<squares.length;i++){
        if(colors[i]){
            squares[i].style.background=colors[i];// only first 3 tiles colors are changed and 
        } else{
            squares[i].style.display="none";// make all the remaining tiles none.
        }
    }
});

hardBtn.addEventListener("click", function () {
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    numSquares=6
    colors=generateRandomColors(numSquares); // this is done because 
    pickedColor=pickColor();
    colorDisplay.textContent=pickedColor;
    for(var i= +0;i<squares.length;i++){
        squares[i].style.background=colors[i];
        squares[i].style.display="block";
    }
});
resetButton.addEventListener("click", function () {
    /*
    1) generate all new colors
    2) pick a new random color from array
    3) change all the colors of the squares
    4) change the display color to matched picked color
    */
    colors = generateRandomColors(6);
    pickedColor = pickColor();
    messageDisplay.textContent="";
    this.textContent="New Game";
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.background = colors[i];

    }
    h1.style.background = "steelblue";



});



for (var i = 0; squares.length; i++) {
    //add initial colors to squares
    squares[i].style.backgroundColor = colors[i]; // style.backgroundColor is compitable with most of the browsers than style.background

    //add click listeners to square!!
    squares[i].addEventListener("click", function () {
        // alert("Clicked a square");
        //grab color of clicked square and compare the color to the pickedColor
        var clickedColor = this.style.backgroundColor;
        if (clickedColor === pickedColor) {
            //alert("correct");
            messageDisplay.textContent = "Correct!";
            resetButton.textContent = "Play Again?";
            changeColors(pickedColor);
            h1.style.backgroundColor = clickedColor;
        } else {
            this.style.backgroundColor = "#232323"; // this is written to fade the color to background color// 
            messageDisplay.textContent = "Try again"
            resetButton.textContent="New Game";
        }
    });



}

function changeColors(color) {
    // loop through all the squares
    for (var i = 0; i < squares.length; i++) {
        // change each color to match a given color
        squares[i].style.backgroundColor = color; // please make sure that you match the correct array!!
    }

}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length + 1);
    /* generation of random numbers!! Here it is multiplied by the length of the array(since the output of Math.random is always between 0 and 1) and we use floor function, Quite contrary to the ceil function. This is quite similar to Least Integer Function in functional algebra
     */

    return colors[random];
}


function generateRandomColors(num) {
    /*
    1) make an array
    2) add random colors to array
    3) return that array
    */

    var arr = [];
    for (var i = 0; i < num; i++) {
        /*getting random color from another function. {This method of disecting functions will help us edit the code as well as debugging the code quite easily. This method is analogous to a football(variable) is being passed among players(functions) on a field(Program).} This can be done using the Math.random() function used above. Now we use array method push to add elements to the array*/
        arr.push(randomColor());

    }

    return arr;
}

function randomColor() {
    /*
    Since RGB consists of three primary colors Red Green and Blue. We have to pick three of these colors from the range of 0 to 255.
    */
    var r = Math.floor(Math.random() * 256);

    var g = Math.floor(Math.random() * 256);

    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " +
        g + ", " + b + ")";

    /*Attention!!: don't forget the add a whitespace after the comma because it must match with the DOM setup of representing colors!!*/





}
