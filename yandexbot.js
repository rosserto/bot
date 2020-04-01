// ==UserScript==
// @name         New0104
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.yandex.ru/*
// @match        https://xn----7sbab5aqcbiddtdj1e1g.xn--p1ai/*
// @grant        none
// ==/UserScript==

let googleInput = document.getElementsByName('text')[0];
let yndx=document.getElementsByClassName("button__text")[1];
let searchWord = 'Гобой';
let i = 0;
let links = document.links;

if (yndx!=undefined){
    let timerId = setInterval(()=>{
         yandexInput.value+=searchWord[i];
        i++;
        if (i==searchWord.length) {
            clearInterval(timerId);
              yndx.click();}
    },500);
}
else if (location.hostname == "yandex.ru"){
    for (let i=0; i<links.length; i++){
        if (links[i].href.indexOf('xn----7sbab5aqcbiddtdj1e1g.xn--p1ai')!=-1){
            links[i].click();
            break;
        }
    }
}
else {
    setInterval(()=>{
        if (getRandom(0,100)<30) location.href = "yandex.ru/";
        let index = getRandom(0, links.length)
        links[index].click();
    },5000);
}

function getRandom(min, max){
    return Math.floor(Math.random()*(max-min)+min);
}
