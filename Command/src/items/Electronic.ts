import type { ShoppingCartVisitor } from "../types";
import { Item } from "../types";

export class Electronic extends Item {
  constructor(public price: number, public weight: number) {
    super();
  }

  public accept(visitor: ShoppingCartVisitor) : number{
    return visitor.visitElectronic(this);
  }
}
