
import { Component } from '@angular/core';

@Component({
  selector: 'row',
  template: '<ng-content></ng-content>',
  styles: [':host { display: flex; flex-direction: row; flex-wrap: wrap; width: 100%; }']
})
export class RowComponent {

  constructor() { }

}