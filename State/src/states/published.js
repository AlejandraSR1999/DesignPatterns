"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.PublishedState = void 0;
var articleState_1 = require("./articleState");
var pending_1 = require("./pending");
var PublishedState = /** @class */ (function (_super) {
    __extends(PublishedState, _super);
    function PublishedState() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PublishedState.prototype.publish = function () {
        return new pending_1.PendingDraftState();
    };
    return PublishedState;
}(articleState_1.ArticleState));
exports.PublishedState = PublishedState;
