"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArticleState = void 0;
var ArticleState = /** @class */ (function () {
    function ArticleState() {
    }
    ArticleState.prototype.pitch = function () {
        throw new Error("Invalid Operation: Cannot perform task in current state");
    };
    ArticleState.prototype.draft = function () {
        throw new Error("Invalid Operation: Cannot perform task in current state");
    };
    ArticleState.prototype.edit = function () {
        throw new Error("Invalid Operation: Cannot perform task in current state");
    };
    ArticleState.prototype.publish = function () {
        throw new Error("Invalid Operation: Cannot perform task in current state");
    };
    return ArticleState;
}());
exports.ArticleState = ArticleState;
