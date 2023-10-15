const heightmap = [
    [0, 0, 100, 0, 0],
    [0, 200, 10, 0, 200],
    [0, 0, -1000, 0, 0],
    [0, 100, 200, 0, 0],
    [0, 0, 0, 100, 0]
];

/**
 * Generates the height for a given XY point
 * @returns height for the XY coordinates
 */
function generateHeight(x, y) {
    const xf = x / COLS;
    const yf = y / ROWS;
    return bilinearSample(heightmap, xf, yf);
}