const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 500;

const TRANSLATION_Y = -300;
const TRANSLATION_Z = -700;

const ROWS = 50;
const COLS = 30;
const TILE_SIZE = 40;

function setup() {
    createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT, WEBGL);
}

function draw() {
    background(0);
    noFill();
    stroke(255);
    strokeWeight(0.5);

    translate(-COLS * TILE_SIZE / 2, TRANSLATION_Y, TRANSLATION_Z);

    rotateX(1);

    for (let y = 0; y < ROWS; y++) {
        beginShape(TRIANGLE_STRIP);
        for (let x = 0; x < COLS; x++) {
            vertex(x * TILE_SIZE, y * TILE_SIZE);
            vertex(x * TILE_SIZE, (y + 1) * TILE_SIZE);
        }
        endShape();
    }
}