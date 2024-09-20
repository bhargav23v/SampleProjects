import { Component, OnInit } from '@angular/core';
import { NewsRatingModel } from '../newsrating/newsrating.model';
import { NewsRatingServiceService } from '../news-rating-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent {

  newsRatings: NewsRatingModel[];
 count: number;
 userEmail: string;

 constructor(private newsRatingService: NewsRatingServiceService, private router: Router ) {
  this.newsRatings = this.newsRatingService.getNewsRatingList();
  this.userEmail = this.newsRatingService.userEmail;
  if (!this.userEmail) {
    this.router.navigate(['/login']);
  }
 }

 addNewsRating(titleEl: HTMLInputElement, link: HTMLInputElement) {
   const titleEntered = titleEl.value;
   const linkEntered = link.value;
   const rating = new NewsRatingModel(titleEntered, linkEntered);
   this.newsRatings.push(rating);
   titleEl.value = '';
   link.value = '';
   return false;
 }

 identify( index, item) {
  return index;
 }
}
