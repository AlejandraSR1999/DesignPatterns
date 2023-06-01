import { Video, Subject, Observer, ConcreteYoutubeObserver, ConcreteYoutubeSubject } from "./interfaces/interfaces";

export class YoutubeUserSubject implements ConcreteYoutubeSubject {

    constructor(public username: string) { }
  
    private observers: ConcreteYoutubeObserver[] = [];
  
    public subscribe(observer: ConcreteYoutubeObserver): void {
      console.log(`${observer.username} subscribed to ${this.username} channel.`);
      const isAlreadyObserver = this.observers.some(o => o === observer);
      if (isAlreadyObserver) return;
      this.observers.push(observer);
      this.logSubscribers();
    }
  
    public unsubscribe(observer: ConcreteYoutubeObserver): void {
      console.log(`${observer.username} unsubscribed from ${this.username} channel.`);
      this.observers = this.observers.filter((other) => other !== observer);
      this.logSubscribers();
    }
  
    public notify(video: Video): void {
      console.log(`${this.username} notifies its ${this.observers.length} subscribers of the new video.`);
      this.observers.map(observer => observer.update(this, video));
    }
  
    public publishNewVideo(article: Video): void {
      console.log(`${this.username} published a new video: '${article.title}'`);
      this.notify(article);
    }
  
    private logSubscribers() {
      console.log(`${this.username} now has ${this.observers.length} subscribers.`);
    }
  }