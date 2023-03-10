console.log("Welcome to Spotify")

let audioElement = new Audio('./songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let songPlayRange = document.getElementById('songPlayRange');
let gif = document.getElementById("gif");
let songItems = Array.from(document.getElementsByClassName("songItem"));
let songIndex=2;


let songs = [
    {songName: "Warriyo - Mortals", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Cielo - Huma-Huma", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "DEAF KEV - Invincible", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Different Heaven & EH!DE", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Janji-Heroes-Tonight-feat-Johnning", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"}
]
console.log(songs.length)

//setting the cover-image and song name displayed through files in the folder-> covers and songs Array.
songItems.forEach((element,i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});


//checking each songList which has been clicked to play
Array.from(document.getElementsByTagName("svg")).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        console.log(e.target.id);
        songIndex = parseInt(e.target.id);
        
        //change song name near seek bar
        document.getElementById("masterSongName").innerText = songs[songIndex-1].songName;

        if(audioElement.paused || audioElement.currentTime<=0)
        {
            audioElement.src=`./songs/${songIndex}.mp3`;
            audioElement.play();
            gif.style.opacity = "1";
        }
        else
        {
            audioElement.pause();
            gif.style.opacity = "0";
        }
    })
})



masterPlay.addEventListener('click',(e)=>{
    // console.log(e.target.id);
    if(audioElement.paused || audioElement.currentTime<=0)
    {
        audioElement.play();
        gif.style.opacity = "1";
        // masterPlay.classList.remove("bi bi-play-circle");
        // masterPlay.classList.add("bi bi-pause-circle");   
    }
    else{
        audioElement.pause();
        gif.style.opacity = "0";
    }
})


audioElement.addEventListener('timeupdate',()=>{
    progress = parseInt(audioElement.currentTime/audioElement.duration *100);
    // progress was in percentage, so parseInt was used to convert it into integer value
    //Update seekbar
    // console.log(progress);
    songPlayRange.value = progress;
    
})

songPlayRange.addEventListener('change',()=>{
    audioElement.currentTime = (songPlayRange.value*audioElement.duration)/100;
    // currentTime is calculated from the same formula, which was used for calculating progress,
    // since, here on clicking the seekbar, the current value of progress becomes the currentTime
})



//still not working -->previous and next
document.getElementById("previous").addEventListener('click',()=>{
    audioElement.pause();
    gif.style.opacity = "0";
    // console.log(songIndex);
    if(parseInt(songIndex)==1)
        songIndex=songs.length;
    else
        songIndex=songIndex-1;

    audioElement.src=`./songs/${songIndex}.mp3`;
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity = "1";
})

document.getElementById("next").addEventListener('click',()=>{
    audioElement.pause();
    gif.style.opacity = "0";
    // console.log(songIndex);
    if(parseInt(songIndex)==songs.length)
    {
        songIndex=1;
    }
        // songIndex=(songs.length+songIndex)%songs.length;
    else
    {
        songIndex=songIndex+1;
    }

    audioElement.src=`./songs/${songIndex}.mp3`;
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity = "1";
})


