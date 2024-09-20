import { Component, Input, HostBinding } from '@angular/core';
import { NewsRatingModel } from './newsrating.model';
import { Router } from '@angular/router';


@Component({
  selector: 'news-rating',
  templateUrl: './newsrating.component.html',
  styleUrls: [ './newsrating.component.css']
})

export class NewsRatingComponent {
   @Input() newsRating: NewsRatingModel;
   @HostBinding('attr.class') cssClass = 'row';
   toggle =  false;
   constructor(private router: Router) { }
   upVote() {
     this.newsRating.voteUp();
     return false;
   }

   downVote() {
     this.newsRating.voteDown();
     return false;
   }
   onToggle() {
     this.toggle = ! this.toggle;
   }
}
