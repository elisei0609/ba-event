// jQuery TIme



function getTimeRemaining(endtime) {
   var t = Date.parse(endtime) - Date.parse(new Date());
   var seconds = Math.floor((t / 1000) % 60);
   var minutes = Math.floor((t / 1000 / 60) % 60);
   var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
   var days = Math.floor(t / (1000 * 60 * 60 * 24));
   return {
     'total': t,
     'days': days,
     'hours': hours,
     'minutes': minutes,
     'seconds': seconds
   };
 }
  
 function initializeClock(id, endtime) {
   var clock = document.getElementById(id);
   var daysSpan = clock.querySelector('.days');
   var hoursSpan = clock.querySelector('.hours');
   var minutesSpan = clock.querySelector('.minutes');
   var secondsSpan = clock.querySelector('.seconds');
  
   function updateClock() {
     var t = getTimeRemaining(endtime);
  
     daysSpan.innerHTML = t.days;
     hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
     minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
     secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
  
     if (t.total <= 0) {
       clearInterval(timeinterval);
     }
   }
  
   updateClock();
   var timeinterval = setInterval(updateClock, 1000);
 }
  
 var deadline = new Date(Date.parse(new Date()) + 24 * 37 * 61 * 60 * 1000); // for endless timer
 initializeClock('clockdiv', deadline);
 


//  CARDS ANIMATION

const cards = findAllCards();
bindEventsCard(cards);


function findAllCards() {
  return document.querySelectorAll('.card');
}

function bindEventsCard(cards) {
  for (let i = 0, length = cards.length; i < length; i++) {
    cards[i].addEventListener('mousemove', startRotate);
    cards[i].addEventListener('mouseout', stopRotate);
  }
}

function startRotate(event) {
  let cardItem = this.querySelector('.card-item'),
      halfHeight = cardItem.offsetHeight / 2,
      halfWidth = cardItem.offsetWidth / 2;
  
  cardItem.style.transform = 'rotatex(' + -(event.offsetY - halfHeight) / 5 + 'deg) rotateY(' + (event.offsetX - halfWidth) / 5 + 'deg)';
}

function stopRotate(event) {
  let cardItem = this.querySelector('.card-item');
  cardItem.style.transform = 'rotate(0)';
}
jQuery(function($) {
  $('.ba-sponsorship__list').slick({
    infinite:true,
    slidesToShow: 4,
    slidesToScroll: 3
  });
  
})

