// Use "input()" to input a line from the user
// Use "input(str)" to print some text before requesting input
// You will need this in the following stages
const input = require('sync-input')

let water = 400
let milk = 540
let coffee = 120
let cups = 9
let money = 550
let command, drink;
while (true) {
    let exit = 0
    command = input("Write action (buy, fill, take):")
    switch (command) {
        case 'buy':
            drink = input("What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino:")
            if (drink === "1") {
                make_coffee(1, 250, 0, 16, 4)
            } else if (drink === "2") {
                make_coffee(1, 350, 75, 20, 7)
            } else if (drink === "3") {
                make_coffee(1, 200, 100, 12, 6)
            }
            break
        case "fill":
            let water_add = input("Write how many ml of water you want to add:")
            let milk_add = input("Write how many ml of milk you want to add:")
            let coffee_add = input("Write how many grams of coffee beans you want to add:")
            let cups_add = input("Write how many disposable cups you want to add:")
            water += parseInt(water_add)
            milk += parseInt(milk_add)
            coffee += parseInt(coffee_add)
            cups += parseInt(cups_add)
            break
        case 'take':
            console.log("I gave you $" + money)
            money = 0
            break
        case "remaining":
            get_info();
            break
        case "exit":
            exit = 1
            break
    }
    if (exit === 1) {
        break;
    }
}

function make_coffee(req_cups, need_water, need_milk, need_coffee, req_money) {
    let water_cups = Math.floor(water / need_water)
    let milk_cups = Math.floor(milk / need_milk)
    let coffee_cups = Math.floor(coffee / need_coffee)
    let min_cups = Math.min(water_cups, milk_cups, coffee_cups)
    if (min_cups === req_cups) {
        console.log("Yes, I can make that amount of coffee")
        water -= need_water
        milk -= need_milk
        coffee -= need_coffee
        money += req_money
        cups -= 1
    } else if (min_cups > req_cups) {
        let diff = min_cups - cups
        console.log("Yes, I can make that amount of coffee (and even " + diff + " more than that")
        water -= need_water
        milk -= need_milk
        coffee -= need_coffee
        money += req_money
        cups -= 1
    }
    else {
        console.log("No, I can make only " + min_cups + " cup(s) of coffee")
    }
}

function get_info() {
    console.log("The coffee machine has:")
    console.log(water + " ml of water")
    console.log(milk + " ml of milk")
    console.log(coffee + " g of coffee beans")
    console.log(cups + " disposable cups")
    console.log("$" + money + " of money")
}