let index=0;
let imgSrc="";
var audio = new Audio();


var text_to_change = new Map();
text_to_change.set("firstname", "à toi");
text_to_change.set("entier", "XXX");
window.addEventListener('load', function () {
    
    fadeText();
});

// Bind the click event to the body - any static parent container will do
$('#imgSite').on('click', function(e) {

    // Fire the callback if the click was in the top 100px by 100px
    // if ((e.pageY <= 1050 && e.pageY >= 1000 ) && index==4) {
    if(index==16 && 
        e.pageX-this.offsetLeft-1445>= 0 && e.pageX- this.offsetLeft-1445<=75 && 
        e.pageY-this.offsetTop-1000>=0 && e.pageY-this.offsetTop-1000<=50 ){
        loadNewImg(index+2);
         
    }
    
});



function fadeText(){

    // setTimeout(() => { $("#0").fadeIn(2000); }, 0);
    // setTimeout(() => { $("#0").fadeOut(1000); }, 7000);
    // setTimeout(() => { $("#1").fadeIn(2000); }, 8000);
    // setTimeout(() => { $("#1").fadeOut(1000); }, 13000);
    // setTimeout(() => { $("#2").fadeIn(2000); }, 14000);
    // setTimeout(() => { $("#2").fadeOut(1000); }, 21000);
    // loadNewImg(0);
    // setTimeout(() => { $("#imgSite").fadeIn(1000); }, 22000);

    loadNewImg(0);
    setTimeout(() => { $("#imgSite").fadeIn(1000); }, 1000);
    setTimeout(() => { $("#imgText").fadeIn(1000); }, 1000);
    
}

function loadNewImg(i){
    console.log(i);
    if(i==17){
    }else{

        

        index=i;
        imgSrc = "img/phase_"+i+".png";
        imgSrcText = "img/text_"+i+".png";
        document.getElementById('imgSite').src = imgSrc+"?random=" + new Date().getTime();
        document.getElementById('imgText').src = imgSrcText+"?random=" + new Date().getTime();
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
    
}

