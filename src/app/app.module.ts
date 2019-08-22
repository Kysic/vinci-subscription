import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, LOCALE_ID } from '@angular/core';
import { MatButtonModule, MatCardModule, MatDatepickerModule, MatDialogModule, MatInputModule,
         MatButtonToggleModule, MAT_DATE_LOCALE } from '@angular/material';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';

import { AppComponent } from './app.component';
import { SubcriptionComponent } from './components/subscription/subscription.component';
import { SubcriptionFormComponent } from './components/subscription/form/subscription-form.component';
import { RowModule } from './modules/row/row.module';
import { DialogErrorComponent } from './components/dialog-error/dialog-error.component';
import { FrenchPhoneNumberDirective } from './directives/french-phone-number';

registerLocaleData(localeFr);

@NgModule({
  declarations: [
    AppComponent,
    DialogErrorComponent,
    FrenchPhoneNumberDirective,
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
    RowModule,
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'fr-FR' },
    { provide: LOCALE_ID, useValue: 'fr-FR' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
