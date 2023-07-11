import { getCardsArray } from "./utils.js";
import "./style.css";

let appEl = document.getElementById("app");
let firstCard = null;
let secondCard = null;
let clickable = true;

function renderDifficultyComponent() {
  const appHtml = `
    <form action="#" class="game-difficulty">
    <h3 class="difficulty-title">Выбери сложность</h3>
    <fieldset class="radio-inputs">
        <label>
            <input type="radio" name="difficulty" value="6"><span class="level-button">1</span>
        </label>
        <label>
            <input type="radio" name="difficulty" value="12"><span class="level-button">2</span>
        </label>
        <label>
            <input type="radio" name="difficulty" value="18"><span class="level-button">3</span>
        </label>
    </fieldset>
    <button class="start-button">Старт</button>
</form>`;
  appEl.innerHTML = appHtml;

  appEl.querySelector(".start-button").onclick = () => {
    const levels = appEl.querySelectorAll('input[name="difficulty"]');
    for (const level of levels) {
      if (level.checked) {
        const gameLevel = level.value;
        renderGameComponent(gameLevel);
      }
    }
  };
}

renderDifficultyComponent();

function renderGameComponent(level) {
  const cards = getCardsArray(level);
  const cardsHtml = cards.map((card) => getCardHTML(card)).join("");
  const appHtml = `
    <div class="game-header">
    <div class="timer">
    <div class="timer-title">
    <p class="time-labels">min</p>
    <p class="time-labels">sek</p>
    </div>
    <p class="time">00.00</p>
    </div>
    <button class="restart">Начать заново</button>
    </div>
    <div class="play-field level-${level}">
    <ul id="cards">${cardsHtml}</ul>
    </div>`;
  appEl.innerHTML = appHtml;

  function getCardHTML(card) {
    return `<li class="shirt">
      <div class="card">
          <img src="${card}" alt = "карта">
      </div>
      `;
  }
  let cardsShirts = appEl.querySelectorAll(".shirt");
  cardsShirts.forEach((cardsShirt, index) => {
    setTimeout(() => cardsShirt.firstElementChild.classList.add("hide"), 5000);
    cardsShirt.addEventListener("click", () => {
      if (clickable === true && !cardsShirt.classList.contains("success")) {
        cardsShirt.firstElementChild.classList.remove("hide");
        if (firstCard === null) {
          firstCard = index;
        } else {
          if (index !== firstCard) {
            secondCard = index;
            clickable = false;
          }
        }
        if (
          firstCard !== null &&
          secondCard !== null &&
          firstCard !== secondCard
        ) {
          if (cards[firstCard] === cards[secondCard]) {
            cardsShirts[firstCard].classList.add("success");
            cardsShirts[secondCard].classList.add("success");
            firstCard = null;
            secondCard = null;
            clickable = true;
          } else {
            cardsShirts[firstCard].firstElementChild.classList.add("hide");
            cardsShirts[secondCard].firstElementChild.classList.add("hide");
            firstCard = null;
            secondCard = null;
            clickable = true;
          }
        }
        if (
          Array.from(cardsShirts).every((cardsShirt) =>
            cardsShirt.classList.contains("success")
          )
        ) {
          alert("Вы выиграли");
        }
      }
    });
  });
}
