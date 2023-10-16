function setInfo(key, value) {
    document.getElementById('info-' + key).innerText = value;
}

setInfo('grid-size', COLS + 'x' + ROWS);
setInfo('heightmap-size', HEIGHTMAP_WIDTH + 'x' + HEIGHTMAP_HEIGHT);
setInfo('noise-parameters', JSON.stringify(noiseParameters));
setInfo('static', STATIC);