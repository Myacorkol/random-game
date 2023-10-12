let currMoleTile;
let currMoleTileTwo;
let curPlantTile;
let score = 0;
let gameOver = false;
let gameStart;

//score
const gameScore = document.getElementById('score');
const endScreenScore = document.querySelector('.modal__score');
const prewiewImg = document.querySelector('.game__area-preview');
const cleanScores = document.querySelector('.clean-scores__btn');

//Audio
const getTheCoin = new Audio('./assets/mp3/get-coin.mp3');
const gameOverSong = new Audio('./assets/mp3/game-over.mp3');

//dificult lvl
const easyButton = document.getElementById('easy-btn');
const mediumButton = document.getElementById('medium-btn');
const hardButton = document.getElementById('hard-btn');
let time1 = 1000;
let time2 = 2000;

//let mole;
//let plant;

easyButton.addEventListener('click', function() {
    this.classList.add('red');
    if (mediumButton.classList.contains('red') || hardButton.classList.contains('red')) {
      mediumButton.classList.remove('red');
      hardButton.classList.remove('red');
      time1 = 1000;
      time2 = 2000;
    } else {
      time1 = 1000;
      time2 = 2000;
    }
});
mediumButton.addEventListener('click', function() {
  this.classList.add('red');
  if (easyButton.classList.contains('red') || hardButton.classList.contains('red')) {
    easyButton.classList.remove('red');
    hardButton.classList.remove('red');
    time1 = 800;
    time2 = 1700;
  } else {
    console.log('return');
    time1 = 800;
    time2 = 1700;
  }
});
hardButton.addEventListener('click', function() {
  this.classList.add('red');
  if (easyButton.classList.contains('red') || mediumButton.classList.contains('red')) {
    easyButton.classList.remove('red');
    mediumButton.classList.remove('red');
    time1 = 600;
    time2 = 1200;
  } else {
    time1 = 600;
    time2 = 1200;
  }
});


//clean scores
cleanScores.addEventListener('click', function () {
  const localStorage = window.localStorage;
  localStorage.clear();
  location.reload();
})


window.onload = function () {
//  setGame();
}
function setGame() {

  //game board in html
  if (gameStart) {
    return;
  }
  easyButton.classList.add('red');
  prewiewImg.classList.add('close');

  for (let i = 0; i < 9; i++) {
    //create 9 div
    let tile = document.createElement('div');
    tile.id = i.toString();
    tile.addEventListener('click', selectTile)
    document.getElementById('board').appendChild(tile);
  }
  setInterval(setMole, time1);
  //setInterval(test, 1000);
  setInterval(setPlant, time2);
  //setMole();

}
function getRandomTile () {
  //Math random (0-1) * 9
  let num = Math.floor(Math.random() * 9);
  return num.toString();
}

function setMole () {
  if (gameOver){
    return;
  }
  if (currMoleTile) {
    currMoleTile.innerHTML = '';
  }
  let mole = document.createElement('img');
  mole.src = './assets/img/money-catch.png';
  let num = getRandomTile();
  if (curPlantTile && curPlantTile.id === num) {
    return;
  }
  currMoleTile = document.getElementById(num);
  currMoleTile.appendChild(mole);
}


function setPlant () {
  if (gameOver){
    return;
  }
  if (curPlantTile) {
    curPlantTile.innerHTML = "";
  }
  let plant = document.createElement('img');
  plant.src = './assets/img/money-back.png';

  let num = getRandomTile();
  if (currMoleTile && currMoleTile.id === num) {
    return;
  }
  curPlantTile = document.getElementById(num);
  curPlantTile.appendChild(plant);
}

function selectTile () {
  if (gameOver){
    return;
  }
  if (this === currMoleTile) {
    score += 10;
    gameScore.innerText = score.toString();
     // uodate score
  }
  else if (this === curPlantTile) {
    gameScore.innerText = 'game over: ' + score.toString();
    audio.pause();
    buttonSong.classList.add('play');
    gameOver = true;
    buttonSong.innerText = 'restart';
    gameOverSong.play();
    saveResults();
    modal.classList.remove('close');
    endScreenScore.textContent = 'your salary: ' + score.toString() + '$';
  }
}

