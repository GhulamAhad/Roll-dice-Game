//this are organl scoure box

const scoure1 = document.querySelector(".orignal_scoure_1");
const scoure2 = document.querySelector(".orignal_scoure_2");
//this are buttons

const rolingBtn = document.querySelector(".rolling_button");
const holdBtn = document.querySelector(".hold_button");
const playAgainBtn = document.querySelector(".playAgain");
//this are places where we show our changing values

const diceRol = document.querySelector(".dice_roll_place");
const randomScoureBox = document.querySelector(".scoure_1a");
const randomScoureBox2 = document.querySelector(".p2scoure_1b");
//this are only use for color when the player change

const hol1 = document.querySelector(".first_player_1_contaner");
const hol2 = document.querySelector(".secound_player_2_contaner");
//this are variable that we use to store our scoure

let currentScoureP1 = 0;//it is only use the scoure is stored in random scour box

let activePlayer = 0;//in this we store our move

const arrSc = [0, 0];//this array is use to store winning scoure and orignal scoure
let playing=true;

scoure1.textContent = 0;
scoure2.textContent = 0;

diceRol.classList.add("hidden");//to hide our dies

//the porpose of this function is when the move is changed than also change the color 
const colorChanger = function () {
  hol1.classList.toggle("bgc");
  hol2.classList.toggle("bgc");
};
//the porpose of this function is reset all the game

const allReset = function () {
  activePlayer = 0;
  currentScoureP1 = 0;
  arrSc[0] = 0;
  arrSc[1] = 0;
  scoure1.innerText = 0;
  scoure2.innerText = 0;
  randomScoureBox.innerText = 0;
  randomScoureBox2.innerText = 0;
  diceRol.classList.add("hidden");
  //problem background color is not reseted
};
//this function use for  purpose catch turn 

const newturn = function (catchTurn) {
  currentScoureP1 = 0;
  randomScoureBox.innerText = 0;
  randomScoureBox2.innerText = 0;
  document.getElementById(`p--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  colorChanger();
};
//this function  is use add and store the value in currentScoure box

const addFuncP1 = function (x) {
  if (x !== 1) {
    currentScoureP1 += x;
    document.getElementById(`p--${activePlayer}`).textContent = currentScoureP1;
  } else {
    newturn();
  }
};
//use to manipulate and show the scoure and add the scoure in orignlScoure
const orignalScour = function (getOrignal) {
  if (activePlayer === 0) {
    arrSc[0] = getOrignal + arrSc[0];
    scoure1.innerText = arrSc[0];
    if (arrSc[0] >= 100) {
      scoure1.innerText = "won";
      newturn();
    }
  } else {
    arrSc[1] = getOrignal + arrSc[1];
    scoure2.innerText = arrSc[1];
    if (arrSc[1] >= 100) {
      scoure2.innerText = "won";
      newturn();
    }
  }
};

rolingBtn.addEventListener("click", function () {
  const dice1 = Number(Math.trunc(Math.random() * 6) + 1);
  diceRol.classList.remove("hidden");
  diceRol.src = `assets/dice-${dice1}.png.png`;
  addFuncP1(dice1);
  console.log(typeof dice1);
});

holdBtn.addEventListener("click", function () {
  orignalScour(currentScoureP1);
  newturn(activePlayer);
});

playAgainBtn.addEventListener("click", function () {
  allReset();
});
