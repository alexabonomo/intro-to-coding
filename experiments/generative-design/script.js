let ranges = 10;

let trail = [];
let a = 0;

function preload(){
    gif = loadImage('images/dove.gif');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
  }
  
  function draw() {
    // Map mouse position to HSB values
    let hue = map(mouseX, 0, width, 0, 360);
    let saturation = map(mouseY, 0, height, 0, 100);
    let brightness = 100;
  
    // Set background gradient
    setGradient(0, 0, width, height, color(0, 100, 100), color(hue, saturation, brightness), "Y_AXIS");

    waves();

    trails();
  }
  
  // Function to set gradient background
  function setGradient(x, y, w, h, c1, c2, axis) {
    noFill();
  
    if (axis === "Y_AXIS") {
      // Top to bottom gradient
      for (let i = y; i <= y + h; i++) {
        let inter = map(i, y, y + h, 0, 1);
        let c = lerpColor(c1, c2, inter);
        stroke(c);
        line(x, i, x + w, i);
      }
    } else if (axis === "X_AXIS") {
      // Left to right gradient
      for (let j = x; j <= x + w; j++) {
        let inter = map(j, x, x + w, 0, 1);
        let c = lerpColor(c1, c2, inter);
        stroke(c);
        line(j, y, j, y + h);
      }
    }
  }
  
  function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }

  function waves(){
    for (let i = 0; i < ranges; i++) {
        let paint = map(i, 0, ranges, 200, 255);
        stroke(paint);
        
        beginShape();
        for (let x = -10; x < width + 11; x += 20) {
          let n = noise(x * 0.001, i * 0.01, frameCount * 0.005);
          let y = map(n, 0, 1, 0, height);
          vertex(x, y);
        }
        endShape();
      }
  }

  function trails(){
    trail.push([mouseX, mouseY]);
  for(let i = 0; i < trail.length; i++) {
  
image(gif, trail[i][0],trail[i][1], 100, 100);

    if(a > 255) {
      trail.shift();
      a = 0;
    }
    a += 8;
  }
  
  console.log(trail.length);
  }