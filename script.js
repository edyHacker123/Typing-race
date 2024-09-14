const startBtn = document.querySelector(".start-btn");
const startLayout = document.querySelector(".start-layout");
const car = document.querySelector(".car");
const gameText = document.querySelector(".text-wrapper");
const timer = document.querySelector(".timer");
const textArea = document.querySelector("textarea");
let x = true;
let textSplitArray;
let lettersArray;
let k = 0;
let completeText = "";

const textArray = [
  "Advantage old had otherwise sincerity dependent additions. It in adapted natural hastily is justice. Six draw you him full not mean evil. Prepare garrets it expense windows shewing do an. She projection advantages resolution son indulgence. Part sure on no long life am at ever. In songs above he as drawn to. Gay was outlived peculiar rendered led six.",
  "In show dull give need so held. One order all scale sense her gay style wrote. Incommode our not one ourselves residence. Shall there whose those stand she end. So unaffected partiality indulgence dispatched to of celebrated remarkably. Unfeeling are had allowance own perceived abilities.",
  "Up branch to easily missed by do. Admiration considered acceptance too led one melancholy expression. Are will took form the nor true. Winding enjoyed minuter her letters evident use eat colonel. He attacks observe mr cottage inquiry am examine gravity. Are dear but near left was. Year kept on over so as this of. She steepest doubtful betrayed formerly him. Active one called uneasy our seeing see cousin tastes its. Ye am it formed indeed agreed relied piqued.",
  "Far concluded not his something extremity. Want four we face an he gate. On he of played he ladies answer little though nature. Blessing oh do pleasure as so formerly. Took four spot soon led size you. Outlived it received he material. Him yourself joy moderate off repeated laughter outweigh screened.",
  "Looking started he up perhaps against. How remainder all additions get elsewhere resources. One missed shy wishes supply design answer formed. Prevent on present hastily passage an subject in be. Be happiness arranging so newspaper defective affection ye. Families blessing he in to no daughter.",
];

startBtn.addEventListener("click", () => {
  startLayout.style.display = "none";
  textSplitArray = textArray[Math.floor(Math.random() * 5)].split("");

  for (let i = 0; i < textSplitArray.length; i++) {
    const span = document.createElement("span");
    span.innerHTML = textSplitArray[i];
    gameText.appendChild(span);
  }
});

textArea.addEventListener("keydown", (event) => {
  if (x === true) {
    lettersArray = document.querySelectorAll("span");
    x = false;
    for (let i = 0; i <= 60; i++) {
      setTimeout(() => {
        timer.innerHTML = i;
      }, 1000 * i);
    }
  }

  if (event.key === textSplitArray[k]) {
    lettersArray[k].style.color = "lightgreen";
    completeText = completeText + event.key;
    k++;
  }

  if (
    event.key === "Backspace" &&
    completeText[k - 1] === textSplitArray[k - 1]
  ) {
    lettersArray[k - 1].style.color = "black";
    k--;
  }
  // if (
  //   event.key === "Backspace" &&
  //   completeText[k - 2] === textSplitArray[k - 2]
  // ) {
  //
  //
  // }

  // console.log(k);
});

// text = "mere";
//1) Cand introduc o litera egala cu cea din array atunci vreau sa colorez litera.
//2) Cand stergem litera span ul sa isi schimbe culoarea la cea initiala.
//3) Sa verificam ca atunci cand introducem litere care nu sunt corecte sa nu se intample nimic
