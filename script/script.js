
// Countdown bis zum Weltbananentag -> 20. Mai 2027 in xxT xxH xxMin xxSek

const weltbananentag = new Date("2027-05-20T00:00:00").getTime()
console.log(weltbananentag)


// HTML Referenz zum Countdown auf Home-Seite
const countdownhome = document.getElementById("countdownhome")


const countdown = setInterval(() => {
    const now = Date.now()
    const differenz = weltbananentag - now;

    console.log(differenz)

    const tage = Math.floor(differenz / (1000 * 60 * 60 * 24));
    const stunden = Math.floor((differenz / (1000 * 60 * 60)) % 24);
    const minuten = Math.floor((differenz / (1000 * 60)) % 60);
    const sekunden = Math.floor((differenz / 1000) % 60);

    const countdowntime = tage + "T " + stunden + "H " + minuten + "Min " + sekunden +"Sek"
    countdownhome.textContent = countdowntime
    console.log(countdowntime)
},1000);





// Aendert den Button beim blicken auf der Home Seite und startet / pausiert die Musik
var toggle = true
const track = new Audio("../audio/bananforest.mp3");
function changeimg() {
if (toggle === true){
    document.getElementById("playbutton").src = "img/icons/button-stop.png"
    track.play()
}else{
    document.getElementById("playbutton").src = "img/icons/button-play.png"
    track.pause()
    track.currentTime = 0;
}
toggle = !toggle
}