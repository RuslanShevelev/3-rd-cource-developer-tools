import {
  renderDifficultyComponent,
  renderCongratulation,
} from "./components/renders";
import "./style.css";

let appEl = document.getElementById("app");
let firstCard: number | null = null;
let secondCard: number | null = null;
let clickable = true;

if (appEl) renderDifficultyComponent(appEl);

export function playGame(cards: string[]) {
  if (appEl) {
    let cardsShirts = appEl.querySelectorAll(".shirt");
    cardsShirts.forEach((cardsShirt, index) => {
      setTimeout(() => {
        cardsShirt.firstElementChild?.classList.add("hide");
        cardsShirt.classList.add("flip");
      }, 5000);

      cardsShirt.addEventListener("click", () => {
        if (clickable === true && !cardsShirt.classList.contains("success")) {
          setTimeout(() => {
            cardsShirt.classList.remove("flip");
            cardsShirt.firstElementChild?.classList.remove("hide");
          }, 200);

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
              setTimeout(() => {
                // cardsShirts[firstCard].firstElementChild.classList.add("hide");
                // cardsShirts[secondCard].firstElementChild.classList.add("hide");
                // firstCard = null;
                // secondCard = null;
                // clickable = true;
                if (appEl) {
                  let time = appEl.querySelector<HTMLElement>(".time");
                  if (time) renderCongratulation(appEl, time.innerText);
                }
              }, 600);
            }
            if (
              Array.from(cardsShirts).every((cardsShirt) =>
                cardsShirt.classList.contains("success")
              )
            ) {
              setTimeout(() => {
                if (appEl) {
                  let time = appEl.querySelector<HTMLElement>(".time");
                  if (time) renderCongratulation(appEl, time.innerText, "win");
                }
              }, 600);
            }
          }
        }
      });
    });
  }
}
