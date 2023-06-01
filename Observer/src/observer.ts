import { Video, Subject, Observer, ConcreteYoutubeObserver, ConcreteYoutubeSubject } from "./interfaces/interfaces";
import { YoutubeUserSubject } from "./subject";

class YoutubeUserObserver implements ConcreteYoutubeObserver {

    constructor(public username: string) { }
  
    public update(subject: ConcreteYoutubeSubject, video: Video): void {
      if (subject instanceof YoutubeUserSubject) {
        console.log(`${this.username} watches the video '${video.title}' of ${subject.username}`);
      }
    }
  }

const alejandraSalazar = new YoutubeUserSubject('Alejandra Salazar');

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