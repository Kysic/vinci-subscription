import { Component } from '@angular/core';

@Component({
  selector: 'row-elt',
  template: '<ng-content></ng-content>',
  styles: [
    ':host { display: flex; flex-direction: column; flex-basis: 100%; flex: 1; }',
    ':host[shrink] { flex: 0 1 0; }',
  ]
})
export class RowEltComponent {

  constructor() { }

}