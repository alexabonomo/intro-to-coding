function setup(){
    let cnv = createCanvas(windowWidth, windowHeight);
    cnv.parent('p5-example');
    background(0,0,255);
    frameRate(1)
   
   }
   
   function draw(){

    background(random(0,255), random(0,255), random(0,255));
   
   }