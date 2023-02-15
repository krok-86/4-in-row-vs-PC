const board = document.getElementById("board");
let isEnd;
arrCheck = [
  0, 1, 2, 7, 8, 9, 14, 15, 16, 21, 22, 23, 28, 29, 30, 35, 36, 37, 42, 43, 44,
];
const newGame = document.getElementById("restart");

const prepareBoard = () => {
  let red = localStorage.getItem("continueRed");
  let green = localStorage.getItem("continueGreen");
  let parseRed = JSON.parse(red) || [];
  let parseGreen = JSON.parse(green) || [];

  for (let i = 0; i < 49; i++) {
    const tile = document.createElement("div");
    tile.classList.add("tile");
    tile.id = i;
    if (parseRed.indexOf(i) !== -1) {
      tile.classList.add('tileRed')
    }
    if (parseGreen.indexOf(i) !== -1) {
      tile.classList.add('tileGreen')
    }
    board.appendChild(tile);
  }

  const clickListener = (event) => {
    if (event.target.classList.contains('tile')) {
      touchMous(event.target);
      if (isEnd) {
        document.removeEventListener("click", clickListener);
      }
    }
  };
  document.addEventListener("click", clickListener);
}

prepareBoard();

function clickNewGame() {
  localStorage.removeItem("continueRed");
  localStorage.removeItem("continueGreen");

  for (let i = 0; i < 49; i++) {
    const tile = document.getElementById(i);
    tile.classList.remove('tileRed');
    tile.classList.remove('tileGreen');
  }

  const win = document.getElementById('winArea')
  win?.remove()
  isEnd = false;
}

newGame.onclick = clickNewGame;

function touchMous(tile) {
  moveDown(tile, "tileRed");
  lernPc(tile.id);
  checkForWinRed();
  if (!isEnd) {
    checkForWinGreen();
  }
}

