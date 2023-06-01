// data arrays
let menu = {
    breakfast: {
        food: [
            "",
            "",
        ]
    },
    lunch: {
        food: [
            "",
            "",
        ]
    }
}
let dailySpecial = "Hamburger"
let locations = ["NY", "DC"]
//global scope able to use w
// functions 2 ways to write
    // 1.function declaration
// function whateverName(){

// }

// **best use    2. arrow function
// const whateverName = (not necesarily need a parameter here) => {

// }

/// click button and get data from js script
const getBReakfastItems = () => {
    let items = menu.breakfast.food
    //let button = document.querySElector('#one')
    //button.replaceWith("New Menu")

// let screen = document.querySelector('.screen')
//items.forEach(paramenter any name)
//console.log(name of paramenter)
    items.forEach((i) => {
        console.log(i)
        // screen.append(i) // screen is class name of div inside html
    })
}

//attach to button event listener in HTML
// at html add::: onclick="getBreakfastItems()" ---> calls the function
// HTML:: button id=" class="press" onclick="name()">TEXT</button>


const getAnyItem = (theme) => {
    if(theme === "breakfast"){
        console.log(menu.breakfast.food)
    } else if(theme === lunch){
console.log(menu.lunch.food)
    } else{
        console.log(menu.dinner,food)
    }
}
//in all items buttons in html
//html onclick=getAnyItem()
//based on parameter
// html onclick=getAnyItem('lunch')
