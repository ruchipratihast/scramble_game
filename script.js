arr = ["india", "korea", "france", "china", "spain", "italy", "turkey", "germany", "malaysia", "mexico", "austria", "thailand", "canada", "singapore", "switzerland", "africa", "indonesia", "belgium", "japan", "australia", "brazil", "argentina","aljeria","libya","portugal","tunisia","nizer","nizeria","mauritania","mauritius","cambodia","phillipines","isreal","cyprus","jorden","uk","kuwait","usa","kazakistan","afganistan","ucraine"];

const word = document.querySelector(".word");
const inputarea = document.querySelector("input");
const msg = document.querySelector("h2");
const btn = document.querySelector(".btn");
const bgclr = document.querySelector("section");

let finalScrambleWord = "";
let randomWord = "";

function getsScrambleWord(array) {
    // Shuffle the array of characters.
    array.sort(() => Math.random() - 0.5);
    return array;
}

function getRandomWord(stringArray) {
    // Get a random word from the array.
    const randomIndex = Math.floor(Math.random() * stringArray.length);
    randomWord = stringArray[randomIndex];
    // Split the word into an array of characters.
    return getsScrambleWord(randomWord.split("")).join("");
}

finalScrambleWord = getRandomWord(arr);
word.innerHTML = finalScrambleWord.toUpperCase();

btn.addEventListener("click", function() {

    let tempword = inputarea.value;
    if (tempword.toLowerCase() === randomWord) {
        msg.innerHTML = `Awesome It's Correct ! 🥳`;
        msg.style.color = "#0be881";
        bgclr.style.backgroundColor = "#0be881";
        document.getElementById("imageid").src = "https://media.tenor.com/qg8K8VOmzJwAAAAi/party-popper-confetti.gif";
        document.getElementById("imageid").width = "300";
    }
    else {
        msg.innerHTML = `Oops It's not Correct, Plz Try Again ! 🥹`;
        document.getElementById("imageid").src = "https://media.tenor.com/FPzGMNfFGnYAAAAi/cute-cat.gif";
        // document.getElementById("imageid").width = "300";
    }
})



