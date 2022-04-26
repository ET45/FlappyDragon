const block = document.getElementById("block");
const hole = document.getElementById("hole");

hole.addEventListener("animationiteration", () => {
  const random = -Math.random() * 3;
  const top = random * 100 + 150;
  hole.style.top = -top + "px";
});
