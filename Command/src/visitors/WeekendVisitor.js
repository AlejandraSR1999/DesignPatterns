"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeekendVisitor = void 0;
var WeekendVisitor = /** @class */ (function () {
    function WeekendVisitor() {
    }
    WeekendVisitor.prototype.visitBook = function (book) {
        // 10% discount on books during weekends
        return book.price * 0.9;
    };
    WeekendVisitor.prototype.visitElectronic = function (electronic) {
        // Discount based on weight of a electronic
        return electronic.price - +electronic.weight * 0.1;
    };
    return WeekendVisitor;
}());
exports.WeekendVisitor = WeekendVisitor;
