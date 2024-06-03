/*
* File: login.js
* Author: Milan Hrabovský (xhrabo15)
* Subject: ITU
* */

// Prevents submit buttons from reloading page
function handleForm(event) { event.preventDefault(); }

// Sets this restriction to all present forms
var form = document.getElementById("form_login_register");
if(form != null){
    form.addEventListener('submit', handleForm);
}

form = document.getElementById("form_login");
if(form != null){
    form.addEventListener('submit', handleForm);
}

form = document.getElementById("form_register");
if(form != null){
    form.addEventListener('submit', handleForm);
}

form = document.getElementById("chat_form_form");
if(form != null){
    form.addEventListener('submit', handleForm);
}

// Function changes value status on MockAPI.io server to true
// This represents that user is logged in
function login(){

    var xhr = new XMLHttpRequest();
    xhr.open('PUT', 'https://639637b790ac47c680810698.mockapi.io/active/1', true);
    xhr.onload = function () {
        set_navbar();
    }
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send('status=' + true);
}

// Function changes value status on MockAPI.io server to false
// This represents that user is logged out
function logout(){
    var xhr = new XMLHttpRequest();
    xhr.open('PUT', 'https://639637b790ac47c680810698.mockapi.io/active/1', true);
    xhr.onload = function () {
        set_navbar();
    }
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send('status=' + false);
}

// This functions show/hides buttons based on login status of user
// Buttons are modified by adding/removing class for hidden button
function set_navbar(){
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://639637b790ac47c680810698.mockapi.io/active/1', true);
    xhr.onload = function () {
        var response = JSON.parse(this.responseText).status;
        // If user is logged in
        if (response === "true"){
            var button = document.getElementById("register_btn");
            if (button != null){
                button.setAttribute("class", "hide_btn");
            }
            button = document.getElementById("register_btn2");
            if (button != null){
                button.setAttribute("class", "hide_btn");
            }
            button = document.getElementById("login_btn");
            if (button != null){
                button.setAttribute("class", "hide_btn");
            }
            button = document.getElementById("login_btn2");
            if (button != null){
                button.setAttribute("class", "hide_btn");
            }
            button = document.getElementById("profile_btn");
            if (button != null){
                button.removeAttribute("class");
            }
            button = document.getElementById("profile_btn2");
            if (button != null){
                button.removeAttribute("class");
            }
            button = document.getElementById("logout_btn");
            if (button != null){
                button.removeAttribute("class");
            }
            button = document.getElementById("logout_btn2");
            if (button != null){
                button.removeAttribute("class");
            }

            // Changes 'Report Problem' button functionality to transfer to report page
            button = document.getElementById("submit_btn");
            if(button != null) {
                button.removeAttribute("data-modal-target");
                button.setAttribute("onclick", "location.href='report.html'");
            }
        }
        // If user is logged out
        else{
            var button = document.getElementById("profile_btn");
            if (button != null){
                button.setAttribute("class", "hide_btn");
            }
            button = document.getElementById("profile_btn2");
            if (button != null){
                button.setAttribute("class", "hide_btn");
            }
            button = document.getElementById("logout_btn");
            if (button != null){
                button.setAttribute("class", "hide_btn");
            }
            button = document.getElementById("logout_btn2");
            if (button != null){
                button.setAttribute("class", "hide_btn");
            }
            button = document.getElementById("register_btn");
            if (button != null){
                button.removeAttribute("class");
            }
            button = document.getElementById("register_btn2");
            if (button != null){
                button.removeAttribute("class");
            }
            button = document.getElementById("login_btn");
            if (button != null){
                button.removeAttribute("class");
            }
            button = document.getElementById("login_btn2");
            if (button != null){
                button.removeAttribute("class");
            }

            // Changes 'Report Problem' button functionality to transfer to open modal for login/registration
            button = document.getElementById("submit_btn");
            if(button != null) {
                button.setAttribute("data-modal-target", "#login_register_form");
                button.removeAttribute("onclick");
            }
        }
    }
    xhr.send();
}

// Function loads buttons when page is loaded
window.onload = function() {
    set_navbar();
}









