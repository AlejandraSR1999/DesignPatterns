import type { Item, ShoppingCartVisitor } from "./types";

export class ShoppingCart {
  private items: Item[] = [];

  public addItem(item: Item) {
    this.items.push(item);
  }

  public getTotalPrice(visitor: ShoppingCartVisitor) {
    let total = 0;
    for (let item of this.items) {
      total += item.accept(visitor);
    }
    return total;
  }
}