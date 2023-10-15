function perlin(x, y) {
    return noise(x, y) * 2 - 2;
}

function noise2D(x, y, parameters) {
    const xs = x / parameters.scale;
    const ys = y / parameters.scale;

    let amplitude = 1.0;
    let frequency = 1.0;
    let normalization = 0;
    let total = 0;

    for (let o = 0; o < parameters.octaves; o++) {
        const noiseValue = parameters.func(xs * frequency, ys * frequency) * 0.5 + 0.5;
        total += noiseValue * amplitude;
        normalization += amplitude;
        amplitude *= parameters.persistence;
        frequency *= parameters.lacunarity;
    }

    total /= normalization;
    return Math.pow(total, parameters.exponentiation) * parameters.height;
}