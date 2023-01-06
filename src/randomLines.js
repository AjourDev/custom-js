const canvas = document.createElement("canvas");
canvas.width = 500;
canvas.height = 500;
document.body.appendChild(canvas);
const ctx = canvas.getContext("2d");

// line parameters
const length = 50;
const fps = 5;

// array of line positions and colors
const lines = [];

for (let i = 0; i < (canvas.width / length) * (canvas.height / length); i++) {
  lines.push({
    x1: (i % (canvas.width / length)) * length,
    y1: Math.floor(i / (canvas.width / length)) * length,
    x2: (i % (canvas.width / length)) * length + length,
    y2: Math.floor(i / (canvas.width / length)) * length + length,
    color: "rgb(" +
      Math.floor(Math.random() * 256) +
      "," +
      Math.floor(Math.random() * 256) +
      "," +
      Math.floor(Math.random() * 256) +
      ")"
  });
}

// update lines
const update = () => {
  for (let i = 0; i < lines.length; i++) {
    lines[i].color = "rgb(" +
      Math.floor(Math.random() * 256) +
      "," +      Math.floor(Math.random() * 256) +
      "," +
      Math.floor(Math.random() * 256) +
      ")";
  }
};

// render lines
const render = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < lines.length; i++) {
    ctx.beginPath();
    ctx.moveTo(lines[i].x1, lines[i].y1);
    ctx.lineTo(lines[i].x2, lines[i].y2);
    ctx.strokeStyle = lines[i].color;
    ctx.stroke();
  }
};

// game loop
setInterval(() => {
  update();
  render();
}, 1000 / fps);

