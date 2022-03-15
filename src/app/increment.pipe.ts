import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'increment'
})
export class IncrementPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    return value+1;
  }

}
