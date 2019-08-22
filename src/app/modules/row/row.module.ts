import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RowComponent } from './row.component';
import { RowEltComponent } from './row-elt.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    RowComponent,
    RowEltComponent,
  ],
  declarations: [
    RowComponent,
    RowEltComponent,
  ]
})
export class RowModule { }