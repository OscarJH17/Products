import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'roundoff'
})
export class RoundoffPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    if(value && value.split('.000').length>1){
      return  value.split('.000').join('');
    }
    return  value | 0;
  }

}
