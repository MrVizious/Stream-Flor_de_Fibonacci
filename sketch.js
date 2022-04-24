let number_of_points = 0;
let golden_ratio;
let scale = 3;

function setup() {
  createCanvas(400, 400);
  golden_ratio = (1 + sqrt(5)) / 2;
}

function draw() {
  background(220);
  translate(width / 2, height / 2);
  Draw_Points();
  number_of_points += scale;
}

function Draw_Points() {
  strokeWeight(scale);
  for (let i = 0; i < number_of_points; i++) {
    r = map(i, 0, number_of_points, 0, 255);
    b = map(i, 0, number_of_points, 255, 0);
    stroke(r, 0, b);
    radius = sqrt(i) * scale;
    angle = golden_ratio * i;
    position = Polar_to_Cartesian(radius, angle * TWO_PI)
    point(position.x, position.y);
  }
}

function Polar_to_Cartesian(r, theta) {
  x = r * cos(theta);
  y = r * sin(theta);
  return createVector(x, y);
}