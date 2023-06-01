export abstract class Item {
    abstract accept(visitor: ShoppingCartVisitor): number;
  }
  
  export interface ShoppingCartVisitor {
    visitBook(book: Item): number;
    visitElectronic(electronic: Item): number;
  }
  