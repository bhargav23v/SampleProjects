import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  registeredData: any[] = [];
  users;
  constructor() {}

  ngOnInit() {
    this.registeredData = JSON.parse(localStorage.getItem('getData') || '');
  }
}
