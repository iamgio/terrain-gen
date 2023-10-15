/**
 * @param {*} height height of the point
 * @returns the color to give to a point of a given height
 */
function getColor(height) {
    return {
        hue: 120 - height / 4,
        saturation: 80 - height / 4,
        brightness: height / 8 + 20
    }
}