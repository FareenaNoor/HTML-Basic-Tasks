const container = document.getElementById("container");

function generateRandomHex() {
    var decimalValue = Math.floor(Math.random() * 16777215);
    var hexValue = decimalValue.toString(16).padStart(6, '0');
    return '#' + hexValue;
}
for (var i = 0; i < 10; i++) {
    var color = generateRandomHex();
    const palette = document.createElement("div");
    palette.style.backgroundColor = color;
    palette.id = 'palette' + (i + 1);
    palette.textContent = color
    container.appendChild(palette)
}

container.onclick = function () {
    for (var i = 0; i < 10; i++) {
        var color = generateRandomHex();
        const palette = document.getElementById('palette' + (i + 1));
        palette.style.backgroundColor = color;
        palette.textContent = color
    }

}



