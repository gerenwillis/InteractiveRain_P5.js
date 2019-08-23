function setup() {
    createCanvas(windowWidth, windowHeight);
    pushRain();
}

function draw() {
    background(0);
    function windowResized() {
      resizeCanvas(windowWidth, windowHeight);
    }
    drawRain();
}

