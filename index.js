let levelEls = document.querySelectorAll(".level-button");
for (const levelEl of levelEls) {
    levelEl.addEventListener("click", (event) => {
        event.stopPropagation();
        levelEl.classList.add('level-button-active');
    }
    )
};