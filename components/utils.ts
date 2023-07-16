import * as _ from "lodash";
// const shuffle = (array) => {
//   let currentIndex = array.length,
//     randomIndex;
//   while (currentIndex !== 0) {
//     randomIndex = Math.floor(Math.random() * currentIndex);
//     currentIndex--;
//     [array[currentIndex], array[randomIndex]] = [
//       array[randomIndex],
//       array[currentIndex],
//     ];
//   }
//   return array;
// };

// const duplicateArray = (array) =>
//   array.reduce((res, current) => res.concat([current, current]), []);

export const getCardsArray = (difficult:number) => {
  const cards: string[] = [
    "./assets/images/cards/6 бубны.png",
    "./assets/images/cards/6 крести.png",
    "./assets/images/cards/6 пики.png",
    "./assets/images/cards/6 черви.png",
    "./assets/images/cards/7 бубны.png",
    "./assets/images/cards/7 крести.png",
    "./assets/images/cards/7 пики.png",
    "./assets/images/cards/7 черви.png",
    "./assets/images/cards/8 бубны.png",
    "./assets/images/cards/8 крести.png",
    "./assets/images/cards/8 пики.png",
    "./assets/images/cards/8 черви.png",
    "./assets/images/cards/9 бубны.png",
    "./assets/images/cards/9 крести.png",
    "./assets/images/cards/9 пики.png",
    "./assets/images/cards/9 черви.png",
    "./assets/images/cards/10 бубны.png",
    "./assets/images/cards/10 крести.png",
    "./assets/images/cards/10 пики.png",
    "./assets/images/cards/10 черви.png",
    "./assets/images/cards/валет бубны.png",
    "./assets/images/cards/валет крести.png",
    "./assets/images/cards/валет пики.png",
    "./assets/images/cards/валет черви.png",
    "./assets/images/cards/дама бубны.png",
    "./assets/images/cards/дама крести.png",
    "./assets/images/cards/дама пики.png",
    "./assets/images/cards/дама черви.png",
    "./assets/images/cards/король бубны.png",
    "./assets/images/cards/король крести.png",
    "./assets/images/cards/король пики.png",
    "./assets/images/cards/король черви.png",
    "./assets/images/cards/туз бубны.png",
    "./assets/images/cards/туз крести.png",
    "./assets/images/cards/туз пики.png",
    "./assets/images/cards/туз черви.png",
  ];
  const shuffledCards = _.shuffle(cards);
  const slicedArray = shuffledCards.slice(0, difficult / 2);
  const duplicatedArray = _.concat(slicedArray, slicedArray);
  return _.shuffle(duplicatedArray);
};

export function initTimer(element:HTMLElement) {
  // eslint-disable-next-line no-unused-vars
  let hour = 0;
  let min = 0;
  let sec = 0;
  setInterval(() => {
    sec++;
    if (sec === 60) {
      min++;
      sec = 0;
    }
    if (min === 60) {
      hour++;
      min = 0;
    }
    element.innerText = `${min < 10 ? "0" + min : min}.${
      sec < 10 ? "0" + sec : sec
    }`;
  }, 1000);
};
