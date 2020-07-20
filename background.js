const body = document.querySelector("body");

const rangeNumber = 5;

function randomNumber(){
    const number = Math.floor(Math.random() * rangeNumber);
    return number;
}

function backgroundNumber(ImgNumber){
    const image = new Image;
    body.prepend("image");
    image.classList.add("image");
    image.src = (`/image/${ImgNumber+1}.jpg`);
}

function init(){
   const printNumber = randomNumber();
   backgroundNumber(printNumber);
}

init();
