export const API = (() => {
    const baseURL = "http://localhost:3000/goals";

    const getGoals = () => {
        return fetch(baseURL).then((res) => res.json());
    };

    const creatGoals = (newGoal) => {
        return fetch(baseURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newGoal)
        }).then((res) => res.json());
    };

    const updateGoals = (id, updateGoal) => {
        return fetch(`${baseURL}/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updateGoal)
        }).then((res) => res.json());
    };

    return {
        getGoals,
        creatGoals,
        updateGoals
    };
})();
