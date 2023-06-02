let menu = {
    appetizers: [
      "Texas Cheese Fries",
      "Buffalo Wings",
      "Skillet Queso",
      "Fried Mozerella",
    ],

    entrees: [
        "Ancho Salmon",
        "Santa Fe Salad",
        "Classic Sirloin",
        "Babyback Ribs - Full Rack",
        "Babyback Ribs - Half Rack",
        "Ultimate Cajan Pasta",
      ],

      dessert: ["Skillet Chocolate Chip Cookie", "Molten Lava Cake", "Cheesecake"],

      kidsMenu: [
        "Burger Bites",
        "Chicken Bites",
        "Cheese Quesidilla",
        "Chicken Tenders",
        "Mac & Cheese",
      ],

      beverages: [
        "Coca",
        "Diet Coke",
        "Coke Zero",
        "Spite",
        "Dr. Pepper",
        "MinuteMaid Lemonade",
        "Sweet Tea",
        "Strawberry Lemonade",
        "Waermelon Lemonade",
        "Watermelon Tea",
        "Blackberry Iced Tea",
        "Mango Iced Tea",
      ],
    };

    let lunchSpecials = [
        "Big Mout Cripsy Chicken Sandwhich",
        "Chicken Bacon Rnach Quesidilla - Half Order",
        "Double Burger",
        "Bacon Avacado Grilled Chicken",
        "Chipotle Chicken Fresh Mex Bowl",
      ];

      let spirits = [
        "Presidente Maragrita",
        "Tiki Party Punch Rita",
        "Frozen Margarita",
        "Tito's Punch",
        "Captain's Castaway",
        "Texas Strawberry Lemonade",
      ];

// HW create at least 3 functions --> console.log

// Apps & Entree as array
const getAnyItem = (bob) => {
    if(bob === 'Appetizers') {
        console.log(menu.appetizers)
    } else if(bob === 'Entree'){
        console.log(menu.entrees)
    }
}
// const appMenu = () => {
//     let items = menu.appetizers
//     console.log('Appetizer Menu:')
//     items.forEach((appetizers) => {
//         console.log(appetizers)
//     })
// }

// Entree
// const entreeMenu = () => {
//     let items = menu.entrees
//     console.log('Entree Menu:')
//     items.forEach((entrees) => {
//         console.log(entrees)
//     })
// }

// Deserts as list
const dessertMenu = () => {
    let items = menu.dessert
    console.log('Dessert Menu:')
    items.forEach((dessert) => {
        console.log(dessert)
    })
}

// lunch as list
const lunchMenu = () => {
    let items = lunchSpecials
    console.log('Lunch Specials:')
    items.forEach((lunchSpecials) => {
        console.log(lunchSpecials)
    })
}

// hidden clue
const hiddenClue = () => {
    let clue = document.querySelector('#clue')
    clue.replaceWith('What occurs once in a minute, twice in a moment, and never in 1,000 years?')
};

// const show = () => {
//     let clue = document.querySelector('#couponCode');
//     if(clue.style.display === 'none'){
//         clue.style.display = 'block';
//     } else {
//         clue.style.display = 'none';
//     }
// }

//
document.querySelector('#hiddenClue').addEventListener('click', show)

function show() {
    document.querySelector('#couponCode').style.display = 'block'
}