let groundZeroX;
let groundZeroY;
let distance;
let chaosFactor;

function setup() {
  createCanvas(1530, 700);
  background(random(0, 30), random(0, 30), random(0, 30));
  strokeWeight(random(2, 40));
  stroke(random(0, 255), random(0, 255), random(0, 255), random(10, 150));
  fill(random(0, 255), random(0, 255), random(0, 255), random(50, 150));
  groundZeroX = random(100, width - 300);
  groundZeroY = random(100, height - 200);
  distance = 0;
  chaosFactor = 0;
  translate(groundZeroX, groundZeroY);
}

function draw() {
  let i = 0;
  translate(groundZeroX, groundZeroY);
  while (i < chaosFactor / 300) {
    xSquared = random(sq(chaosFactor));
    ySquared = sq(chaosFactor) - xSquared;
    circle(
      random(-sqrt(xSquared), sqrt(xSquared)),
      random(-sqrt(ySquared), sqrt(ySquared)),
      random(2, 50)
    );
    i++;
  }
  chaosFactor += random(-6, 10);
  if (chaosFactor < 1) {
    chaosFactor = 1;
  }
}
