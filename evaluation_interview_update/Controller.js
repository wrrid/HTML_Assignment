import { View } from "./View.js";
import { API } from "./api.js";
import { Model } from "./Model.js";

const state = new Model.State();

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
        }).then((newGoal) => {
            state.addGoal(newGoal); /*update the new goal to local data*/

            View.inputEl.value = "";
            View.categoryEl.value = "Strength Training";
            View.repsEl.value = "";
            
            View.renderGoals(state.goals); /*render using local data*/
        });
    });

    render();
};



const render = () => {
    API.getGoals().then((goals) => {
        state.goals = goals;        /*copy the goals list from the servers data*/
        View.renderGoals(goals);    /*render using local data*/
        
        View.bindMarkAchieved((id) => {
            API.updateGoals(id, { achieved: true }).then(() => {
                state.updateAchieved(id);   /*update the achieved goal to local data*/
                View.renderGoals(state.goals);  /*render using local data*/
            });
        });
    });
};

init();
