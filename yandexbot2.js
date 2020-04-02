// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://yandex.ru/*
// @match        https://xn----7sbab5aqcbiddtdj1e1g.xn--p1ai/*
// @grant        none
// ==/UserScript==

let yandexInput = document.getElementsByName('text')[0];
let ytn = document.getElementsByClassName("button_theme_websearch")[0];
let searchWords = ['Гобой','Кларнет','Саксофон','Флейта','Валторна','Фагот'];
let searchWord = searchWords[getRandom(0,searchWords.length)];
let i = 0;
let links = document.links;

if (ytn!=undefined){
   let timerId = setInterval(()=>{
       yandexInput.value += searchWord[i];
        i++;
        if (i==searchWord.length) {
           clearInterval(timerId);
            ytn.click();}
    },500);
}
else if (location.hostname == "yandex.ru"){
    let flag = true;
    for (let i=0; i<links.length; i++){
        if (links[i].href.indexOf('xn----7sbab5aqcbiddtdj1e1g.xn--p1ai')!=-1){
            flag = false;
              
            links[i].click();
            break;
        }
    }
    if(flag){
       setTimeout(()=>{
        if (document.querySelector('span[aria-label="Текущая Страница 7"]').innerText<7){
        document.querySelector('a[aria-label="Следующая страница"]').click();
        }
        else{
            location.href = "https://yandex.ru/";
        }
    },2000);
    }
}
    else{
    setInterval(()=>{
  if (getRandom(0,100)<30) location.href = "https://yandex.ru/";
     let index = getRandom(0, links.length)
        if (links[index].hostname != 'https://xn----7sbab5aqcbiddtdj1e1g.xn--p1ai'){
        location.href="https://yandex.ru";
       }
       links[index].click();},1000);
}

function getRandom(min, max){
    return Math.floor(Math.random()*(max-min)+min);
}
