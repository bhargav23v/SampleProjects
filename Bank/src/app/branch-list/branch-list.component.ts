import { Component, OnInit } from '@angular/core';
import { RepositoryService } from '../repository.service';

@Component({
  selector: 'app-branch-list',
  templateUrl: './branch-list.component.html',
  styleUrls: ['./branch-list.component.css']
})
export class BranchListComponent implements OnInit {
  searchText: string = '';
  branchList = [];
  constructor(private repository: RepositoryService) { }

  ngOnInit() {
    this.getBranches();
  }

  getBranches() {
    this.repository.getBranches().subscribe(response => {
      this.branchList = response.data[0].Brand[0].Branch;
     // console.log(this.branchList);
    });
  }

}
