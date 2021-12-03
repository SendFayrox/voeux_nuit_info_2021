let index=0;
let imgSrc="";
var audio = new Audio();

window.addEventListener('load', function () {
    
    fadeText();
});

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}

function fadeText(){
    // var time = 0;
    // var test=""
    // for(i=0; i<3; i++){
    //     test = "#"+i;
    //     console.log(test);
    //     setTimeout(() => { $(test).fadeIn(2000); }, time);
    //     time=time+7000;
    //     setTimeout(() => { $(test).fadeOut(1000); }, time);
    //     time=time+7000;
    // }

    setTimeout(() => { $("#0").fadeIn(2000); }, 0);
    setTimeout(() => { $("#0").fadeOut(1000); }, 7000);
    setTimeout(() => { $("#1").fadeIn(2000); }, 8000);
    setTimeout(() => { $("#1").fadeOut(1000); }, 13000);
    setTimeout(() => { $("#2").fadeIn(2000); }, 14000);
    setTimeout(() => { $("#2").fadeOut(1000); }, 21000);
    loadNewImg(0);
    setTimeout(() => { $("#imgSite").fadeIn(1000); }, 22000);
    
    
    
}

function loadNewImg(i){
    index=i;
    imgSrc = "img/phase_"+i+".png";
    document.getElementById('imgSite').src = imgSrc+"?random=" + new Date().getTime();
    var sOundPath = "son/sound_"+i+".mp3";
    if (audio.paused) {
        audio = new Audio(sOundPath);
        audio.play();
     } else {
        audio.pause();
        audio = new Audio(sOundPath);
        audio.play();
     }
}

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }
