"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const items_1 = require("./items");
const ShoppingCart_1 = require("./ShoppingCart");
const visitors_1 = require("./visitors");
const Mediator_1 = require("./Mediator");
class Chatbot {
    constructor(shoppingCart, mediator) {
        this.shoppingCart = shoppingCart;
        this.mediator = mediator;
    }
    start() {
        this.mediator.sendMessage("Welcome to our store! How can I help you today?");
        this.mediator.sendMessage("Please enter the items you want to purchase, separated by commas.");
        const items = this.mediator.receiveMessage().split(",");
        for (let item of items) {
            this.shoppingCart.addItem(new items_1.Book(parseInt(item)));
        }
        const totalPrice = this.shoppingCart.getTotalPrice(new visitors_1.WeekendVisitor());
        this.mediator.sendMessage(`The total price of your items is ${totalPrice}.`);
        this.mediator.sendMessage("Thank you for shopping with us!");
    }
}
const mediator = new Mediator_1.ConcreteMediator();
const cart = new ShoppingCart_1.ShoppingCart();
const chatbot = new Chatbot(cart, mediator);
chatbot.start();
