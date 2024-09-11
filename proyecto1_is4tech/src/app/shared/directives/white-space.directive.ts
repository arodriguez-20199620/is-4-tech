import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appWhiteSpace]'
})
export class WhiteSpaceDirective {

  constructor(private el: ElementRef) {}

  @HostListener('blur') onBlur() {
    const trimmedValue = this.el.nativeElement.value.trim();
    this.el.nativeElement.value = trimmedValue;
    console.log('Valor ingresado sin espacios:', trimmedValue);
  }
}
