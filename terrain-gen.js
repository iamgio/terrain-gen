const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 500;

const TRANSLATION_Y = -500;
const TRANSLATION_Z = -1700;

const ROWS = 80;
const COLS = 80;
const TILE_SIZE = 20;

const SEED = 23

let heights;

function setup() {
    createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT, WEBGL);
    noiseSeed(SEED);

    initHeightmap();
    heights = createMatrix(COLS, ROWS, (x, y) => generateHeight(x, y));

    console.log(heights);
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