const HEIGHTMAP_WIDTH = 15;
const HEIGHTMAP_HEIGHT = 15;

const AMPLIFICATION = 300;

let heightmap;

function initHeightmap() {
    heightmap = createMatrix(
        HEIGHTMAP_WIDTH, HEIGHTMAP_HEIGHT,
        (x, y) => noise(x, y)
    );
}

/**
 * Generates the height for a given XY point
 * @returns height for the XY coordinates
 */
function generateHeight(x, y) {
    const xf = x / COLS;
    const yf = y / ROWS;
    return bilinearSample(heightmap, xf, yf) * AMPLIFICATION;
}