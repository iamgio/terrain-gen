const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 500;

const TRANSLATION_Y = -700;
const TRANSLATION_Z = -1400;

const ROWS = 40;
const COLS = 40;
const TILE_SIZE = 40;

const RANDOM_MAX = 50;

const heights = [];

function setup() {
    createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT, WEBGL);

    for (let x = 0; x < COLS; x++) {
        heights[x] = [];
        for (let y = 0; y < ROWS; y++) {
            heights[x][y] = Math.random() * RANDOM_MAX;
        }
    }
}

function draw() {
    background(0);
    noFill();
    strokeWeight(0.7);

    translate(-COLS * TILE_SIZE / 2, TRANSLATION_Y, TRANSLATION_Z);

    rotateX(0.9);

    for (let y = 0; y < ROWS - 1; y++) {
        stroke(10 + y * 8); // Perspective fading
        beginShape(TRIANGLE_STRIP);
        for (let x = 0; x < COLS; x++) {
            vertex(x * TILE_SIZE, y * TILE_SIZE, heights[x][y]);
            vertex(x * TILE_SIZE, (y + 1) * TILE_SIZE, heights[x][y + 1]);
        }
        endShape();
    }
}