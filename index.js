let appEl = document.getElementById("app");

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
                console.log(level.value)
                const gameLevel = level.value;
                renderGameComponent(gameLevel);
            };
            // alert("Сначала нужно выбрать уровень сложности");
        };
    };

};

renderDifficultyComponent();

function renderGameComponent(level) {
    const appHtml = `
    <div class="play-field">
    <p>Здесь будет ${level} карт</p>
    </div>`;
    appEl.innerHTML = appHtml;
};