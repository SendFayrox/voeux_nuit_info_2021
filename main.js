let index=0;
let imgSrc="";

function loadNewImg(i){
    index=i;
    imgSrc = "img/phase_"+i+".png";
    document.getElementById('imgSite').src = imgSrc+"?random=" + new Date().getTime();
    return imgSrc;
}
loadNewImg(0);