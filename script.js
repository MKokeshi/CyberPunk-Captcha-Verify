const submitButton = document.getElementById("submit-button");
const userInput = document.getElementById("user-input");
const canvas = document.getElementById("canvas");
const reloadButton = document.getElementById("reload-button");

let text = "";

const textGenerator = () => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  return Array.from({ length: 9 }, () => characters.charAt(Math.floor(Math.random() * characters.length))).join('');
};

const drawStringOnCanvas = (string) => {
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const textColors = ["#000", "#828282"];
  const letterSpace = 150 / string.length;
  string.split('').forEach((char, index) => {
    const xInitialSpace = 25;
    ctx.font = "20px Roboto Mono";
    ctx.fillStyle = textColors[Math.floor(Math.random() * textColors.length)];
    ctx.fillText(
      char,
      xInitialSpace + index * letterSpace,
      Math.floor(Math.random() * 15) + 25,
      100
    );
  });
};

const triggerFunction = () => {
  userInput.value = "";
  text = textGenerator().split('').sort(() => Math.random() - 0.5).join('');
  console.log(text);
  drawStringOnCanvas(text);
};

reloadButton.addEventListener("click", triggerFunction);
window.onload = triggerFunction;

submitButton.addEventListener("click", () => {
  if (userInput.value === text) {
    alert("Success");
  } else {
    alert("Incorrect");
    triggerFunction();
  }
});
