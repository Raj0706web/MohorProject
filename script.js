const gif = document.getElementById("gif");
const title = document.getElementById("title");
const subtitle = document.getElementById("subtitle");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

let noCount = 0;

noBtn.addEventListener("click", () => {
  noCount++;

  if (noCount === 1) {
    gif.src = "gifs/sad1.gif";
    title.innerText = "Ek aur baar soch lo! 😣";
    subtitle.innerText = "kyu aisa kar rahi ho 😢";
  } else if (noCount === 2) {
    gif.src = "gifs/sad2.gif";
    title.innerText = "Ab toh YES hi click karna padega 😤";
    subtitle.innerText = "No is not an option anymore 😈";

    // make NO button run away
    noBtn.addEventListener("mouseover", moveNoButton);
  }
});

function moveNoButton() {
  const x = Math.random() * 300 - 150;
  const y = Math.random() * 150 - 75;

  noBtn.style.transform = `translate(${x}px, ${y}px)`;
}

yesBtn.addEventListener("click", () => {
  gif.src = "gifs/love.gif";
  title.innerText = "Hehehehe, I knew it! Love you a lot 😘";
  subtitle.innerText = "";

  document.querySelector(".buttons").style.display = "none";
});
