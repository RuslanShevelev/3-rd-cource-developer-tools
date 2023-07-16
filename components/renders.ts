import { getCardsArray, initTimer } from "./utils";
import { playGame } from "../index";
import { confetti } from "./confetti";

export function renderDifficultyComponent(appEl:HTMLElement) {
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

  const start = appEl.querySelector<HTMLElement>(".start-button");
  if(start){ start.onclick = () => {
    const levels: NodeListOf<HTMLInputElement> = appEl.querySelectorAll('input[name="difficulty"]');
    for (const level of levels) {
      if (level.checked) {
        const gameLevel = Number(level.value);
        renderGameComponent(appEl, gameLevel);
      };
    };
  }};
};

export function renderGameComponent(appEl:HTMLElement, level: number) {
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

  function getCardHTML(card:string) {
    return `<li class="shirt">
        <div class="card">
            <img src="${card}" alt = "карта">
        </div>
        `;
  }
  appEl.innerHTML = appHtml;
  const timer = appEl.querySelector<HTMLElement>(".time");
  if(timer) initTimer(timer);

  const restart = appEl.querySelector<HTMLElement>(".restart");
  if(restart) restart.onclick = () => {
    renderDifficultyComponent(appEl);
  };
  playGame(cards);
};

export function renderCongratulation(appEl:HTMLElement, time:string, win?:string) {
  const winHtml = `<div class="win-game">
    <div class="image">
    <img src=${
      win ? "./assets/images/celebration.png" : "./assets/images/dead.png"
    } alt = "картинка">
    </div>
    <h3 class="win-title">Вы ${win ? "выиграли" : "проиграли"}!</h3>
    <!-- <div class="time"> -->
    <p class="time-text">Затраченное время:</p>
    <p class="time-value">${time}</p>
    <!-- </div> -->
    <button class="start-button">Играть снова</button>
  </div>
  <div class="confetti">${win ? confetti : ""}</div>`;
  appEl.innerHTML = winHtml;
  const restart = appEl.querySelector<HTMLElement>(".start-button");
  if(restart) restart.onclick = () => {
    renderDifficultyComponent(appEl);
  };
};
