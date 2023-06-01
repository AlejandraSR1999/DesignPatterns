export interface Video {
    title: string;
  }
  
export interface Subject<T> {
    subscribe(observer: Observer<T>): void;
    unsubscribe(observer: Observer<T>): void;
    notify(data: T): void;
  }
  
export interface Observer<T> {
    update(subject: Subject<T>, data: T): void;
  }

export interface ConcreteYoutubeObserver extends Observer<Video> {
    username: string;
};

export interface ConcreteYoutubeSubject extends Subject<Video> {
    username: string;
  };