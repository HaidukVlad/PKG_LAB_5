const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const drawBtn = document.getElementById('drawButton');

drawBtn.addEventListener('click', () => {
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];

    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const data = e.target.result;
            const lines = data.split('\n').map(line => line.trim()).filter(line => line);
            processInput(lines);
        };
        reader.readAsText(file);
    }
});

function processInput(lines) {
    const n = parseInt(lines[0]);
    const segments = [];
    for (let i = 1; i <= n; i++) {
        const coords = lines[i].split(' ').map(Number);
        segments.push(coords);
    }
    const clipRect = lines[n + 1].split(' ').map(Number);
    draw(segments, clipRect);
}