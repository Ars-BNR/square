document.addEventListener("DOMContentLoaded", () => {
  const squares = document.querySelectorAll(".square");

  squares.forEach((square, index) => {
    const randomDelay = Math.random() * 1.5;
    square.style.animationDelay = `${randomDelay}s`;
  });
});
