randomNumber1 = Math.floor(Math.random() * 6) + 1
randomNumber2 = Math.floor(Math.random() * 6) + 1

document.querySelector(".img1").src = `images/dice${randomNumber1}.png`
// document.querySelector(".img1").setAttribute("src", `images/dice${randomNumber1}.png`);

document.querySelector(".img2").src = `images/dice${randomNumber2}.png`

let heading = document.querySelector("h1")

if (randomNumber1 > randomNumber2) heading.textContent = "🚩Player1 Wins"
else if (randomNumber2 > randomNumber1) heading.textContent = "Player2 Wins🚩"
else heading.textContent = "Draw!"