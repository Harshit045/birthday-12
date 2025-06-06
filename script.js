const balloonContainer = document.getElementById("balloon-container");
const finalGift = document.getElementById("final-gift");
const popSound = new Audio("pop-94319.mp3");
const birthdaySong = new Audio("happy-birthday-352722.mp3");

const numBalloons = 27;
let currentBalloon = 0;

function showNextBalloon() {
  if (currentBalloon >= numBalloons) {
    finalGift.style.display = "block";
    birthdaySong.play();
    return;
  }

  const balloon = document.createElement("div");
  balloon.className = "balloon";
  balloon.textContent = currentBalloon + 1;

  balloon.addEventListener("click", () => {
    party.confetti(balloon);
    popSound.currentTime = 0;
    popSound.play();
    balloon.remove();
    currentBalloon++;
    setTimeout(showNextBalloon, 500);
  });

  balloonContainer.appendChild(balloon);
}

document.getElementById("giftBtn").onclick = () => {
  document.getElementById("giftBtn").disabled = true;
  showNextBalloon();
};
