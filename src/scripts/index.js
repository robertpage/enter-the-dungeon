import Dungeon from '2d-dungeon';
import { encounters, winEncounter } from './modules/list'
import { dunegeonConfig } from './modules/dungeon-config'

const mapNode = document.querySelector(".map");
const descNode = document.querySelector(".desc");
const challengeNode = document.querySelector(".challenge");
const rewardNode = document.querySelector(".reward");
const roomNode = document.querySelector(".room");
const rulesWrappeNode = document.querySelector(".rules-wrapper")

const centers = [];
let currentRoomNumber = 1;
const challenges = [];
const exponentialEncounter = [];
const levelVisited = [1];

const ENOUNTER_BIAS = 2;
let dungeon = new Dungeon(dunegeonConfig);
const CHARACTER = `<img src="./images/knight-banner.svg" alt="Icon represnting the player in their current room">`;

window.onload = () => {
  dungeon.generate();
  console.log(dungeon)
  getRoomCenter();
  draw();
  rulesWrappeNode.style.maxWidth = mapNode.offsetWidth+"px";
  createBiasArr(ENOUNTER_BIAS)
  populateRooms();
  drawChallenges();
}

mapNode.addEventListener('click', (event) => {
  if (event.target.dataset.room) {
    currentRoomNumber = event.target.dataset.room;
    const num = parseInt(currentRoomNumber);
    if (!levelVisited.includes(num)) levelVisited.push(num);
    drawChallenges();
    draw();
  }
}, true)

function draw () {
  let string = "";
  for (let i = 0; i < dungeon.walls.rows.length; i++) {
    string += "<div>";
    for (let j = 0; j < dungeon.walls.rows[i].length; j++) {
      const coordString = j + "-" + i;
      const roomNum = getRoomeNumber(j, i, dungeon.children);
        if (centers.includes(coordString)) {
          const level = centers.indexOf(coordString) + 1;
          const num = parseInt(currentRoomNumber);
          const icon = level === num ? CHARACTER : level
          string += '<div '+(roomNum ? ('data-room="'+ roomNum +'"') : '')+' class="empty area">'+(levelVisited.includes(level) ? icon : '')+'</div>';
        } else if (dungeon.walls.rows[i][j]) {
          string += '<div class="filled"></div>';
        } else {
          string += '<div '+(roomNum ? ('data-room="'+ roomNum +'"') : '')+' class="empty ' +(roomNum ? "area" : "")+'"></div>';
        }
    }
    string += "</div>"
  }
  mapNode.innerHTML = string;
}

function populateRooms () {
  for (let i = 0; i < dungeon.children.length - 1; i++) {
    const enounterValue = randNum(exponentialEncounter[0], exponentialEncounter[exponentialEncounter.length - 1]);
    const cloestValue = getClosest(enounterValue);
    const encounterIndex = exponentialEncounter.indexOf(cloestValue)
    const challenge = encounters[encounterIndex];
    challenges.push(challenge);
  }

  challenges.push(winEncounter);
}

function getRoomCenter () {
  for (let i = 0; i < dungeon.children.length; i++) {
    const stringCoor = (dungeon.children[i].position[0] + 1 + Math.floor(dungeon.children[i].room_size[0]/2)) + "-" + (dungeon.children[i].position[1] + 1 + Math.floor(dungeon.children[i].room_size[1]/2));
    centers.push(stringCoor);
  }
}

function getRoomeNumber (x, y, children) {
  for (let k = 0; k < children.length; k++) {
    if (x > children[k].position[0] &&
      x <= (children[k].position[0] + children[k].room_size[0]) &&
      y > children[k].position[1] &&
      y <= (children[k].position[1] + children[k].room_size[1])) {
        return k + 1;
  }

  }
  return;
}

function drawChallenges () {
  const levelNum = currentRoomNumber > 4 ? 4 : currentRoomNumber; // Make settable by players
  const challenge = challenges[currentRoomNumber - 1];
  roomNode.textContent = "Dungeon Level: " + levelNum;
  descNode.textContent = challenge.description;
  challengeNode.textContent = challenge.challenge ? challenge.challenge(levelNum) : undefined;
  rewardNode.textContent = challenge.reward ? challenge.reward(levelNum) : undefined;
}


function createBiasArr (bias) {
  const arr = [];
  for (let i = 0; i < encounters.length; i++) {
    exponentialEncounter.push(Math.pow(i,bias));
  }
}

function getClosest (value) {
  let bottom;
  let top;
  for (let i = 0; i < exponentialEncounter.length; i++) {
    // console.log(exponentialEncounter[i],  value)

    if (exponentialEncounter[i] > value && i === 0) return 0;
    if (exponentialEncounter[i] > value) {
      bottom = exponentialEncounter[i-1] - value;
      top = exponentialEncounter[i] - value;
      return top < bottom ? exponentialEncounter[i] : exponentialEncounter[i-1];
    }
  }

}

function randNum(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}