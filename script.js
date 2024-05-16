function showIframe() {
    var select = document.getElementById('versionSelect');
    var value = select.value;

    document.getElementById('iframe1').style.display = 'none';
    document.getElementById('iframe2').style.display = 'none';

    if (value === '1.5.2') {
        document.getElementById('iframe1').style.display = 'block';
    } else if (value === '1.8.8') {
        document.getElementById('iframe2').style.display = 'block';
    }
}

function openFullscreen(iframe) {
    if (iframe.requestFullscreen) {
        iframe.requestFullscreen();
    } else if (iframe.mozRequestFullScreen) { // Firefox
        iframe.mozRequestFullScreen();
    } else if (iframe.webkitRequestFullscreen) { // Chrome, Safari and Opera
        iframe.webkitRequestFullscreen();
    } else if (iframe.msRequestFullscreen) { // IE/Edge
        iframe.msRequestFullscreen();
    }
}