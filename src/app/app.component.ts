import { Component, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnChanges {
  // Bad
  // In this case, when you hover over it, getter will be executed twice.
  // Getter runs even though it's not involved.
  private _userName: string;

  get userName() {
    console.log('AppComponent.getter', this._userName);
    return this._userName;
  }

  set userName(value: string) {
    console.log('AppComponent.setter', value);
    this._userName = value;
  }

  // good
  name = 'Angular';

  ngOnChanges(changes: SimpleChanges) {
    console.log('AppComponent.ngOnChanges', changes);
  }
}
