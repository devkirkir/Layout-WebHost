'use strict'

function bindEvents() {
    let cities = document.querySelectorAll('.city-dot')

    for (let i = 0; i <= cities.length; i++) {
        cities[i].addEventListener('mouseover', showModal)
        cities[i].addEventListener('mouseout', hideModal)
    }
}

function randomPing() {
    return Math.floor(60 - 0.5 + Math.random() * (130 - 60 + 1));
}

function CreateSVG(ping) {
    let xmlns = "http://www.w3.org/2000/svg";
    let boxWidth = 30;
    let boxHeight = 30;
    let pathCoords = ["M2,20.8L2,20.8c-1.1,0-2-0.9-2-2l0-6c0-1.1,0.9-2,2-2h0c1.1,0,2,0.9,2,2v6C4,19.9,3.1,20.8,2,20.8z",
    "M8.3,20.8L8.3,20.8c-1.1,0-2-0.9-2-2v-11c0-1.1,0.9-2,2-2h0c1.1,0,2,0.9,2,2v11C10.3,19.9,9.4,20.8,8.3,20.8z",
    "M14.6,20.9L14.6,20.9c-1.1,0-2-0.9-2-2V2c0-1.1,0.9-2,2-2l0,0c1.1,0,2,0.9,2,2v16.9C16.6,20,15.7,20.9,14.6,20.9z"]

    let svg = document.createElementNS(xmlns, "svg");
    svg.setAttributeNS(null, "viewBox", "0 0 " + boxWidth + " " + boxHeight);
    svg.setAttributeNS(null, "width", boxWidth);
    svg.setAttributeNS(null, "height", boxHeight);
    svg.id = 'connect-icon'

    let level = 0;
    
    if (ping < 100) {
        level = 3
    } else if (ping >= 90 && ping <= 120) {
        level = 2
    } else {
        level = 1
    }

    for (let i = 0; i <= level-1; i++) {
        let path = document.createElementNS(xmlns, "path");
        path.setAttribute("d", pathCoords[i]);
        path.style.stroke = '#eee'

        if (level == 3) {
            path.style.fill = '#65cf6b'
        } else if (level == 2) {
            path.style.fill = '#ffa500'
        } else {
            path.style.fill = '#F8646C'
        }
        
        svg.append(path)
    }

    return svg
}

function createModal(title, x, y) {
    let cities = {
        moscow: 'Moscow',
        pekin: 'Pekin',
        paris: 'Paris',
        toronto: 'Toronto',
        buenos: 'Buenos Aires'
    }

    let modalBlock = document.createElement('div')
    modalBlock.id = 'modal-map'
    modalBlock.style.top = y - 40 + 'px'
    modalBlock.style.left = x + 23 + 'px'

    let modalTitle = document.createElement('h3')

    for (let key in cities) {
        if (title == key) {
            modalTitle.innerText = cities[key]
        }
    }

    let pingContainer = document.createElement('div')
    pingContainer.className = 'ping-container'

    let displayPing = document.createElement('p')
    displayPing.innerText = randomPing()
    pingContainer.append(CreateSVG(+displayPing.innerText))
    displayPing.innerText = displayPing.innerText + 'ms'

    modalBlock.append(modalTitle)
    modalBlock.append(pingContainer)
    pingContainer.append(displayPing)

    return modalBlock
}

function showModal(event) {
        let appending = document.querySelector('.world-map')

        let x = event.layerX
        let y = event.layerY

        let cities = ['moscow', 'toronto', 'pekin', 'buenos', 'paris']

        for (let city of cities) {
            if (this.classList.contains(city)) {
                appending.append(createModal(city, x, y))
            }
        }
}

function hideModal() {
        document.getElementById('modal-map').remove()        
}

function main() {
    bindEvents()
}

main()