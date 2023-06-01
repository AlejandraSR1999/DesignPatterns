"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.YoutubeUserSubject = void 0;
class YoutubeUserSubject {
    constructor(username) {
        this.username = username;
        this.observers = [];
    }
    subscribe(observer) {
        console.log(`${observer.username} subscribed to ${this.username} channel.`);
        const isAlreadyObserver = this.observers.some(o => o === observer);
        if (isAlreadyObserver)
            return;
        this.observers.push(observer);
        this.logSubscribers();
    }
    unsubscribe(observer) {
        console.log(`${observer.username} unsubscribed from ${this.username} channel.`);
        this.observers = this.observers.filter((other) => other !== observer);
        this.logSubscribers();
    }
    notify(video) {
        console.log(`${this.username} notifies its ${this.observers.length} subscribers of the new video.`);
        this.observers.map(observer => observer.update(this, video));
    }
    publishNewVideo(article) {
        console.log(`${this.username} published a new video: '${article.title}'`);
        this.notify(article);
    }
    logSubscribers() {
        console.log(`${this.username} now has ${this.observers.length} subscribers.`);
    }
}
exports.YoutubeUserSubject = YoutubeUserSubject;
