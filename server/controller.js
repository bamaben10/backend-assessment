let goals = [
    {
        goalId:1,
        goal:'Finish coding assessment'
    },
    {
        goalId:2,
        goal:"score 30 points in a basketball game"
    },
];

let globalId = 3

module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },
    getFortune: (req,res) => {
        const fortunes = ["Your success will astonish everyone.", "The harder you work, the luckier you get.", "It takes courage to admit fault.", "All your hard work will soon pay off."];

        let randomIndex = Math.floor(Math.random() * fortunes.length)
        let randomFortune = fortunes[randomIndex];
        res.status(200).send(randomFortune)
    },

    getGoals:(req,res) => {
        res.status(200).send(goals)
    },
    addGoal: (req,res) => {
        let { goal } = req.body
        let newGoal = {
            goalId:globalId,
            goal
        }
        goals.push(newGoal)
        globalId++
        res.status(200).send(goals)
    },
    deleteGoal: (req,res) => {
        const { id } = req.params
        //find which goal has the goalId === id and splice it from the array
        const index = goals.findIndex(goal => goal.goalId === +id)
        goals.splice(index,1)
        res.status(200).send(goals)
    }
};
