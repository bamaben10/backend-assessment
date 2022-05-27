const complimentBtn = document.getElementById("complimentButton")

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

complimentBtn.addEventListener('click', getCompliment)

const fortuneBtn = document.getElementById("fortuneButton")

const getFortune = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data)
        });
};

fortuneBtn.addEventListener('click', getFortune)


const getInspiration = () => {
    axios.get("http://localhost:4000/api/inspiration/")
        .then(res => {
            const data = res.data;
            alert(data)
        });
};

inspirationBtn.addEventListener('click', getInspiration)

const getGoal = () => {
    axios.get("http://localhost:4000/api/inspiration/")
        .then(res => {
            const data = res.data;
            alert(data)
        });
}

goalsBtn.addEventListener('click', getGoal)

const howToAchieveGoals = () => {
    axios.get("http://localhost:4000/api/inspiration/")
        .then(res => {
            const data = res.data;
            alert(data)
        });
}

howToAchieveGoalsBtn.addEventListener('click', gethowToAchieveGoals)