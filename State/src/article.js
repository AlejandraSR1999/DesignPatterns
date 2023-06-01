"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Article = void 0;
var pending_1 = require("./states/pending");
var Article = /** @class */ (function () {
    function Article() {
        this.state = new pending_1.PendingDraftState();
        this.showCurrentState();
    }
    Article.prototype.showCurrentState = function () {
        console.log(this.state);
    };
    Article.prototype.pitch = function () {
        this.state = this.state.pitch();
        this.showCurrentState();
    };
    Article.prototype.draft = function () {
        this.state = this.state.draft();
        this.showCurrentState();
    };
    Article.prototype.edit = function () {
        this.state = this.state.edit();
        this.showCurrentState();
    };
    Article.prototype.publish = function () {
        this.state = this.state.publish();
        this.showCurrentState();
    };
    return Article;
}());
exports.Article = Article;
