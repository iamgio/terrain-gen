/**
 * Interpolates a point using bilinear sampling.
 * @param {*} matrix matrix of source points
 * @returns interpolated value
 */
function bilinearSample(matrix, x, y) {
    const w = matrix.length - 1;
    const h = matrix[0].length - 1;

    const x1 = Math.floor(x * w);
    const x2 = x1 + 1;
    const y1 = Math.floor(y * h);
    const y2 = y1 + 1;

    const xp = x * w - x1;
    const yp = y * h - y1;

    const q11 = matrix[x1][y1];
    const q12 = matrix[x1][y2];
    const q21 = matrix[x2][y1];
    const q22 = matrix[x2][y2];

    const r1 = lerp(q11, q21, xp);
    const r2 = lerp(q12, q22, xp);

    return lerp(r1, r2, yp);
}