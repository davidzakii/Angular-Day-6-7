import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'showStock'
})
export class ShowStockPipe implements PipeTransform {

  transform(value: number): any {
    if(value == 0){
      return "don't Show stock"
    }

    return 'in stock'
  }

}
