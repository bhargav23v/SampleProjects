import { Directive, OnInit, ElementRef, Input, Renderer2, OnDestroy } from '@angular/core';

import * as _ from 'lodash';

@Directive({
  selector: '[sortField]'
})
export class SortDirective implements OnInit, OnDestroy {

  private sortKey: string;

  @Input() customers: any[];

  private ascending = true;

  private subscribeFn;

  constructor(private elRef: ElementRef, private renderer: Renderer2) {

  }

  ngOnInit() {
   const element: HTMLElement = this.elRef.nativeElement;
   this.sortKey = element.getAttribute('sortField');
   this.bindEvents();
  }

  bindEvents() {
    this.subscribeFn = this.renderer.listen(this.elRef.nativeElement, 'click', () => {
      
        this.sortCustomers();
        this.ascending = !this.ascending;
    });
  }

  sortCustomers() {
    const comparator = (a, b): number => {
      let aSortKeyValue = _.get(a, this.sortKey);
      let bSortKeyValue = _.get(b, this.sortKey);

      if (_.isString(aSortKeyValue)) {
        aSortKeyValue = _.toLower(aSortKeyValue);
        bSortKeyValue = _.toLower(bSortKeyValue);
      }

      if (this.ascending) {
        return this.ascendingSort(aSortKeyValue, bSortKeyValue);
      } else {
        return  this.desendingSort(aSortKeyValue, bSortKeyValue);
      }

      return 0;
    };
    this.customers.sort(comparator);
    
  }

  ascendingSort(aValue, bValue) {
      let output = 0;
      output = aValue < bValue ? -1 : output;
      output = aValue > bValue ? 1 : output;
      return output;
      //  if (aValue < bValue) {
      //    return -1; // dont swap
      //  }
      //  if (aValue > bValue) {
      //    return 1; // swap
      //  }
       // return 0;
  }

  desendingSort (aValue, bValue) {
    let output = 0;
    output = aValue < bValue ? 1 : output;
    output = aValue > bValue ? -1 : output;
    return output;
  }

  ngOnDestroy() {
    if (this.subscribeFn) {
      this.subscribeFn();
    }
  }

}
