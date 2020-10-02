var end = new Date('10/17/2020 9:30 AM');
var _second = 1000;
var _minute = _second * 60;
var _hour = _minute * 60;
var _day = _hour * 24;
var timer;

function showRemaining() {
    var now = new Date();
    var distance = end - now;
    if (distance < 0) {

        clearInterval(timer);
        document.getElementById('digit4').innerHTML = '0';
        document.getElementById('digit3').innerHTML = '0';
        document.getElementById('digit2').innerHTML = '0';
        document.getElementById('digit1').innerHTML = '0';

        return;
    }
    var days = Math.floor(distance / _day);
    var hours = Math.floor((distance % _day) / _hour);
    var minutes = Math.floor((distance % _hour) / _minute);
    var seconds = Math.floor((distance % _minute) / _second);

    document.getElementById('digit4').innerHTML = days;
    document.getElementById('digit3').innerHTML = hours;
    document.getElementById('digit2').innerHTML = minutes;
    document.getElementById('digit1').innerHTML = seconds;
}
timer = setInterval(showRemaining, 1000);