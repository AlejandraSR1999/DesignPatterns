import { ArticleState } from "./articleState";
import { PendingDraftState } from "./pending";

export class PublishedState extends ArticleState {
publish(): ArticleState {
    return new PendingDraftState();
 }
}