import { ArticleState } from "./articleState";
import { DraftState } from "./draft";

export class PendingDraftState extends ArticleState {
pitch(): ArticleState {
    return new DraftState();
 }
}