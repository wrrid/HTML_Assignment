export const View = (() => {
    const inputEl = document.querySelector(".goal_input");
    const categoryEl = document.querySelector(".goal_category");
    const repsEl = document.querySelector(".goal_reps");
    const addBtnEl = document.querySelector(".goal_add");
    const goalListEl = document.querySelector(".goal_list");

    const renderGoals = (goals) => {
        goalListEl.innerHTML = "";

        goals.forEach((goal) => {
            const goalCard = document.createElement("div");
            goalCard.className = "goal_card";
            goalCard.id = goal.id;

            if (goal.achieved) {
                goalCard.style.backgroundColor = "lightseagreen";
                goalCard.style.textDecoration = "line-through";
            }

            const goalText = document.createElement("div");
            goalText.className = "goal_text";
            goalText.innerHTML = `
            <p class="goal_text_content">
            <span>${goal.description} - </span>
            <strong>${goal.category}</strong>
            <span>(${goal.repetitions})</span>
            `;

            const markBtn = document.createElement("button");
            markBtn.className = "mark_btn";
            markBtn.textContent = "Mark as Achieved";

            goalCard.appendChild(goalText);
            goalCard.appendChild(markBtn);
            goalListEl.appendChild(goalCard);
        });
    };

    const bindMarkAchieved = (handler) => {
        const buttons = document.querySelectorAll(".mark_btn");
        buttons.forEach((btn) => {
            btn.addEventListener("click", (e) => {
                const id = e.target.parentElement.id;
                handler(id);
            });
        });
    };

    return {
        inputEl,
        categoryEl,
        repsEl,
        addBtnEl,
        goalListEl,
        renderGoals,
        bindMarkAchieved
    };
})();

