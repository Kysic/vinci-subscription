import { Component } from '@angular/core';

@Component({
  selector: 'responsive-row-elt',
  template: '<ng-content></ng-content>',
  styles: [':host { display: flex; flex-direction: column; flex-basis: 100%; flex: 1; }']
})
export class ResponsiveRowEltComponent {

  constructor() { }

}