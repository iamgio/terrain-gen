// Canvas size
const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 500;

// Camera position
const TRANSLATION_Y = -500;
const TRANSLATION_Z = -1700;

// Terrain size
const ROWS = 80;
const COLS = 80;

// Size of a single tile
const TILE_SIZE = 20;

// Noise seed
const SEED = 23

// Show wireframe
const WIREFRAME = true;

// Show terrain colors
const COLORIZE = true;

// Whether the scene should be rendered only once (better power consumption) or every frame
const STATIC = true;

// COLSxROWS matrix for storing height data
let heights;

function setup() {
    createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT, WEBGL).parent('canvas-container');
    noiseSeed(SEED);

    initHeightmap();
    heights = createMatrix(COLS, ROWS, (x, y) => generateHeight(x, y));

    if (STATIC) {
        render();
    }
}

function draw() {
    if (!STATIC) {
        render();
    }
}

function render() {
    background(0);
    strokeWeight(WIREFRAME ? 0.7 : 0);
    colorMode(HSB);

    translate(-COLS * TILE_SIZE / 2, TRANSLATION_Y, TRANSLATION_Z);

    rotateX(0.9);

    for (let y = 0; y < ROWS - 1; y++) {
        beginShape(TRIANGLE_STRIP);
        for (let x = 0; x < COLS; x++) {
            const height = heights[x][y];
            if (COLORIZE) {
                const color = getColor(height);
                fill(color.hue, color.saturation, color.brightness);
            } else {
                fill(0);
                stroke(10 + y * 8); // Perspective fading
            }
            
            vertex(x * TILE_SIZE, y * TILE_SIZE, height);
            vertex(x * TILE_SIZE, (y + 1) * TILE_SIZE, heights[x][y + 1]);
        }
        endShape();
    }
}