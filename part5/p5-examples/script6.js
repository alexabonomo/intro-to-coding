function setup(){
    let cnv = createCanvas(windowWidth, windowHeight);
    cnv.parent('p5-example');
    background(0,0,255);
    frameRate(1)
    rectMode(CENTER);
    noStroke();
    rect(width/2, height/2, 400, 400);
   
   }
   
   function draw(){

    background(random(0,255), random(0,255), random(0,255));
    fill(random(0,255), random(0,255), random(0,255));
    rect(width/2, height/2, 400, 400);
   
   }