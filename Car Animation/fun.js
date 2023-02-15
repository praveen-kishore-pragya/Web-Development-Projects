var audio = document.createElement("audio");

audio.src="./sounds/sound.mp3";
console.log("Praveen")
// audio.setAttribute('src','./sounds/sound.mp3');
audio.autoplay=true;
audio.loop=true;
window.onload=function(){
    audio.play();
}
