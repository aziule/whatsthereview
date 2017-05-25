function RecorderRenderer() {
}

RecorderRenderer.prototype.startRecording = function() {
    document.getElementsByClassName('recorder__record-btn')[0].classList.add('recorder__record-btn--recording');
    document.getElementsByClassName('recorder__record-btn')[0].innerHTML = 'Recording';
}

RecorderRenderer.prototype.stopRecording = function() {
    document.getElementsByClassName('recorder__record-btn')[0].classList.remove('recorder__record-btn--recording');
    document.getElementsByClassName('recorder__record-btn')[0].innerHTML = 'Start recording';
}