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
