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
exports.PendingDraftState = void 0;
var articleState_1 = require("./articleState");
var draft_1 = require("./draft");
var PendingDraftState = /** @class */ (function (_super) {
    __extends(PendingDraftState, _super);
    function PendingDraftState() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PendingDraftState.prototype.pitch = function () {
        return new draft_1.DraftState();
    };
    return PendingDraftState;
}(articleState_1.ArticleState));
exports.PendingDraftState = PendingDraftState;
