'use strict'

let review = document.querySelectorAll('.review-block')
let index = 0

setInterval(() => {
    nextReview()
}, 10000);

function bindSlider() {
    review[index].classList.add('review-active')
    let prevBtn = document.querySelector('.prev')
    let nextBtn = document.querySelector('.next')

    nextBtn.addEventListener('click', nextReview)
    prevBtn.addEventListener('click', prevReview)
}

function nextReview() {
        if (index >= review.length-1) {
            review[index].classList.remove('review-active');
            index = 0
            review[index].classList.add('review-active');
        } else {
            review[index].classList.remove('review-active');
            index++
            review[index].classList.add('review-active');
        }
}

function prevReview() {
    if (index == 0) {
        review[index].classList.remove('review-active');
        index = review.length-1
        review[index].classList.add('review-active');
        console.log(index);
        
    } else {
        review[index].classList.remove('review-active');
        index--
        review[index].classList.add('review-active');
        console.log(index);
    }
}

bindSlider()