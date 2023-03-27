import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'hello',
  template: `
    <h1>Hello {{ name }}!</h1>
  `,
  styles: [
    `
      h1 {
        font-family: Lato;
      }
    `,
  ],
})
export class HelloComponent implements OnChanges {
  @Input() name: string;

  ngOnChanges(changes: SimpleChanges) {
    console.log('HelloComponent.ngOnChanges', changes);
  }
}
