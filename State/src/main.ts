import { Article } from "./article";
function main(): void {

const docs = new Article(); // PendingDraftState: {}

docs.pitch(); // DraftState: {}
docs.draft(); // EditingState: {}
docs.edit(); // PublishedState: {}
docs.publish(); // PendingDraftState: {}



}
main();