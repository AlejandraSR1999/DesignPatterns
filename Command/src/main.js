"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const items_1 = require("./items");
const ShoppingCart_1 = require("./ShoppingCart");
const visitors_1 = require("./visitors");
const cart = new ShoppingCart_1.ShoppingCart();
cart.addItem(new items_1.Book(5));
cart.addItem(new items_1.Book(10));
cart.addItem(new items_1.Electronic(100, 20));
// Weekdays
const weekdayVisitor = new visitors_1.WeekdayVisitor();
const weekdaysTotalPrice = cart.getTotalPrice(weekdayVisitor);
console.log(weekdaysTotalPrice); // output: 115
// Weekends
const weekendVisitor = new visitors_1.WeekendVisitor();
const weekendTotalPrice = cart.getTotalPrice(weekendVisitor);
console.log(weekendTotalPrice); // output: 111.5
