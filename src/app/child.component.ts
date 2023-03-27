import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'child',
  template: `
    <p>Child {{ name }}</p>
  `,
})
export class ChildComponent implements OnChanges {
  private _name: string;

  @Input()
  set name(value: string) {
    console.log('ChildComponent.setter', value);
    this._name = value;
  }

  get name() {
    console.log('ChildComponent.getter', this._name);
    return this._name;
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ChildComponent.ngOnChanges', changes);
  }
}
