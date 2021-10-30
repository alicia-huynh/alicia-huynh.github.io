function setup() {
createCanvas(600, 600);
}
function draw() {
noStroke();
// six-digit hexadecimal RGB notation
background('#ade8f4');

//hair
  noStroke();
 fill('#001219');
  arc(300, 315, 315, 430, QUARTER_PI + HALF_PI, QUARTER_PI, OPEN);

//neck//
fill('#f5be8f');
rect(265, 375, 65, 75);

//face
noStroke();
  fill('#fec89a');
ellipse(300, 275, 250, 285);

//right eyebrow
fill('#001219');
arc(350, 210, 55, 15, PI, TWO_PI, OPEN);

//right eye
fill('#ffffff');
ellipse(350 ,245, 63, 63);
fill('#00121f');
ellipse(350 ,245, 45, 45);
fill('#ffffff');
ellipse(360 ,235, 15, 15);

//Ears
fill('#fec89a');
arc(180, 260, 50, 60, 0, PI + HALF_PI, PI + HALF_PI, OPEN);
  
//side bang  
noStroke();
fill('#001219');
arc(320, 235, 160, 260, PI+ HALF_PI, QUARTER_PI, OPEN);

//left eye
fill('#ffffff');
ellipse(230 ,245, 63, 63);
fill('#00121f');
ellipse(230 ,245, 45, 45);
fill('#ffffff');
ellipse(220 ,235, 15, 15);


//left eyebrow
fill('#001219');
arc(230, 210, 55, 15, PI, TWO_PI, OPEN);

//other bang
arc(280, 230, 140, 220, PI, PI+HALF_PI, OPEN);

//nose
fill('#f5be8f');
triangle(290, 260, 270, 305, 310, 305);

//mouth
fill('#a30015');
arc(290, 325, 60, 45, 0, PI);

//shirt
fill('#ffffff');
rect(200, 425, 190, 200, 20);

//jacket
fill('#012a4a');
rect(190, 425, 70, 200, 20, 0, 10, 5);
rect(335, 425, 70, 200, 0, 15, 10, 5);
beginShape(TRIANGLES);
fill('#013a63');
//top left collar
vertex(260, 425);
vertex(220, 425);
vertex(260, 485);
//top right collar
vertex(335, 425);//point one
vertex(335, 485);//point two
vertex(375, 425);//point three
endShape();

//jacket pocket
rect(355, 485, 30, 30);

//neckline
fill('#f5be8f');
arc(297.5, 425, 75, 50, TWO_PI, PI, CLOSE);


}
