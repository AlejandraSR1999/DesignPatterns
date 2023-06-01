"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeekdayVisitor = void 0;
var WeekdayVisitor = /** @class */ (function () {
    function WeekdayVisitor() {
    }
    WeekdayVisitor.prototype.visitBook = function (book) {
        return book.price;
    };
    WeekdayVisitor.prototype.visitElectronic = function (electronic) {
        return electronic.price;
    };
    return WeekdayVisitor;
}());
exports.WeekdayVisitor = WeekdayVisitor;
