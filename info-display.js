function setInfo(key, value) {
    document.getElementById('info-' + key).innerText = value;
}

setInfo('grid-size', COLS + 'x' + ROWS);
setInfo('heightmap-size', HEIGHTMAP_WIDTH + 'x' + HEIGHTMAP_HEIGHT);
//setInfo('noise-parameters', JSON.stringify(noiseParameters));
setInfo('static', STATIC);

const parametersList = document.getElementById('info-noise-parameters');

Object.entries(noiseParameters).forEach(([key, value]) => {
    const item = document.createElement('li');
    item.innerHTML = '<strong>' + key + ': </strong>' + value;
    parametersList.appendChild(item);
});