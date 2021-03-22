import { Pipe, PipeTransform } from '@angular/core';

// impure-pipe works for every change in the component

@Pipe({
  name: 'impureAdd',
  pure: false,
})
export class ImpureAddPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }
}
