const audio = document.getElementById('audio');
const playPauseBtn = document.getElementById('playPauseBtn');
const progressBar = document.getElementById('progressBar');
const volumeBtn = document.getElementById('volumeBtn');
const volumeSlider = document.getElementById('volumeSlider');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

const playlistData = [
    { title: 'Música 1', artist: 'Artista 1', src: '../sound/lofi.mp3' },
    { title: 'Música 2', artist: 'Artista 2', src: '../sound/rain.mp3' },
    // Adicione mais músicas conforme necessário
];

let currentSongIndex = 0;

function loadSong(index) {
    audio.src = playlistData[index].src;
    audio.load();
    playPauseBtn.innerHTML = '&#9654;';
}

function togglePlayPause() {
    if (audio.paused || audio.ended) {
        audio.play();
        playPauseBtn.innerHTML = '&#9208;';
    } else {
        audio.pause();
        playPauseBtn.innerHTML = '&#9654;';
    }
}

function updateProgressBar() {
    const percentage = (audio.currentTime / audio.duration) * 100;
    progressBar.style.width = `${percentage}%`;
}

function resetPlayer() {
    playPauseBtn.innerHTML = '&#9654;';
    progressBar.style.width = '0';
}

function toggleMute() {
    audio.muted = !audio.muted;
    volumeBtn.innerHTML = audio.muted ? '&#128263;' : '&#128266;';
}

function setVolume() {
    audio.volume = volumeSlider.value;
}

prevBtn.addEventListener('click', () => {
    currentSongIndex = (currentSongIndex - 1 + playlistData.length) % playlistData.length;
    loadSong(currentSongIndex);
    audio.play();
});

nextBtn.addEventListener('click', () => {
    currentSongIndex = (currentSongIndex + 1) % playlistData.length;
    loadSong(currentSongIndex);
    audio.play();
});

audio.addEventListener('timeupdate', updateProgressBar);
audio.addEventListener('ended', () => {
    resetPlayer();
    currentSongIndex = (currentSongIndex + 1) % playlistData.length;
    loadSong(currentSongIndex);
    audio.play();
});

volumeBtn.addEventListener('click', toggleMute);
volumeSlider.addEventListener('input', setVolume);

progressBar.parentElement.addEventListener('click', (e) => {
    const clickX = e.pageX - progressBar.parentElement.offsetLeft;
    const newTime = (clickX / progressBar.parentElement.offsetWidth) * audio.duration;
    audio.currentTime = newTime;
});

audio.addEventListener('volumechange', () => {
    volumeBtn.innerHTML = audio.muted ? '&#128263;' : '&#128266;';
});

// Carregar a primeira música ao iniciar
loadSong(currentSongIndex);
audio.play(); // Iniciar a reprodução automaticamente

// Adicionar evento de clique para o botão play/pause
playPauseBtn.addEventListener('click', togglePlayPause);

"use strict";

let hour = 0;
let minute = 0;
let second = 0;
let millisecond = 0;

let cron;

document.form_main.start.onclick = () => start();
document.form_main.pause.onclick = () => pause();
document.form_main.reset.onclick = () => reset();

function start() {
    pause();
    cron = setInterval(() => { timer(); }, 10);
  }
  
  function pause() {
    clearInterval(cron);
  }
  
  function reset() {
    hour = 0;
    minute = 0;
    second = 0;
    millisecond = 0;
    document.getElementById('hour').innerText = '00';
    document.getElementById('minute').innerText = '00';
    document.getElementById('second').innerText = '00';
    document.getElementById('millisecond').innerText = '000';
  }

  function timer() {
    if ((millisecond += 10) == 1000) {
      millisecond = 0;
      second++;
    }
    if (second == 60) {
      second = 0;
      minute++;
    }
    if (minute == 60) {
      minute = 0;
      hour++;
    }
    document.getElementById('hour').innerText = returnData(hour);
    document.getElementById('minute').innerText = returnData(minute);
    document.getElementById('second').innerText = returnData(second);
    document.getElementById('millisecond').innerText = returnData(millisecond);
  }
  
  function returnData(input) {
    return input > 10 ? input : `0${input}`
  }

  
document.querySelector('a[href="#"] img[alt="pomodoro"]').addEventListener('click', function () {
    
    var timerFormWrapper = document.getElementById('timerFormWrapper');

    // Toggle the display property of the form wrapper
    if (timerFormWrapper.style.display === 'none') {
        timerFormWrapper.style.display = 'block';
    } else {
        timerFormWrapper.style.display = 'none';
    }
});

document.querySelector('a[href="#"] img[alt="about"]').addEventListener('click', function () {
    
    var aboutWrapper = document.getElementById('aboutWrapper');

    if (aboutWrapper.style.display === 'none') {
        aboutWrapper.style.display = 'block';
    } else {
        aboutWrapper.style.display = 'none';
    }
});
