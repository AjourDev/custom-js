const canvas = document.createElement("canvas");
canvas.width = 500;
canvas.height = 500;
document.body.appendChild(canvas);
const ctx = canvas.getContext("2d");

// circle parameters
const x = 250;
const y = 250;
const minSize = 10;
const maxSize = 200;
const speed = 1;
const fps = 10

let size = minSize;
let growing = true;

// update circle
const update = () => {
  if (growing) {
    size += speed;
  } else {
    size -= speed;
  }
  if (size > maxSize) {
    growing = false;
  } else if (size < minSize) {
    growing = true;
  }
};

// render circle
const render = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.arc(x, y, size, 0, 2 * Math.PI);
  ctx.strokeStyle = "cyan";
  ctx.stroke();
};

// game loop
setInterval(() => {
  update();
  render();
}, 1000 / fps);
