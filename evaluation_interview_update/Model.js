export const Model = (() => {
    class State {
        #goals = [];
        #onChange = () => {};

        get goals() {
            return this.#goals;
        }

        set goals(newGoals) {
            this.#goals = newGoals;
            this.#onChange();
        }

        addGoal(newGoal) {
            this.goals = [...this.goals, newGoal];
        }

        updateAchieved(id) {
            this.goals = this.goals.map((goal) => (id === goal.id ? { ...goal, achieved: true } : goal));   
            /*if the id is not equal, goal = goal; if id is equal, change the local goal achieved to true.*/
        }
    }

    return { State };
})();
