"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const article_1 = require("./article");
function main() {
    const docs = new article_1.Article(); // PendingDraftState: {}
    docs.pitch(); // DraftState: {}
    docs.draft(); // EditingState: {}
    docs.edit(); // PublishedState: {}
    docs.publish(); // PendingDraftState: {}
}
main();
