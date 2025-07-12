let input=document.querySelector("#input");
let button=document.querySelector("button");
let qrBox=document.querySelector("#qrBox");
let qrImg=document.querySelector("#qrImg");
let container=document.querySelector(".container")


function generateQr(){
   qrImg.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+ input.value;
}

button.addEventListener("click",()=>{
generateQr();
button.style.marginTop="0vh";
button.style.display="hidden";
container.style.height="70vh";


})