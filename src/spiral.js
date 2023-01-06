const canvas = document.createElement("canvas");
canvas.width = 500;
canvas.height = 500;
document.body.appendChild(canvas);
const ctx = canvas.getContext("2d");

// spiral parameters
const x = 250;
const y = 250;
const size = 2;
fps = 10

// spiral colors
const colors = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "indigo",
  "violet"
];

let angle = 0;
let radius = 0;

// update spiral
const update = () => {
  angle += speed;
  radius += size;
};

// render spiral
const render = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.moveTo(x, y);
  for (let i = 0; i < colors.length; i++) {
    ctx.strokeStyle = colors[i];
    ctx.arc(x, y, radius, angle, angle + Math.PI / 180);
    ctx.stroke();
  }
};

// game loop
setInterval(() => {
  update();
  render();
}, 1000 / fps);