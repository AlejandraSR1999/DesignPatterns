import { Book, Electronic } from "./items";
import { ShoppingCart } from "./ShoppingCart";
import { WeekdayVisitor, WeekendVisitor } from "./visitors";
import { Mediator,ConcreteMediator } from "./Mediator";



class Chatbot {
    private shoppingCart: ShoppingCart;
    private mediator: Mediator;
  
    constructor(shoppingCart: ShoppingCart, mediator: Mediator) {
      this.shoppingCart = shoppingCart;
      this.mediator = mediator;
    }
  
    public start() {
        this.mediator.sendMessage("Welcome to our store! How can I help you today?");
        this.mediator.sendMessage("Please enter the items you want to purchase, separated by commas.");
        const items = this.mediator.receiveMessage().split(",");
        for (let item of items) {
          this.shoppingCart.addItem(new Book(parseInt(item)));
        }
        const totalPrice = this.shoppingCart.getTotalPrice(new WeekendVisitor());
        this.mediator.sendMessage(`The total price of your items is ${totalPrice}.`);
        this.mediator.sendMessage("Thank you for shopping with us!");
      }
    }
    
    const mediator = new ConcreteMediator();
    const cart = new ShoppingCart();
    const chatbot = new Chatbot(cart, mediator);
    
    chatbot.start();
