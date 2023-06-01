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

// Apps
const appMenu = () => {
    let items = menu.appetizers
    console.log('Appetizer Menu:')
    // let button = document.querySelector('#one')
    items.forEach((appetizers) => {
        console.log(appetizers)
    })
}

// Entree
const entreeMenu = () => {
    let items = menu.entrees
    console.log('Entree Menu:')
    // let button = document.querySelector('#one')
    items.forEach((entrees) => {
        console.log(entrees)
    })
}

// Deserts
const dessertMenu = () => {
    let items = menu.dessert
    console.log('Dessert Menu:')
    // let button = document.querySelector('#one')
    items.forEach((dessert) => {
        console.log(dessert)
    })
}

// lunch
const lunchMenu = () => {
    let items = lunchSpecials
    console.log('Lunch Specials:')
    // let button = document.querySelector('#one')
    items.forEach((lunchSpecials) => {
        console.log(lunchSpecials)
    })
}