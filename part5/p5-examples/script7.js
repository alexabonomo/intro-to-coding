function setup(){
    let cnv = createCanvas(windowWidth, windowHeight);
    cnv.parent('p5-example');
    background(0,0,255);
    frameRate(1)
    rectMode(CENTER);
    noStroke();
    triangle(width/2, 300, width/2 + 200, 600, width/2 - 200, 600);
   
   }
   
   function draw(){

    background(random(0,255), random(0,255), random(0,255));
    fill(random(0,255), random(0,255), random(0,255));
    triangle(width/2, 300, width/2 + 200, 600, width/2 - 200, 600);
   
   }