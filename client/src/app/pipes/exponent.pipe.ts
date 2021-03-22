import { Pipe, PipeTransform } from '@angular/core';

// pure-pipe works only when the component is loaded

@Pipe({
  name: 'exponent',
  pure: true,
})
export class ExponentPipe implements PipeTransform {
  transform(base: number, exponent: number): number {
    return Math.pow(base, exponent);
  }
}
