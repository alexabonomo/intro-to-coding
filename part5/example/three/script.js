
function preload(){
    img = loadImage('images/1.png');
    gif = loadImage('images/dove.gif');
}

function setup() {
    let cnv = createCanvas(windowWidth, windowHeight);
    cnv.parent('myCanvas')

    imageMode(CENTER);
    noCursor();
}

function draw() {
    background(0);
    
    //image(img,mouseX, mouseY, 100, 100)
    window.onload = function() {
        image(img, mouseX, mouseY, 100, 100);
    }
 
}

function windowResized(){
    let cnv = createCanvas(windowWidth, windowHeight);
    background(0);
}
