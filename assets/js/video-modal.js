'use strict'

let overlay = document.getElementById('overlay')

function bindVideo() {
    let buttonVideo = document.getElementById('video-button')

    buttonVideo.addEventListener('click', showVideoModal)
    overlay.addEventListener('click', hideVideoModal)
}

function createVideoModal() {
    let modalBlock = document.createElement('div')
    modalBlock.id = 'modal-video'


    let video = document.createElement('iframe')
    video.src = 'https://www.youtube.com/embed/wZM3UHH0O0Y'

    modalBlock.append(video)

    return modalBlock
}

function showVideoModal() {
    let appending = document.querySelector('.wrap')

    overlay.className = 'visible'
    appending.append(createVideoModal())
}

function hideVideoModal() {
    overlay.className = 'hidden'
    document.getElementById('modal-video').remove()
}

bindVideo()