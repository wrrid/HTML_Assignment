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
            </p>
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
        goalListEl.addEventListener("click", (e) => { /*Use the goalListEl listen the click, then get the id from the card*/
            if(e.target.className ==="mark_btn"){   /*make sure the pressed button is a mark_btn*/
                const id = e.target.parentElement.id;
                handler(id);
            }
            
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
