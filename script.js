const block = document.getElementById("block");
const hole = document.getElementById("hole");
const character = document.getElementById("character");
const jumping = 0;

hole.addEventListener("animationiteration", () => {
  const random = -Math.random() * 3;
  const top = random * 100 + 150;
  hole.style.top = -top + "px";
});
setInterval(function () {
  const characterTop = parseInt(
    window.getComputedStyle(character).getPropertyValue("top")
  );
  if (jumping == 0) {
    character.style.top = characterTop + 3 + "px";
  }
}, 10);

function jump() {
  jumping = 1;
  let jumpCount = 0;
  const jumpInterval = setInterval(function () {
    const characterTop = parseInt(
      window.getComputedStyle(character).getPropertyValue("top")
    );
    if (characterTop > 6 && jumpCount < 15) {
      character.style.top = characterTop - 5 + "px";
    }
    if (jumpCount > 20) {
      clearInterval(jumpInterval);
      jumping = 0;
      jumpCount = 0;
    }
    jumpCount++;
  }, 10);
}
