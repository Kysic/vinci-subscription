import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResponsiveRowComponent } from './responsive-row.component';
import { ResponsiveRowEltComponent } from './responsive-row-elt.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    ResponsiveRowComponent,
    ResponsiveRowEltComponent,
  ],
  declarations: [
    ResponsiveRowComponent,
    ResponsiveRowEltComponent,
  ]
})
export class ResponsiveRowModule { }