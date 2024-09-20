import { Component, OnInit } from '@angular/core';
import { NewsRatingServiceService } from '../news-rating-service.service';
import { NewsRatingModel } from '../newsrating/newsrating.model';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {
  newsRating: NewsRatingModel;
  title: string;
  userEmail: string;

  constructor(
    private newsRatingService: NewsRatingServiceService,
    private route: ActivatedRoute, private router: Router
  ) {}

  ngOnInit() {
    this.userEmail = this.newsRatingService.userEmail;
    if (!this.userEmail) {
      this.router.navigate(['/login']);
    }
    this.route.params.subscribe((params: Params) => {
      this.title = params['title'];
    });
    this.newsRating = this.newsRatingService.getNewsRating(this.title);
  }
}