function lernPc(ball) {
  const redElems = Array.from(document.getElementsByClassName("tileRed"));
  const arrRed = redElems.map((i) => +i.id);
  const greenElems = Array.from(document.getElementsByClassName("tileGreen"));
  const arrGreen = greenElems.map((i) => +i.id);

  for (let i = 48; i >= 0; i--) {
    if (
      arrGreen.indexOf(i) !== -1 &&
      arrGreen.indexOf(i - 1) !== -1 &&
      arrGreen.indexOf(i - 2) !== -1 &&
      arrGreen.indexOf(i - 3) == -1 &&
      arrRed.indexOf(i - 3) == -1
    ) {
      stepIf(i - 3);
      break;
    }
    if (
      arrRed.indexOf(i) !== -1 &&
      arrRed.indexOf(i - 1) !== -1 &&
      arrRed.indexOf(i - 2) !== -1 &&
      arrRed.indexOf(i - 3) == -1 &&
      arrGreen.indexOf(i - 3) == -1
    ) {
      stepIf(i - 3);
      break;
    }
    if (
      arrGreen.indexOf(i) !== -1 &&
      arrGreen.indexOf(i - 8) !== -1 &&
      arrGreen.indexOf(i - 16) !== -1 &&
      arrGreen.indexOf(i - 24) == -1 &&
      arrRed.indexOf(i - 24) == -1
    ) {
      stepIf(i - 24);
      break;
    }
    if (
      arrGreen.indexOf(i) !== -1 &&
      arrGreen.indexOf(i - 8) !== -1 &&
      arrGreen.indexOf(i - 16) !== -1 &&
      arrGreen.indexOf(i + 8) == -1 &&
      arrRed.indexOf(i + 8) == -1
    ) {
      stepIf(i + 8);
      break;
    }
    if (
      arrRed.indexOf(i) !== -1 &&
      arrRed.indexOf(i - 8) !== -1 &&
      arrRed.indexOf(i - 16) !== -1 &&
      arrRed.indexOf(i - 24) == -1 &&
      arrGreen.indexOf(i - 24) == -1
    ) {
      stepIf(i - 24);
      break;
    }
    if (
      arrRed.indexOf(i) !== -1 &&
      arrRed.indexOf(i - 8) !== -1 &&
      arrRed.indexOf(i - 16) !== -1 &&
      arrRed.indexOf(i + 8) == -1 &&
      arrGreen.indexOf(i + 8) == -1
    ) {
      stepIf(i + 8);
      break;
    }
    if (
      arrRed.indexOf(i) !== -1 &&
      arrRed.indexOf(i + 6) !== -1 &&
      arrRed.indexOf(i + 12) !== -1 &&
      arrRed.indexOf(i - 6) == -1 &&
      arrGreen.indexOf(i - 6) == -1
    ) {
      stepIf(i - 6);
      break;
    }
    if (
      arrRed.indexOf(i) !== -1 &&
      arrRed.indexOf(i + 6) !== -1 &&
      arrRed.indexOf(i + 12) !== -1 &&
      arrRed.indexOf(i + 18) == -1 &&
      arrGreen.indexOf(i + 18) == -1
    ) {
      stepIf(i + 18);
      break;
    }
    if (
      arrGreen.indexOf(i) !== -1 &&
      arrGreen.indexOf(i + 6) !== -1 &&
      arrGreen.indexOf(i + 12) !== -1 &&
      arrGreen.indexOf(i - 6) == -1 &&
      arrRed.indexOf(i - 6) == -1
    ) {
      stepIf(i - 6);
      break;
    }
    if (
      arrGreen.indexOf(i) !== -1 &&
      arrGreen.indexOf(i + 6) !== -1 &&
      arrGreen.indexOf(i + 12) !== -1 &&
      arrGreen.indexOf(i + 18) == -1 &&
      arrRed.indexOf(i + 18) == -1
    ) {
      stepIf(i + 18);
      break;
    }
    if (
      arrRed.indexOf(i) !== -1 &&
      arrRed.indexOf(i - 7) !== -1 &&
      arrRed.indexOf(i - 14) !== -1 &&
      arrRed.indexOf(i + 7) == -1 &&
      arrGreen.indexOf(i + 7) == -1 &&
      arrRed.indexOf(i + 8) == -1 &&
      arrGreen.indexOf(i + 8) == -1
    ) {
      stepIf(getRandomInt());
      break;
    }
    if (
      arrRed.indexOf(i) !== -1 &&
      arrRed.indexOf(i - 7) !== -1 &&
      arrRed.indexOf(i - 14) !== -1 &&
      arrRed.indexOf(i + 7) == -1 &&
      arrGreen.indexOf(i + 7) == -1
    ) {
      stepIf(i + 7);
      break;
    }
    if (
      arrRed.indexOf(i) !== -1 &&
      arrRed.indexOf(i - 7) !== -1 &&
      arrRed.indexOf(i + 7) == -1 &&
      arrGreen.indexOf(i + 7) == -1
    ) {
      stepIf(i + 7);
      break;
    }
    if (
      arrRed.indexOf(i) !== -1 &&
      arrRed.indexOf(i - 7) !== -1 &&
      arrRed.indexOf(i - 14) == -1 &&
      arrGreen.indexOf(i - 14) == -1
    ) {
      stepIf(i - 14);
      break;
    }
    if (
      arrGreen.indexOf(i) !== -1 &&
      arrGreen.indexOf(i - 7) !== -1 &&
      arrGreen.indexOf(i - 14) !== -1 &&
      arrRed.indexOf(i + 7) == -1 &&
      arrGreen.indexOf(i + 7) == -1
    ) {
      stepIf(i + 7);
      break;
    }
    if (
      arrGreen.indexOf(i) !== -1 &&
      arrGreen.indexOf(i - 7) !== -1 &&
      arrRed.indexOf(i + 7) == -1 &&
      arrGreen.indexOf(i + 7) == -1
    ) {
      stepIf(i + 7);
      break;
    }

    if (
      arrGreen.indexOf(i) !== -1 &&
      arrGreen.indexOf(i - 7) !== -1 &&
      arrRed.indexOf(i - 14) == -1 &&
      arrGreen.indexOf(i - 14) == -1
    ) {
      stepIf(i - 14);
      break;
    }
    else if (i == 0) {
      let randomGreen = Math.random() > 0.5 ? ball - 1 : ball - 7;
      stepIf(randomGreen);
      break;
    }
  }
}

function stepIf(id) {
  const stepUse = document.getElementById(id);
  if (
    id >= 0 &&
    id <= 48 &&
    !stepUse?.classList.contains("tileRed") &&
    !stepUse?.classList.contains("tileGreen")
  ) {
    if (stepUse) {
      moveDown(stepUse, "tileGreen");
    }
  } else {
    stepIf(getRandomInt());
  }
}

function getRandomInt() {
  return Math.floor(Math.random() * 49);
}
function winBoard(isUserWin) {
  const winArea = document.createElement("div");
  winArea.id = 'winArea'
  winArea.classList.add("winArea");
  document.body.prepend(winArea);
  draw = winArea.innerText = "Draw"
  isUserWin ? (winArea.innerText = "YOU WIN") : (winArea.innerText = "WASTED");
}

function removeEventTile() {
  const clickListener = (event) => {
    touchMous(event.target);
  };
  document.removeEventListener("click", clickListener);
}

