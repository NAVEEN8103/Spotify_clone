console.log("Welcome to Spotify");
//  Initialize the variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let masterSongName = document.getElementById('masterSongName');

let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));


let songs = [
    {songName: "Music 1", filePath:"song/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Music 2", filePath: "song/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "Music 3", filePath: "song/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Music 4", filePath: "song/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Music 5", filePath: "song/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Music 6", filePath: "song/6.mp3", coverPath: "covers/6.jpg"},
    {songName: "Music 7", filePath: "song/7.mp3", coverPath: "covers/7.jpg"},
    {songName: "Music 8", filePath: "song/8.mp3", coverPath: "covers/8.jpg"},
    {songName: "Music 9", filePath: "song/9.mp3", coverPath: "covers/9.jpg"},
    {songName: "Music 10", filePath: "song/10.mp3", coverPath: "covers/10.jpg"}
]

songItems.forEach((element ,i) =>{
    console.log(element , i);
    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerHTML = songs[i].songName;
})

// audioElement.play();
// Handle playk/pause click....
masterPlay.addEventListener('click' , ()=> {
    if (audioElement.paused  || audioElement.currentTime<= 0) {
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity=1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
})

// Listen to Events

audioElement.addEventListener('timeupdate', () =>{
    // update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration) *100);
    // console.log(progress);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime  = myProgressBar.value * audioElement.duration/100; 
})


const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    });
}


Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = 'songs/' + (songIndex +1) + '.mp3';
        masterSongName.innerHTML = songs[songIndex].songName;
        audioElement.currentTime  = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-paused-circle');
    } )
})

document.getElementById('next').addEventListener('click' , () =>{
    if(songIndex >=9){
        songIndex =0;
    }
    else{

        songIndex +=1;
    }
    audioElement.src = 'songs/' + (songIndex + 1) + '.mp3';
    masterSongName.innerHTML = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-paused-circle');


}
)

document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <0) {
        songIndex = 0;
    }
    else {

        songIndex -= 1;
    }
    audioElement.src = 'songs/' + (songIndex + 1) + '.mp3';
    masterSongName.innerHTML = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-paused-circle');


}
)