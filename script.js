document.addEventListener("DOMContentLoaded", function () {

    var audio1 = document.getElementById("myAudio1");
    var audio2 = document.getElementById("myAudio2");

    var playButton1 = document.getElementById("playButton1");
    var playButton2 = document.getElementById("playButton2");


    playButton1.addEventListener("click", function () {
        togglePlay(audio1, playButton1);
    });

    playButton2.addEventListener("click", function () {
        togglePlay(audio2, playButton2);
    });

    function togglePlay(audio, button) {
        if (audio.paused) {
            audio.play();

        } else {
            audio.pause();

        }
    }
})
document.addEventListener('DOMContentLoaded', function () {
    var openModalBtn = document.getElementById('openModalBtn');
    var closeModalBtn = document.getElementById('closeModalBtn');
    var modal = document.getElementById('myModal');

    var openFormModalBtn = document.getElementById('openFormModalBtn');
    var closeFormModalBtn = document.getElementById('closeFormModalBtn');
    var formModal = document.getElementById('myFormModal');
    var form = document.getElementById('myForm');

    openModalBtn.addEventListener('click', function () {
        modal.style.display = 'block';
    });

    closeModalBtn.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function (event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });

    openFormModalBtn.addEventListener('click', function () {
        formModal.style.display = 'block';
    });

    closeFormModalBtn.addEventListener('click', function () {
        formModal.style.display = 'none';
    });

    window.addEventListener('click', function (event) {
        if (event.target == formModal) {
            formModal.style.display = 'none';
        }
    });

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        var formData = new FormData(form);

        var mailtoLink = 'mailto:lucianafurtadodev@gmail.com'
            + '?subject=Novo Formulário Recebido'
            + '&body=Nome: ' + formData.get('name') + '%0A'
            + 'E-mail: ' + formData.get('email');
        + 'Mensagem: ' + formData.get('mensagem');

        window.location.href = mailtoLink;
    });
});