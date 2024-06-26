import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';

import jsonData from '../public/data/DATA.json';


document.addEventListener('DOMContentLoaded', () => {
    let dataRestoran = jsonData['restaurants']
    let dataList = '';
    dataRestoran.forEach(function(data) {
        dataList +=`
        <div class="daftar-item">
            <img class="picture" src="${data['pictureId']}" alt="${data['name']}" title="${data['name']}">
            <div class="city"> ${data['city']} </div>
            <div class="content-item"> 
            <p class="rating">
                Rating : 
                <a class="rating-nilai"> ${data['rating']}</a>
            </p>
            <h2 class="judul-item"><a>${data['name']}</a></h2>
            <div class="item-desc">${data['description'].slice(0, 100)}...</div>
            </div>
            </div>
            `;
    });
    document.querySelector('#daftar-resto').innerHTML = dataList;

    const hamburger = document.querySelector(".hamburger");
    const menuNav = document.querySelector(".nav-menu");
    const linkNav = document.querySelectorAll(".link-nav");
    const main = document.querySelector("main");
    const jumbotron = document.querySelector(".jumbotron");

    hamburger.addEventListener("click", menuMobile);
    linkNav.forEach(m => m.addEventListener("click", menuClose));
    main.addEventListener("click", menuClose);
    jumbotron.addEventListener("click", menuClose);

    function menuMobile() {
        hamburger.classList.toggle("active");
        menuNav.classList.toggle("active");
    }

    function menuClose() {
        hamburger.classList.remove("active");
        menuNav.classList.remove("active");
    }
})