var img;
var img2;
var img3;
var initials ='ah'; // your initials
var choice = '1'; // starting choice, so it is not empty
var screenbg = 240; // off white background

function preload() {
// preload() runs once, it may make you wait
  img = loadImage('fire_emoji.png');  // cat.jpg needs to be next to this .js file
  img2=loadImage('earth_emoji.png');
  img3=loadImage('failed_test.png');
// you can link to an image on your github account
// img = loadImage('https://alicia-huynh.github.io/images/fire_emoji.png
}

function setup() {

  createCanvas(600, 400); 
  background('#caf0f8');
}

function draw() {
  if (keyIsPressed) {
    choice = key; // set choice to the key that was pressed
    clear_print(); // check to see if it is clear screen or save image
  }
  if (mouseIsPressed){
    newkeyChoice(choice);  // if the mouse is pressed call newkeyChoice
  }
}

function newkeyChoice(toolChoice) { //toolchoice is the key that was pressed
  // the key mapping if statements that you can change to do anything you want.
  // just make sure each key option has the a stroke or fill and then what type of 
  // graphic function

 if (toolChoice == '1' ) {  // first tool, thin black line
   
    strokeWeight(1);
    stroke('#000000');
     line(mouseX, mouseY, pmouseX, pmouseY);
    
  } else if (toolChoice == '2') { // second tool, thick black line

    strokeWeight(3);
    stroke('#000000');
    line(mouseX, mouseY, pmouseX, pmouseY);
  } else if (toolChoice == '3') { // third tool, pink color

     strokeWeight(3);
    stroke('#ff4d6d');
    line(mouseX, mouseY, pmouseX, pmouseY);
  } else if (toolChoice == '4') { //white color

    strokeWeight(3);
    stroke('#ffffff');
    line(mouseX, mouseY, pmouseX, pmouseY);
  } else if (key == '5') { // red color
   strokeWeight(3);
    stroke('#d00000');
    line(mouseX, mouseY, pmouseX, pmouseY);
    
 
  } else if (toolChoice == '6') {//orange color

    strokeWeight(3);
    stroke('#e85d04');
    line(mouseX, mouseY, pmouseX, pmouseY);
  } else if (toolChoice == '7') {//yellow color

    strokeWeight(3);
    stroke('#faa307');
    line(mouseX, mouseY, pmouseX, pmouseY);
  } else if (toolChoice == '8') {//blue color

    strokeWeight(3);
    stroke('#023e8a');
    line(mouseX, mouseY, pmouseX, pmouseY);
  } else if (toolChoice == '9') {//green color

     strokeWeight(3);
    stroke('#2d6a4f');
    line(mouseX, mouseY, pmouseX, pmouseY);
  } else if (toolChoice == '0') {//failed test stamp
    image(img3, mouseX-25, mouseY-25, 50, 50);
    
  } else if (toolChoice == 'g' || toolChoice == 'G') { // fire emoji stamp
    image(img, mouseX-25, mouseY-25, 50, 50);
    
  }  else if (toolChoice == 'r' || toolChoice == 'R') { // earth emoji stamp
    image(img2, mouseX-25, mouseY-25, 50, 50);
    
  }
 }
 
function testbox(r, g, b) {
// this is a test function that will show you how you can put your own functions into the sketch
  x = mouseX;
  y = mouseY;
  fill(r, g, b);
  rect(x-50, y-50, 100, 100);

}

function clear_print() {
// this will do one of two things, x clears the screen by resetting the background
// p calls the routine saveme, which saves a copy of the screen
  if (key == 'x' || key == 'X') {
    background(screenbg); // set the screen back to the background color
  } else if (key == 'p' || key == 'P') {
     saveme();  // call saveme which saves an image of the screen
     key = ""; // reset the key so that it doesn't keep taking screenshots
  }
}

function saveme(){
    //this will save the name as the intials, date, time and a millis counting number.
    // it will always be larger in value then the last one.
    filename=initials+day() + hour() + minute() +second();
    saveCanvas(filename, 'jpg');
 // }
}
