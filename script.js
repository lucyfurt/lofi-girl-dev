const audio = document.getElementById('audio');
const playPauseBtn = document.getElementById('playPauseBtn');
const progressBar = document.getElementById('progressBar');
const volumeBtn = document.getElementById('volumeBtn');
const volumeSlider = document.getElementById('volumeSlider');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

const playlistData = [
    { title: 'Música 1', artist: 'Artista 1', src: '../sound/lofi.mp3' },
    { title: 'Música 2', artist: 'Artista 2', src: '../sound/1.mp3' },
    { title: 'Música 3', artist: 'Artista 3', src: '../sound/2.mp3' },
    { title: 'Música 4', artist: 'Artista 4', src: '../sound/3.mp3' },
    { title: 'Música 5', artist: 'Artista 5', src: '../sound/4.mp3' },
    { title: 'Música 6', artist: 'Artista 6', src: '../sound/5.mp3' },
    { title: 'Música 7', artist: 'Artista 7', src: '../sound/6.mp3' },
    { title: 'Música 8', artist: 'Artista 8', src: '../sound/7.mp3' },
    { title: 'Música 9', artist: 'Artista 8', src: '../sound/rain.mp3' },
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
document.addEventListener('DOMContentLoaded', function() {
    // Coloque seu código aqui
    let workDuration = 25 * 60; // 25 minutos em segundos
let breakDuration = 5 * 60; // 5 minutos em segundos

let currentDuration = workDuration;
let isWorking = true;
let isPaused = true;

let cron;

document.form_main.start.onclick = () => startPauseToggle();
document.form_main.reset.onclick = () => reset();

function startPauseToggle() {
    if (isPaused) {
        start();
    } else {
        pause();
    }
}

function start() {
    isPaused = false;
    cron = setInterval(() => { timer(); }, 1000);
}

function pause() {
    isPaused = true;
    clearInterval(cron);
}

function reset() {
    pause();
    if (isWorking) {
        currentDuration = workDuration;
    } else {
        currentDuration = breakDuration;
    }
    updateDisplay();
}

function timer() {
    if (currentDuration > 0) {
        currentDuration--;
    } else {
        // Se a contagem regressiva chegar a zero, alternar entre trabalho e intervalo
        isWorking = !isWorking;
        if (isWorking) {
            currentDuration = workDuration;
        } else {
            currentDuration = breakDuration;
        }
    }
    updateDisplay();
}

function updateDisplay() {
    const minutes = Math.floor(currentDuration / 60);
    const seconds = currentDuration % 60;
    document.getElementById('minute').innerText = returnData(minutes);
    document.getElementById('second').innerText = returnData(seconds);
    document.getElementById('status').innerText = isWorking ? "Trabalhando" : "Intervalo";
}

function returnData(input) {
    return input >= 10 ? input : `0${input}`;
}

});
"use strict";



  
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

function addNote() {
    var noteText = document.getElementById("note-input").value;

    if (noteText.trim() === "") {
        alert("Por favor, digite uma nota.");
        return;
    }

    var notesContainer = document.getElementById("notes-container");
    var newNote = document.createElement("div");
    newNote.className = "note";
    newNote.innerHTML = noteText;
    notesContainer.appendChild(newNote);

    // Limpar o campo de entrada
    document.getElementById("note-input").value = "";
}
