module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },


    getFortune: (req, res) => {
        const fortunes = ["You can keep a secret.", "Your success will astonish everyone.", "The harder you work, the luckier you get.", "It takes courage to admit fault.", "All your hard work will soon pay off."];

        // choose random compliment
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];

        res.status(200).send(randomFortune);
    },

    getInspiration: (req, res) => {
        const inspirations = ["You can do it!", "You are the best at what you do.", "Don't give up!"];

        let randomIndex = Math.floor(Math.random() * inspirations.length);
        let randomInspiration = inspirations[randomIndex];

        res.status(200).send(randomInspiration);
    },

    getGoal : (req,res) => {
        const goals = ["Graduate from DevMountain with understanding of everthing taught.", "Get a job as a web developer.", "Become a valuable coder."];

        let randomIndex = Math.floor(Math.random() * goals.length);
        let randomGoals = goals[randomIndex];

        res.status(200).send(randomInspiration);
    },

    getHowToAchieveMyGoals : (req,res) => {
        const howToAchieveGoals = ["Study after class everyday.", "Study on the weekends.", "Ask mentors/instructors for help."]

        let randomIndex = Math.floor(Math.random() * howToAchieveGoals.length);
        let randomhowToAchieveGoals = howToAchieveGoal[randomIndex];
    } 
}