function checkForWinRed() {
  const redElems = Array.from(document.getElementsByClassName("tileRed"));
  const arrRed = redElems.map((i) => +i.id);
  const greenElems = Array.from(document.getElementsByClassName("tileGreen"));
  const arrGreen = greenElems.map((i) => +i.id);
  localStorage.setItem("continueRed", JSON.stringify(arrRed));
  let counter = 0;
  for (let i = 48; i >= 0; i--) {
    if (
      arrRed.includes(i) &&
      arrRed.includes(i - 1) &&
      arrRed.includes(i - 2) &&
      arrRed.includes(i - 3) &&
      arrCheck.indexOf(i) == -1
    ) {
      winBoard(true);
      removeEventTile();
      isEnd = true;
      break;
    }
    if (
      arrRed.includes(i) &&
      arrRed.includes(i - 7) &&
      arrRed.includes(i - 14) &&
      arrRed.includes(i - 21)
    ) {
      winBoard(true);
      removeEventTile()
      isEnd = true;
      break;
    }
    if (
      arrRed.includes(i) &&
      arrRed.includes(i - 6) &&
      arrRed.includes(i - 12) &&
      arrRed.includes(i - 18)
    ) {
      winBoard(true);
      removeEventTile()
      isEnd = true;
      break;
    }
    if (
      arrRed.includes(i) &&
      arrRed.includes(i - 8) &&
      arrRed.includes(i - 16) &&
      arrRed.includes(i - 24)
    ) {
      winBoard(true);
      removeEventTile()
      isEnd = true;
      break;
    }
    if (!arrRed.includes(i) && !arrGreen.includes(i)) {
      counter++;
    }
  }
  if (!counter) {
    winBoard(draw)
    isEnd = true;
  }
}

function checkForWinGreen() {
  const greenElems = Array.from(document.getElementsByClassName("tileGreen"));
  const arrGreen = greenElems.map((i) => +i.id);
  localStorage.setItem("continueGreen", JSON.stringify(arrGreen));
  for (let i = 48; i >= 0; i--) {
    if (
      arrGreen.includes(i) &&
      arrGreen.includes(i - 1) &&
      arrGreen.includes(i - 2) &&
      arrGreen.includes(i - 3) &&
      !arrCheck.includes(i)
    ) {
      winBoard(false);
      removeEventTile()
      isEnd = true;
      break;
    }
    if (
      arrGreen.includes(i) &&
      arrGreen.includes(i - 7) &&
      arrGreen.includes(i - 14) &&
      arrGreen.includes(i - 21)
    ) {
      winBoard(false);
      removeEventTile()
      isEnd = true;
      break;
    }
    if (
      arrGreen.includes(i) &&
      arrGreen.includes(i - 6) &&
      arrGreen.includes(i - 12) &&
      arrGreen.includes(i - 18)
    ) {
      winBoard(false);
      removeEventTile()
      isEnd = true;
      break;
    }
    if (
      arrGreen.includes(i) &&
      arrGreen.includes(i - 8) &&
      arrGreen.includes(i - 16) &&
      arrGreen.includes(i - 24)
    ) {

      winBoard(false);
      removeEventTile()
      isEnd = true;
      break;
    }
  }
}

function moveDown(tile, tileColor) {
  if (tile.id >= 0 && tile.id <= 6) {
    for (let i = 6; i >= 0; i--) {
      let tileId = document.getElementById(i);
      if (
        tileId.classList.contains("tileRed") ||
        tileId.classList.contains("tileGreen")
      ) {
        continue;
      } else {
        tileId.classList.add(tileColor);
        break;
      }
    }
  }
  if (tile.id >= 7 && tile.id <= 13) {
    for (let i = 13; i >= 7; i--) {
      let tileId = document.getElementById(i);
      if (
        tileId.classList.contains("tileRed") ||
        tileId.classList.contains("tileGreen")
      ) {
        continue;
      } else {
        tileId.classList.add(tileColor);
        break;
      }
    }
  }
  if (tile.id >= 14 && tile.id <= 20) {
    for (let i = 20; i >= 14; i--) {
      let tileId = document.getElementById(i);
      if (
        tileId.classList.contains("tileRed") ||
        tileId.classList.contains("tileGreen")
      ) {
        continue;
      } else {
        tileId.classList.add(tileColor);
        break;
      }
    }
  }
  if (tile.id >= 21 && tile.id <= 27) {
    for (let i = 27; i >= 21; i--) {
      let tileId = document.getElementById(i);
      if (
        tileId.classList.contains("tileRed") ||
        tileId.classList.contains("tileGreen")
      ) {
        continue;
      } else {
        tileId.classList.add(tileColor);
        break;
      }
    }
  }
  if (tile.id >= 28 && tile.id <= 34) {
    for (let i = 34; i >= 28; i--) {
      let tileId = document.getElementById(i);
      if (
        tileId.classList.contains("tileRed") ||
        tileId.classList.contains("tileGreen")
      ) {
        continue;
      } else {
        tileId.classList.add(tileColor);
        break;
      }
    }
  }
  if (tile.id >= 35 && tile.id <= 41) {
    for (let i = 41; i >= 35; i--) {
      let tileId = document.getElementById(i);
      if (
        tileId.classList.contains("tileRed") ||
        tileId.classList.contains("tileGreen")
      ) {
        continue;
      } else {
        tileId.classList.add(tileColor);
        break;
      }
    }
  }
  if (tile.id >= 42 && tile.id <= 48) {
    for (let i = 48; i >= 42; i--) {
      let tileId = document.getElementById(i);
      if (
        tileId.classList.contains("tileRed") ||
        tileId.classList.contains("tileGreen")
      ) {
        continue;
      } else {
        tileId.classList.add(tileColor);
        break;
      }
    }
  }
}