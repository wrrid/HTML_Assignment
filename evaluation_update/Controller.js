import { View } from "./View.js";
import { API } from "./api.js";

const init = () => {
    View.addBtnEl.addEventListener("click", (e) => {
        e.preventDefault();
        const description = View.inputEl.value;
        const category = View.categoryEl.value;
        const repetitions = View.repsEl.value;

        if (!description.trim() || !repetitions.trim()) return;

        API.creatGoals({
            description,
            category,
            repetitions,
            achieved: false
        }).then(() => {
            View.inputEl.value = "";
            View.categoryEl.value = "Strength Training";
            View.repsEl.value = "";
            render();
        });
    });

    render();
};

const render = () => {
    API.getGoals().then((goals) => {
        View.renderGoals(goals);

        View.bindMarkAchieved((id) => {
            API.updateGoals(id, { achieved: true }).then(() => {
                render();
            });
        });
    });
};

init();
