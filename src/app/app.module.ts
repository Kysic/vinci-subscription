import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatCardModule, MatDatepickerModule, MatDialogModule, MatInputModule,
         MatButtonToggleModule, MAT_DATE_LOCALE } from '@angular/material';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
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
    MatButtonToggleModule,
    MatCardModule,
    MatDatepickerModule,
    MatDialogModule,
    MatInputModule,
    MatMomentDateModule,
    ReactiveFormsModule,
    ResponsiveRowModule,
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'fr-FR' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
