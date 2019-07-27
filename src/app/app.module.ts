import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatCardModule, MatDatepickerModule, MatInputModule, MatNativeDateModule } from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SubcriptionComponent } from './components/subscription/subscription.component';
import { SubcriptionFormComponent } from './components/subscription/form/subscription-form.component';
import { ResponsiveRowModule } from './modules/responsive-row/responsive-row.module';

@NgModule({
  declarations: [
    AppComponent,
    SubcriptionComponent,
    SubcriptionFormComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    ResponsiveRowModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
