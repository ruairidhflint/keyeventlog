const keyNumber = document.querySelector('.number');
const keyLetter = document.querySelector('.letter');
const opening = document.querySelector('.opening');
const menuButton = document.querySelector('.menu-icon');
const menu = document.querySelector('.side-bar');

window.addEventListener('keydown', (event) => checkIt(event))
menuButton.addEventListener('click', openNav)


function checkIt(e) {
    keyNumber.innerHTML = e.keyCode;
    keyLetter.innerHTML = e.key;
    opening.style.display = 'none'
}

function openNav() {
    menu.classList.toggle('add-height');
}

window.onload = function () {
    var mobile = (/iphone|ipad|ipod|android|blackberry|mini|windows\sce|palm/i.test(navigator.userAgent.toLowerCase()));
    if (mobile) {
        opening.innerHTML = 'Not yet available on mobile'
    } else {
        console.log('working fine')
    }
}
