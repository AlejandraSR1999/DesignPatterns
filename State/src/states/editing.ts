import { ArticleState } from "./articleState";
import { PublishedState } from "./published";

export class EditingState extends ArticleState {
edit(): ArticleState {
    return new PublishedState();
 }
}