

let songs = {

happy:[
{
name:"Perfect",
artist:"Ed Sheeran",
img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7fw5I_SIqWv7dGtljqJlqU26YwLrrn0J4eA&s",
audio:"music/perfect.mp3"
},
{
name:"Cheap Thrills",
artist:"Sia",
img:"https://c.saavncdn.com/906/Cheap-Thrills-English-2020-20221121210359-500x500.jpg",
audio:"music/cheapthrills.mp3"
},
{ name: "Jiya Re",
 artist: " Neeti Mohan",
 img:"https://i.ytimg.com/vi/avLW3oFwsgI/maxresdefault.jpg",
 audio:"music/jiyare.mp3"
},
{ name: "Tere liye",
artist: "Atif aslam, sherya Ghoshal ",
img:"https://i.ytimg.com/vi/IoE-XAFUoOY/sddefault.jpg",
audio:"music/tereliye.mp3"
}

],

sad:[
{
name:"Let me Down Slowly",
artist:"Alec Benjamin",
img:"https://i.scdn.co/image/ab67616d0000b273f5542344af0e3db04008f069",
audio:"music/letmedown.mp3"
},
{name :"Broken Angel",
 artist:"Arash",
 img:"https://wallpapercave.com/wp/wp6700588.jpg",
 audio:"music/broken.mp3"
},
{name :"Moral Of The Story",
 artist:"Ashe",
img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpHgjMEfuA00-UcU3AG5dJuUS52axSfa3Qyg&s",
audio:"music/moral.mp3"
},
{name :"Jeen ta Pena ",
 artist:"satbir aujla",
 img :"https://i.ytimg.com/vi/RjI8WEjUgQg/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CYAC0AWKAgwIABABGBQgJyh_MA8=&rs=AOn4CLCEEBb46XTNxnEQfW2dZMenX6mQng",
 audio:"music/Jeena Ta Pena.mp3"
}


],

motivated:[
{
name:"Zidi Dil",
artist:"Nikhita Gandhi",
img:"https://c.saavncdn.com/979/Ziddi-Dil-Radio-Edit-Hindi-2023-20231012115935-500x500.jpg",
audio:"music/ZiddiDil.mp3"
},
{
name:"Unstoppable",
artist:"Sia",
img:"https://i.ytimg.com/vi/cxjvTXo9WWM/maxresdefault.jpg",
audio:"music/unstoppable.mp3"
},
{
name:"Challa (Mai Lad Jana)",
artist:"Amit Trivedi",
img:"https://i.ytimg.com/vi/FgWzcoUL3vM/maxresdefault.jpg",
audio:"music/challa.mp3"
},
 {
  name:"KAR HAR MAIDAAN FATEH",
  artist:" Rajkumar Hirani",
 img :"https://i.ytimg.com/vi/9iIX4PBplAY/maxresdefault.jpg",
 audio:"music/fateh.mp3"
 }
],

chill:[
{
name:"Despacito",
artist:"Luis Fonsi",
img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZHTSaZpWJFpUoWhTfuzK6TxPJSlTpaAfBYQ&s",
audio:"music/despacito.mp3"
},
 {name :"Cheri Cheri Lady",
 artist :"Modern Talking",
 img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVV0SIVMXyjTpUiM39U9SkYJbP5EMpJx9kmg&s",
 audio:"music/chery.mp3"
},
{name :"Waka Waka",
     artist :"Shakira",
     img:"https://www.billboard.com/wp-content/uploads/media/shakira-waka-waka-vid-2010-billboard-650.jpg?w=650",
     audio:"music/waka waka.mp3"
},
{
name :"Shape of You",
 artist :"Ed Sheeran",
 img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXQcn2K0l48PaFGsF1brIhAgP27N95eUNF6Q&s",
 audio:"music/shape of you"
}

]

};


let container = document.getElementById("songsContainer");
let audio = document.getElementById("audioPlayer");
let nowPlaying = document.getElementById("nowPlaying");


function showMood(mood){

container.innerHTML="";

songs[mood].forEach(song=>{

let card = document.createElement("div");
card.className="card";

card.onclick=()=>{
playSong(song.audio,song.name,song.artist);
};

card.innerHTML=`

<img src="${song.img}" class="cover">

<h3>${song.name}</h3>

<p>${song.artist}</p>

`;

container.appendChild(card);

});

}


function playSong(src,name,artist){

audio.src=src;
audio.play();

nowPlaying.innerText="Now Playing: "+name+" - "+artist;

}


function randomSong(){

let moods = Object.keys(songs);

let randomMood = moods[Math.floor(Math.random()*moods.length)];

let randomSong = songs[randomMood][Math.floor(Math.random()*songs[randomMood].length)];

playSong(randomSong.audio,randomSong.name,randomSong.artist);

}


document.getElementById("search").addEventListener("input",function(){

let value = this.value.toLowerCase();

let cards = document.querySelectorAll(".card");

cards.forEach(card=>{

let title = card.innerText.toLowerCase();

card.style.display = title.includes(value) ? "block":"none";

});

});


