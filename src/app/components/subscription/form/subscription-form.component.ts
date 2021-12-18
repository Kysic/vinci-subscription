
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

import * as moment from 'moment';

import { Member } from '../../../model/member';
import { MemberSubscription } from '../../../model/member-subscription';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material';
import { MomentDateAdapter } from '@angular/material-moment-adapter';

export const MY_DATE_PICKER_FORMATS = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'app-subscription-form',
  templateUrl: './subscription-form.component.html',
  styleUrls: ['./subscription-form.component.scss'],
  providers: [
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    { provide: MAT_DATE_FORMATS, useValue: MY_DATE_PICKER_FORMATS},
  ],
})
export class SubcriptionFormComponent {

  @Input() disabled: boolean = false;
  @Output() readonly memberSubscription = new EventEmitter<MemberSubscription>();

  firstnameMaxLength = 20;
  surnameMaxLength = 20;
  birthdayMinDate = new Date(1900, 0, 1);
  birthdayStartDate = new Date(1980, 0, 1);
  today = new Date();
  birthdayMaxDate = new Date(this.today.getFullYear() - 18, this.today.getMonth(), this.today.getDate());
  adddressMaxLength = 120;
  messageMaxLength = 1000;
  genderControl = new FormControl('F', [Validators.required]);
  firstnameControl = new FormControl(null, [Validators.required, Validators.maxLength(this.firstnameMaxLength)]);
  surnameControl = new FormControl(null, [Validators.required, Validators.maxLength(this.surnameMaxLength)]);
  birthdayControl = new FormControl(null, [Validators.required]);
  emailControl = new FormControl(null, [Validators.required, Validators.email]);
  phoneNumberControl = new FormControl(null, [Validators.required, Validators.pattern("^[\+]?[0-9 \-]{10,30}$")]);
  addressControl = new FormControl(null, [Validators.required, Validators.maxLength(this.adddressMaxLength)]);
  messageControl = new FormControl(null, [Validators.maxLength(this.messageMaxLength)]);
  subscriptionForm: FormGroup;

  constructor(fb: FormBuilder) {
    this.subscriptionForm = fb.group({
      gender: this.genderControl,
      firstname: this.firstnameControl,
      surname: this.surnameControl,
      birthday: this.birthdayControl,
      email: this.emailControl,
      phoneNumber: this.phoneNumberControl,
      addressControl: this.addressControl,
      message: this.messageControl,
    });
  }

  submit(): void {
    const newMember: Member =  {
      gender: this.genderControl.value,
      surname: this.surnameControl.value,
      firstname: this.firstnameControl.value,
      birthday: moment(this.birthdayControl.value).format('DD/MM/YYYY'),
      email: this.emailControl.value,
      phoneNumber: this.phoneNumberControl.value,
      address: this.addressControl.value,
    }
    const ms: MemberSubscription = {
      member: newMember,
      message: this.messageControl.value,
    };
    this.memberSubscription.emit(ms);
  }

}
