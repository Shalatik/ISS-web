/*
* File: main_page.js
* Author: Milan Hrabovský (xhrabo15), Simona Češková (xcesko00)
* Subject: ITU
* */

const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

// set every button with querry selector to click,
// on click, open popup
openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget)
        openModal(modal)
    })
})

//set event click on overlay, if click on overlay, close popup
overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active')
    modals.forEach(modal => {
        closeModal(modal)
    })
})

// set every closebutton with querry selector to click,
// on click, close popup
closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal')
        closeModal(modal)
    })
})

// open pupup, by refereníing the id of the popup
function getModal(modal_id) {
    const modal = document.querySelector(modal_id)
    openModal(modal)
}

function openModal(modal) {
    if (modal == null) return
    modal.classList.add('active')
    overlay.classList.add('active')
}

function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
}

let slideIndex = 1;

function currentDiv(n) {
    showDivs(slideIndex = n);
}

var path = window.location.pathname;
var page = path.split("/").pop();

if (page !== "report.html") {
    carousel();
}

//Change every 10 senonds slide to next
function carousel() {
    let i;
    let x = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > x.length) {
        slideIndex = 1
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" white", "");
    }
    x[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " white";
    setTimeout(carousel, 10000); // Change image every 2 seconds
}

// On coressponding dot click, show the corresponding slide
function showDivs(n) {
    let i;
    let x = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
    if (n > x.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = x.length
    }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" white", "");
    }
    x[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " white";
}

/* ************************MEDIA************************** */

function showMobileNav() {
    var x = document.getElementById("bar_list2");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

/*
* Function: sendMessage()
* Author: Simona Češková (xcesko00)
* */
// Function sends response to chat bot query
function sendMessage(form) {
    var output = '';
    output += '<div class="messages">' +
        '<blockquote id="user_chat">' +
        '<span class="chat_user">'+form.contact_message.value+'</span>' +
        '   </blockquote>' +
        '   <figure id="user_chat_pic">' +
        '       <img src="src/images/profile.png" alt="user">' +
        '   </figure>' +
        '</div>' +
        '<div class="messages">' +
        '   <blockquote>' +
        '       <span>Omlouváme se, ale chatbot momentálně není dostupný.</span>' +
        '   </blockquote>' +
        '<figure>' +
        '<img src="src/pictures/bot.png" alt="bot">' +
        '       </figure>' +
        '</div>';
    document.getElementById('getMessage').innerHTML = output;
}
