import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatCardModule, MatDatepickerModule, MatDialogModule, MatInputModule, MatNativeDateModule } from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';

import { AppComponent } from './app.component';
import { SubcriptionComponent } from './components/subscription/subscription.component';
import { SubcriptionFormComponent } from './components/subscription/form/subscription-form.component';
import { ResponsiveRowModule } from './modules/responsive-row/responsive-row.module';
import { DialogErrorComponent } from './components/dialog-error/dialog-error.component';

@NgModule({
  declarations: [
    AppComponent,
    DialogErrorComponent,
    SubcriptionComponent,
    SubcriptionFormComponent,
  ],
  entryComponents: [DialogErrorComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    LoadingBarHttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatDatepickerModule,
    MatDialogModule,
    MatInputModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    ResponsiveRowModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
