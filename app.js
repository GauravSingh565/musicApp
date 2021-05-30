const play = document.getElementById("play");
const previous = document.getElementById("previous");
const next = document.getElementById("next");
const singer = document.getElementById("singer");
const songName = document.getElementById("songName");
const img = document.getElementById("img");
const music = document.getElementById("music");
let current_Time = document.getElementById("currentTime");
let totalDuration = document.getElementById("duration");
let progressBar = document.getElementById("progressBar");
let progress = document.getElementById("progress");

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
  {
    song: "Brown-Munde",
    titel: "Brown-Munde",
    singer: "AP dhillons",
    cover: "brown",
  },
  {
    song: "Guilty",
    titel: "Guilty",
    singer: "karan aujla",
    cover: "guilty",
  },
  {
    song: "Keh-Len-De",
    titel: "Keh-Len-De",
    singer: "Kaka",
    cover: "keh",
  },
  {
    song: "Libaas",
    titel: "Libaas",
    singer: "kaka",
    cover: "libas",
  },
  {
    song: "Liggi",
    titel: "Liggi",
    singer: "ritviz",
    cover: "ligi",
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

music.addEventListener("timeupdate", (event) => {
  const { currentTime, duration } = event.srcElement;
  let time = (currentTime / duration) * 100;
  progressBar.style.width = `${time}%`;

  // total duration--------------------
  let min = Math.floor(duration / 60);
  let sec = Math.floor(duration % 60);
  let total = `${min}:${sec}`;
  if (duration) {
    totalDuration.textContent = `${total}`;
  }

  // current time--------------------
  let min_current = Math.floor(currentTime / 60);
  let sec_current = Math.floor(currentTime % 60);
  if (sec_current < 10) {
    sec_current = `0${sec_current}`;
  }
  let total_current = `${min_current}:${sec_current}`;
  current_Time.textContent = `${total_current}`;
});

progress.addEventListener("click", (event) => {
  const { duration } = music;
  let move = (event.offsetX / event.srcElement.clientWidth) * duration;
  music.currentTime = move;
});

loadSong(songs[0]);
let songIndex = 0;

music.addEventListener("ended", () => {
  songIndex = (songIndex + 1) % songs.length;
  loadSong(songs[songIndex]);
  playMusic();
});
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
