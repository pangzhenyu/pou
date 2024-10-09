document.addEventListener('DOMContentLoaded', function() {
    const languageSelect = document.querySelector('select');
    languageSelect.addEventListener('change', function() {
        const selectedLanguage = this.value;
        if (selectedLanguage === 'en') {
            window.location.href = '/index.html';  // 跳转到根目录的 index.html
        } else {
            window.location.href = `/${selectedLanguage}/index.html`;
        }
    });
});

function resetGame() {
    const iframe = document.querySelector('.game-frame');
    iframe.src = iframe.src;
}

function toggleFullscreen() {
    const iframe = document.querySelector('.game-frame');
    if (!document.fullscreenElement) {
        if (iframe.requestFullscreen) {
            iframe.requestFullscreen();
        } else if (iframe.mozRequestFullScreen) { // Firefox
            iframe.mozRequestFullScreen();
        } else if (iframe.webkitRequestFullscreen) { // Chrome, Safari and Opera
            iframe.webkitRequestFullscreen();
        } else if (iframe.msRequestFullscreen) { // IE/Edge
            iframe.msRequestFullscreen();
        }
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
    }
}