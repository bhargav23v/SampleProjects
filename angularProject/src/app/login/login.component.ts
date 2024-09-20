import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewsRatingServiceService } from '../news-rating-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private newsRatingService: NewsRatingServiceService) { }

  ngOnInit() {
  }
  onLogin(loginForm) {
    this.newsRatingService.userEmail = loginForm.value.loginEmail;
    console.group(loginForm.value);
    this.router.navigate(['/user']);
  }
}
