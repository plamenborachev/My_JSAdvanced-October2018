function timer() {
    let spanHours = $('#hours');
    let spanMinutes = $('#minutes');
    let spanSeconds = $('#seconds');
    let startBtn = $('#start-timer');
    let stopBtn = $('#stop-timer');

    let seconds = 0;
    let interval;

    startBtn.on('click', startTimer);
    stopBtn.on('click', stopTimer);

    function startTimer(){
        if (!interval){
            interval = setInterval(createTime, 1000);
        }
    }
    function createTime() {
        seconds++;
        spanHours.text(('0' + Math.floor(seconds / 60 / 60)).slice(-2));
        spanMinutes.text(('0' + Math.floor(seconds / 60) % 60).slice(-2));
        spanSeconds.text(('0' + seconds % 60).slice(-2));
    }
    function stopTimer() {
        clearInterval(interval);
        interval = null;
    }
}