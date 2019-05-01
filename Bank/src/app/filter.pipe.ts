import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'FilterPipe'
})
export class FilterPipe implements PipeTransform {
  transform(value, args?) {    
    let field1 = args;
    return value.filter(fieldItem => {
      if (!field1) {
          return true;
      }
      if(!fieldItem.PostalAddress.TownName) {
          return true;
      }
      let pos = fieldItem.PostalAddress.TownName.toLowerCase().indexOf(field1.toLowerCase());
      if(pos !== -1){
        return true; 
      }
    });
  }
}