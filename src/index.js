let s = 0;
let m = 0;
let s2 = 0;
let m2 = 0;
let temps1
let myTimeout2
let body = document.querySelector(".body")
let texte = document.querySelector(".texte")
let startbutton = document.getElementById("start")
let pausebutton = document.getElementById("pause")
let unposebutton = document.getElementById("unpose")
let resetbutton = document.getElementById("reset")
var audio = new Audio('son.mp3');
let tour = 0
let tableau = ["blue","red","green","gray","pink"] 
let img = document.querySelector(".img")

startbutton.addEventListener("click",start)
pausebutton.addEventListener("click",pausbutton)
unposebutton.addEventListener("click",reprendre)
resetbutton.addEventListener("click",reset)
function start(){
    temps1= setInterval(travaill, 1000);
    audio.play();
    startbutton.disabled = true
    unposebutton.disabled = true
}
function travaill(){
    if(s==60){
        s = 1
        m = m + 1 
    }
    else{
        s++
        texte.innerHTML = m +"m : " + s +"s";
    }
    if(m==25){
            myTimeout2 = setInterval(pause, 1000);
            clearTimeout(temps1);
            audio.play();
            m=0 
    }
}
function pause(){
    if(s2==60){
        s2 = 1
        m2 = m2 + 1 
    }
    else{
        s2++
        texte.innerHTML = m2 +"m : " + s2 +"s";
    }
    console.log(s2+ "s");
    if(m2 == 5){
        temps1 = setInterval(travaill, 1000);
        clearTimeout(myTimeout2);
        m2 = 0  
        audio.play();
    }
}

function pausbutton(){
    clearTimeout(temps1);
    clearTimeout(myTimeout2)
    unposebutton.disabled = false
    pausebutton.disabled = true
    img.src = "demon-slayer.jpg"
 }

function reprendre(){
    temps1= setInterval(travaill, 1000);
    startbutton.disabled = true
    unposebutton.disabled = true
    pausebutton.disabled = false
    img.src = "https://cdn.discordapp.com/attachments/917772347107340298/947861181102719067/demon-slayer.gif"
}

function reset(){
    s = 0;
    m = 0;
    s2 = 0;
    m2 = 0;
    texte.innerHTML =" 0 m : "+ "0 s";
    unposebutton.disabled = false
    pausebutton.disabled = true
    startbutton.disabled = false
    clearTimeout(myTimeout2);
    clearTimeout(temps1);
}



function fond(){
    body.style.backgroundColor = tableau[Math.floor(Math.random()* 4)]
}

let yTimeout2 = setInterval(fond, 3000);
