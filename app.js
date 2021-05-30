const play = document.getElementById("play");
const previous = document.getElementById("previous");
const next = document.getElementById("next");
const singer = document.getElementById("singer");
const songName = document.getElementById("songName");
const img = document.getElementById("img");
const music = document.getElementById("music");

let isMusicPlaying = false;

function playMusic() {
  music.play();
  img.classList.add("animate");
  isMusicPlaying = true;
  play.classList.replace("fa-play", "fa-pause");
}
function pauseMusic() {
  music.pause();
  img.classList.remove("animate");
  isMusicPlaying = false;
  play.classList.replace("fa-pause", "fa-play");
}

const songs = [
  {
    song: "Afreen-Afreen",
    titel: "Afreen Afreen",
    singer: "rahat fateh ali khan",
    cover: "afreen-afreen",
  },
  {
    song: "Lut-Gaye",
    titel: "lut gaye",
    singer: "jubin nautiyal",
    cover: "Lut-Gaye",
  },
  {
    song: "Phir-Mohabbat",
    titel: "phir mohabbat",
    singer: "arijit singh",
    cover: "phirmohabbat",
  },
  {
    song: "Top-Tucker",
    titel: "Top tucker",
    singer: "badshah",
    cover: "toptucker",
  },
];

play.addEventListener("click", () => {
  if (!isMusicPlaying) {
    playMusic();
  } else {
    pauseMusic();
  }
});

function loadSong(songs) {
  songName.textContent = songs.titel;
  singer.textContent = songs.singer;
  img.src = `images/${songs.cover}.jpg`;
  music.src = `songs/${songs.song}.mp3`;
}

loadSong(songs[0]);
let songIndex = 0;

next.addEventListener("click", () => {
  songIndex = (songIndex + 1) % songs.length;
  loadSong(songs[songIndex]);
  playMusic();
});
previous.addEventListener("click", () => {
  songIndex = (songIndex - 1 + songs.length) % songs.length;
  loadSong(songs[songIndex]);
  playMusic();
});
