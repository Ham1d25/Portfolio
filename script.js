const elements = {
  icon: document.getElementById("icon"),
  volume: document.getElementById("volume"),
  volumeSlider: document.getElementById("range"),
  volumePercentage: document.getElementById("percentage"),
  volumeContainer: document.querySelector(".volume-container"),
};

const playlist = [
  "music/ripped jeans_spotdown.org.mp3",
  "music/MY JEALOUSY HARDTEKK - Super Slowed_spotdown.org.mp3",
  "music/VYZEE (UP UP UP, WE CAN GO LOCO)_spotdown.org.mp3",
  "music/i kissed (Slowed + Reverb)_spotdown.org.mp3",
  "music/hunter eyes - slowed_spotdown.org.mp3",
];

let songNumber = 0;
const audio = new Audio(playlist[songNumber]);

elements.volumeSlider.addEventListener("input", (e) => {
  audio.volume = parseFloat(e.target.value);
  const percentage = Math.round(e.target.value * 100);
  elements.volumePercentage.textContent = `${percentage}%`;
});

audio.addEventListener("ended", () => {
  songNumber = (songNumber + 1) % playlist.length;
  audio.src = playlist[songNumber];
  audio.play();
});

elements.icon.addEventListener("click", () => {
  document.body.classList.toggle("light-theme");
  elements.icon.src =
    elements.icon.getAttribute("src") === "images/sun-solid-full.svg"
      ? "images/moon-solid-full.svg"
      : "images/sun-solid-full.svg";
});

elements.volume.addEventListener("click", async () => {
  elements.volume.src =
    elements.volume.getAttribute("src") === "images/volume-off-solid-full.svg"
      ? "images/volume-solid-full.svg"
      : "images/volume-off-solid-full.svg";
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
});

elements.volumeContainer.addEventListener("mouseenter", () => {
  elements.volumeSlider.classList.remove("hidden");
  elements.volumePercentage.classList.remove("hidden");
});

elements.volumeContainer.addEventListener("mouseleave", () => {
  elements.volumeSlider.classList.add("hidden");
  elements.volumePercentage.classList.add("hidden");
});