import { Injectable } from '@angular/core';
import { NewsRatingModel } from './newsrating/newsrating.model';

@Injectable({
  providedIn: 'root'
})
export class NewsRatingServiceService {
  userEmail: string;

  constructor() { }
  private newsRatingsList: NewsRatingModel[]  = [
    new NewsRatingModel('CNN', 'www.cnn.com', 7),
      new NewsRatingModel('Times', 'www.times.com', 8),
      new NewsRatingModel('BBC', 'www.bbc.com', 9)
  ];

  getNewsRatingList() {
    return this.newsRatingsList;
  }
  getNewsRating(title: string) {
    const server = this.newsRatingsList.find(
      (s) => {
        return s.title === title;
      }
    );
    return server;
  }

}
