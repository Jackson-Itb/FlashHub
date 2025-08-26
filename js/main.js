// Theme toggle
const toggleBtn = document.getElementById("toggle-theme");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("light");
});

// Modal
const gameModal = document.getElementById("game-modal");
const gameContainer = document.getElementById("game-container");
const closeModal = document.getElementById("close-modal");

const ruffle = window.RufflePlayer.newest();

document.querySelectorAll(".game-card").forEach(card => {
  card.addEventListener("click", () => {
    const gameSrc = card.dataset.game;
    openGame(gameSrc);
  });

  card.querySelector(".play-btn").addEventListener("click", e => {
    e.stopPropagation(); // prevent double open
    const gameSrc = card.parentElement.dataset.game || card.dataset.game;
    openGame(gameSrc);
  });
});

function openGame(src) {
  gameContainer.innerHTML = "";
  const player = ruffle.createPlayer();
  gameContainer.appendChild(player);
  player.load(src);
  gameModal.classList.remove("hidden");
}

closeModal.addEventListener("click", () => {
  gameContainer.innerHTML = "";
  gameModal.classList.add("hidden");
});
