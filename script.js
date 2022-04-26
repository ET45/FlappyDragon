const block = document.getElementById("block");
const hole = document.getElementById("hole");
const character = document.getElementById("character");

hole.addEventListener("animationiteration", () => {
  const random = -Math.random() * 3;
  const top = random * 100 + 150;
  hole.style.top = -top + "px";
});
setInterval(function () {
  const characterTop = parseInt(
    window.getComputedStyle(character).getPropertyValue("top")
  );
  character.style.top = characterTop + 3 + "px";
}, 10);
