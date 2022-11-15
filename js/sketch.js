var t = 0;
var ellipsesize = 10;
function setup() {
    var canvas = createCanvas(800, 800);
    canvas.parent("p5container");
    background(0);
   
}

function draw() {
    background(0,5);

  
}
function mouseMoved(){
    var x = width * noise(t);
    var y = height * noise(t+5);

    
    noStroke();
    fill(255);
    ellipse(x, y, ellipsesize);
  ellipse(x+60, y, ellipsesize);
    t = t + 0.01;

  
}