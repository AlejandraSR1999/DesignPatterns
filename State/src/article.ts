import { PendingDraftState } from "./states/pending";
import { ArticleState } from "./states/articleState";
import { ArticleInterface } from "./articleInterface";

export class Article implements ArticleInterface {
private state: ArticleState = new PendingDraftState();

constructor() {
    this.showCurrentState();
 }

private showCurrentState(): void {
    console.log(this.state);
 }
    
public pitch(): void {
    this.state = this.state.pitch();
    this.showCurrentState();
 }

public draft(): void {
    this.state = this.state.draft();
    this.showCurrentState();
 }

public edit(): void {
    this.state = this.state.edit();
    this.showCurrentState();
 }

public publish(): void {
    this.state = this.state.publish();
    this.showCurrentState();
 }

}