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
    if (days < 10) {
        document.getElementById('digit4').innerHTML = "0" + days.toString();
    }
    else{
        document.getElementById('digit4').innerHTML = days.toString();
    }
    if (hours < 10) {
        document.getElementById('digit3').innerHTML = "0" + hours.toString();
    }
    else{
        document.getElementById('digit3').innerHTML = hours.toString();
    }
    if (minutes < 10) {
        document.getElementById('digit2').innerHTML = "0" + minutes.toString();
    }
    else{
        document.getElementById('digit2').innerHTML = minutes.toString();
    }
    if (seconds <10) {
        document.getElementById('digit1').innerHTML = "0" + seconds.toString();
    }
    else{
        document.getElementById('digit1').innerHTML = seconds.toString();
    }
}
timer = setInterval(showRemaining, 1000);