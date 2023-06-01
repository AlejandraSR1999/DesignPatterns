import { Book, Electronic } from "../items";
import type { ShoppingCartVisitor } from "../types";

export class WeekendVisitor implements ShoppingCartVisitor {
  public visitBook(book: Book) {
    // 10% discount on books during weekends
    return book.price * 0.9;
  }

  public visitElectronic(electronic: Electronic) {
    // Discount based on weight of a electronic
    return electronic.price - +electronic.weight * 0.1;
  }
}