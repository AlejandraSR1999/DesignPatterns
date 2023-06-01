import { Book, Electronic } from "../items/";
import type { ShoppingCartVisitor } from "../types";

export class WeekdayVisitor implements ShoppingCartVisitor {
  public visitBook(book: Book) {
    return book.price;
  }

  public visitElectronic(electronic: Electronic) {
    return electronic.price;
  }
}