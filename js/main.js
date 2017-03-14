'use strict';

/* Coded by Paliy Rostyslav. e-mail: paliy1984@gmail.com. skype: ros.coprandos  !!!SYLB!!! */

/*jslint vars: true, devel: true*/
/*global $, jQuery, alert*/
/*jslint plusplus: true */

var link = document.querySelector('.login');
var popup = document.querySelector('.modal-content');
var overlay = document.querySelector('.modal-overlay');
var close = document.querySelector('.modal-content-close');

var login = popup.querySelector('[name=login]');
var passWord = popup.querySelector('[name=password]');

var form = popup.querySelector('form');

var storage = localStorage.getItem('login');

var mapPopup = document.querySelector('.modal-content-map');
var mapLink = document.querySelector('.js-open-map');
var closeMap = document.querySelector('.modal-content-close-map');

function openLogin(e) {
    e.preventDefault();
    popup.classList.add('modal-content-show');
    overlay.classList.add('modal-overlay-show');

    if (storage) {
        login.value = storage;
        passWord.focus();
    } else {
        login.focus();
    }
}

function closeLogin(e) {
    e.preventDefault();
    popup.classList.remove('modal-content-show');
    overlay.classList.remove('modal-overlay-show');
    mapPopup.classList.remove('modal-content-map-show');
    popup.classList.remove('modal-error');
}

function loginForm(e) {
    if (!login.value || !passWord.value) {
        e.preventDefault();
        popup.classList.add('modal-error');
    } else {
        localStorage.setItem('login', login.value);
    }
}

function escapeClose(e) {
    if (e.keyCode === 27) {
        if (popup.classList.contains('modal-content-show')) {
            popup.classList.remove('modal-content-show');
            popup.classList.remove('modal-error');
            overlay.classList.remove('modal-overlay-show');
        }
        if (mapPopup.classList.contains('modal-content-map-show')) {
            mapPopup.classList.remove('modal-content-map-show');
            overlay.classList.remove('modal-overlay-show');
        }
    }
}

function showMap(e) {
    e.preventDefault();
    mapPopup.classList.add('modal-content-map-show');
    overlay.classList.add('modal-overlay-show');
}

function closeMapPopup(e) {
    e.preventDefault();
    mapPopup.classList.remove('modal-content-map-show');
    overlay.classList.remove('modal-overlay-show');
}

link.addEventListener('click', openLogin);
close.addEventListener('click', closeLogin);
overlay.addEventListener('click', closeLogin);
form.addEventListener('submit', loginForm);
window.addEventListener('keydown', escapeClose);

mapLink.addEventListener('click', showMap);
closeMap.addEventListener('click', closeMapPopup);