//
const buttonSong = document.querySelector('.info__play');
const audio = new Audio('./assets/mp3/money-song.mp3');


buttonSong.addEventListener('click', function(){
  if (gameOver) {
    location.reload();
  }
  setGame();
  const isPlaying = buttonSong.classList.contains('play');
  gameStart = true;
  if (isPlaying) {
    audio.play();
    buttonSong.classList.remove('play');
    buttonSong.innerText = 'stop the song';
  }else {
    audio.pause();
    buttonSong.classList.add('play');
    buttonSong.innerText = 'play';
  }
})


// Напишите функцию для сохранения результатов в local Storage.
function saveResults() {
  const scores = JSON.parse(localStorage.getItem("scores"));
  if (!scores) {
    let array = [];
    array = ['first game: ' + score.toString()];
    localStorage.setItem("scores", JSON.stringify(array));
  }
  if (scores) {
    const count = scores.length;
    console.log(count);
    if (count === 1) {
      const newRecord = 'second game: ' + score.toString() + ' $';
      scores.push(newRecord);
      localStorage.setItem("scores", JSON.stringify(scores));
    }
    if (count === 2) {
      const newRecord = 'third game: ' + score.toString() + ' $';
      scores.push(newRecord);
      localStorage.setItem("scores", JSON.stringify(scores));
    }
    if (count === 3) {
      const newRecord = 'fourth game: ' + score.toString() + ' $';
      scores.push(newRecord);
      localStorage.setItem("scores", JSON.stringify(scores));
    }
    if (count === 4) {
      const newRecord = 'fifth game: ' + score.toString() + ' $';
      scores.push(newRecord);
      localStorage.setItem("scores", JSON.stringify(scores));
    }
    if (count === 5) {
      const newRecord = 'sixth game: ' + score.toString() + ' $';
      scores.push(newRecord);
      localStorage.setItem("scores", JSON.stringify(scores));
    }
    if (count === 6) {
      const newRecord = 'seventh game: ' + score.toString() + ' $';
      scores.push(newRecord);
      localStorage.setItem("scores", JSON.stringify(scores));
    }
    if (count === 7) {
      const newRecord = 'eighth game: ' + score.toString() + ' $';
      scores.push(newRecord);
      localStorage.setItem("scores", JSON.stringify(scores));
    }
    if (count === 8) {
      const newRecord = 'nineth game: ' + score.toString() + ' $';
      scores.push(newRecord);
      localStorage.setItem("scores", JSON.stringify(scores));
    }
    if (count === 9) {
      const newRecord = 'ten game: ' + score.toString() + ' $';
      scores.push(newRecord);
      localStorage.setItem("scores", JSON.stringify(scores));
    }
  }

}

//modal

const modal = document.getElementById("modal");
const modalClose = document.querySelector('.modal__close');

modal.addEventListener("wheel", (event) => {
  event.preventDefault();
});
modal.addEventListener('click', function () {
  modal.classList.add('close');
})
modal.querySelector('.modal__wrapper').addEventListener('click', function (event) {
  event.stopPropagation();
})
modalClose.addEventListener('click', function () {
  modal.classList.add('close');
  if (gameOver) {
    location.reload();
  }
  setGame();
  const isPlaying = buttonSong.classList.contains('play');
  gameStart = true;
  if (isPlaying) {
    audio.play();
    buttonSong.classList.remove('play');
    buttonSong.innerText = 'stop the song';
  }else {
    audio.pause();
    buttonSong.classList.add('play');
    buttonSong.innerText = 'play';
  }
})

//game score in to html page
const scoreList = document.querySelectorAll('.scores__item');
const scores = JSON.parse(localStorage.getItem("scores"));
console.log(scoreList);
console.log(scores);
// Пройти по всем элементам <li>.
let i = -1;
for (const li of scoreList) {
  i ++;
  console.log(li);
  li.textContent = scores[i];
}
