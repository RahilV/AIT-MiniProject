import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[highlight]',
})
export class HighlightDirective {
  constructor(private eleRef: ElementRef) {
    eleRef.nativeElement.style.background = '#006dfe';
  }

  ngOnInit(): void {}
}
