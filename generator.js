const HEIGHTMAP_WIDTH = 40;
const HEIGHTMAP_HEIGHT = 40;

const AMPLIFICATION = 300;

/**
 * Parameters that define the produced noise
 */
const noiseParameters = {
    scale: 50,          // Area taken by a spike
    persistence: 1,     // Spike details
    octaves: 2,         // Smoothness
    exponentiation: 2,  // Amplitude
    height: 30,         // Maximum height
    lacunarity: 3,      // Frequency of spikes
    func: perlin        // Noise function to use
}

/**
 * A small matrix that keeps information about altitude and that is then
 * adapted onto the bigger terrain matrix by interpolating its points.
 */
let heightmap;

/**
 * Initializes the heightmap
 */
function initHeightmap() {
    heightmap = createMatrix(
        HEIGHTMAP_WIDTH, HEIGHTMAP_HEIGHT,
        (x, y) => noise2D(x, y, noiseParameters)
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