const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneBtn")
const goalBtn = document.getElementById("get-goals-btn")
const goalInput = document.getElementById("get-goals-btn")
const goalSubmit = document.getElementById("get-goals-btn")

let parentEl = document.createElement('h2')

const BaseURL = 'http://localhost:4000'

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
    //axios.get(`${BaseURL}/api/compliment`)
        .then(res => {
            const data = res.data;
            alert(data);
    });
};
let number = 0

const getFortune = () => {
    axios.get(`${BaseURL}/api/fortune`)
        .then(res => {
            console.log((res.data))
            console.log(number)
        })
        .catch(err => console.log(err))
}

const deleteBtn = () => {
    console.log(evt.target.id)
    axios.delete(`${BaseURL}/api/goals/${evt.target.id}`)
    .then(res => displayList(res.data))
    .catch(err => console.log(err))
}

const displayList = (arr) => {
        parentEl.remove()
        parentEl.textContent = 'My Goals'
        let goalList = document.createElement('ul')
        parentEl.appendChild(goalList)
        arr.map(element => {
            let goalEl = document.createElement('li')
            let deleteBtn = document.createElement('button')
            deleteBtn.textContent = "delete me"
            deleteBtn.setAttribute('id',element.goalId)
            deleteBtn.addEventListener('click', deleteBtn)
            goalEl.textContent = element.goal
            goalEl.appendChild(deleteBtn)
            goalList.appendChild(goalEl)
        })
        document.body.appendChild(parentEl)
}

const getGoals = () => {
    axios.get(`${BaseURL}/api/goals`)
    .then(res => {
       console.log(res.data)
       displayList(res.data)
    })
    .catch(err => console.log(err))
}

const addGoal = () => {
    let body = {
        goal:goalInput.value
    }
    axios.post(`${BaseURL}/api/goals`, body)
    .then(res => {
        displayList(res.data)
        goalInput.value = ''
    })
    .catch(err => console.log(err))
}

complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
goalBtn.addEventListener('click', getGoals)
goalSubmit.addEventListener('click',addGoal)
