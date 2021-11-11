/*
 * © Bugaev Ivan
 * This code is protected by copyright.
*/

var bivTimerEndDate = 'Jun 01 2021 00:00:00 GMT+0300'; // end date
// var bivTimerEndDate = new Date (Date.parse(new Date()) + 07 * 15 * 60 * 60 * 1000); // end date
var timeInterval = 0;

function BivTimerCalculations() {
  var time = Date.parse(bivTimerEndDate) - Date.parse(new Date());
  var seconds = Math.floor((time / 1000) % 60);
  var minutes = Math.floor((time / 1000 / 60) % 60);
  var hours = Math.floor((time / (1000 * 60 * 60)) % 24);
  var days = Math.floor(time / (1000 * 60 * 60 * 24));
  return {
    'total': time,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function BivTimerAction() {
  var time = BivTimerCalculations();
  var blockId = '#bivTimer';
  $(blockId+' .days').html(time.days);
  $(blockId+' .hours').html(('0' + time.hours).slice(-2));
  $(blockId+' .minutes').html(('0' + time.minutes).slice(-2));
  $(blockId+' .seconds').html(('0' + time.seconds).slice(-2));
  if (time.total <= 0) {
    clearInterval(timeInterval);
  }
}
 
function BivTimer() {
  BivTimerAction();
  var timeInterval = setInterval(BivTimerAction, 1000);
}

BivTimer();