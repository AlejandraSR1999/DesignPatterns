"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const subject_1 = require("./subject");
class YoutubeUserObserver {
    constructor(username) {
        this.username = username;
    }
    update(subject, video) {
        if (subject instanceof subject_1.YoutubeUserSubject) {
            console.log(`${this.username} watches the video '${video.title}' of ${subject.username}`);
        }
    }
}
const alejandraSalazar = new subject_1.YoutubeUserSubject('Alejandra Salazar');
const hipoSalazar = new YoutubeUserObserver('Hipo Salazar');
alejandraSalazar.subscribe(hipoSalazar);
const naranjitaSalazar = new YoutubeUserObserver('Naranjita Salazar');
alejandraSalazar.subscribe(naranjitaSalazar);
alejandraSalazar.publishNewVideo({
    title: 'How to live with 9 cats without dying in the attempt',
});
alejandraSalazar.unsubscribe(naranjitaSalazar);
alejandraSalazar.publishNewVideo({
    title: 'Reasons to buy the whole collection of Final Fantasy',
});
