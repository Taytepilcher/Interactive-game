var widthRect = 50;
var heightRect = 50;
var radiusCircle= 50;

function setup() {
    var canvas = createCanvas(800, 800);
    canvas.parent("p5container");
    background(0);
}

function draw() {
   

    
}

function mousePressed(){
    var rc0 = random(0,255);
    var rc1 = random(0,255);
    var rc2= random(0,255);
if(mouseButton == LEFT){

    fill(rc0, rc1, rc2);
    rectMode(CENTER);
    rect(mouseX, mouseY, widthRect, heightRect);
}
    else if (mouseButton == RIGHT){

        fill (rc0, rc1, rc2);
        ellipse(mouseX, mouseY, radiusCircle);
    }

}
function keyPressed(){
    var rc0 = random(0,255);
    var rc1 = random(0,255);
    var rc2= random(0,255);
    if(keyCode == ENTER){
        background(0);
    }
    if(keyCode == UP_ARROW){
        fill(rc0,rc1,rc2)
        triangle(mouseX, mouseY, mouseX+50, mouseY,mouseX+25, mouseY-50);
    }
    if(keyCode == LEFT_ARROW){
        fill(rc0,rc1,rc2)
        arc(mouseX, mouseY, 80, 80, 0, PI , PIE);
    }
    if(keyCode == RIGHT_ARROW){
        fill(rc0,rc1,rc2)
        arc(mouseX, mouseY, 80, 80, PI, 0 , PIE);
    }
    
}