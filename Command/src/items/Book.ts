import type { ShoppingCartVisitor } from "../types";
import { Item } from "../types";

export class Book extends Item {
  constructor(public price: number) {
    super();
  }

  public accept(visitor: ShoppingCartVisitor): number{
    return visitor.visitBook(this);
  }
}