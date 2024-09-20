import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'search',
  templateUrl: 'search.component.html',
  styleUrls: ['search.component.css']
})
export class SearchComponent implements OnInit {
 customers: Array<any>;
 searchValue: string;
 originalCustomers: Array<any>;
 ngOnInit() {
   this.searchValue = '';
    this.originalCustomers = [
       { first: 'John', last: 'Schneider', amount: 3000},
       { first: 'Amy', last: 'Jackson', amount: 6000},
       { first: 'Ryan', last: 'Dahl', amount: 500},
       { first: 'Bob', last: 'Wescott', amount: 200},
       { first: 'Zack', last: 'Jimmerman', amount: 4000},
       { first: 'Johnt', last: 'Schneidert', amount: 38000},
       { first: 'Amyt', last: 'Jacksont', amount: 68000},
       { first: 'Ryant', last: 'Dahlt', amount: 5800},
       { first: 'Bobt', last: 'Wescottt', amount: 2800},
       { first: 'Zackt', last: 'Jimmermant', amount: 48000},
       { first: 'Johnn', last: 'Schneidern', amount: 34000},
       { first: 'Amyn', last: 'Jacksonn', amount: 64000},
       { first: 'Ryann', last: 'Dahln', amount: 5040},
       { first: 'Bobn', last: 'Wescottn', amount: 2400},
       { first: 'Zackn', last: 'Jimmermann', amount: 44000}
    ];
    this.filter();
 }

 filter () {
   this.customers = this.originalCustomers.filter( (customer) => {
    const re = new RegExp(this.searchValue, 'i');

    return re.test(customer.first) || re.test(customer.last) || re.test(customer.amount);
   });
 }

 onCustomerSearch() {
   this.filter();
 }

}
