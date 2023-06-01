import { ArticleState } from "./articleState";
import { EditingState } from "./editing";

export class DraftState extends ArticleState {
draft(): ArticleState {
    return new EditingState();
 }
}