
import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Member } from '../../../model/member';
import { MemberSubscription } from '../../../model/member-subscription';

@Component({
  selector: 'app-subscription-form',
  templateUrl: './subscription-form.component.html',
  styleUrls: ['./subscription-form.component.scss']
})
export class SubcriptionFormComponent {

  @Output() readonly memberSubscription = new EventEmitter<MemberSubscription>();

  firstnameMaxLength = 20;
  surnameMaxLength = 20;
  birthdayMinDate = new Date(1900, 0, 1);
  birthdayStartDate = new Date(1970, 0, 1);
  today = new Date();
  birthdayMaxDate = new Date(this.today.getFullYear() - 18, this.today.getMonth(), this.today.getDate());
  adddressMaxLength = 120;
  msgMaxLength = 1000;
  firstnameControl = new FormControl(null, [Validators.required, Validators.maxLength(this.firstnameMaxLength)]);
  surnameControl = new FormControl(null, [Validators.required, Validators.maxLength(this.surnameMaxLength)]);
  birthdayControl = new FormControl(null, [Validators.required]);
  emailControl = new FormControl(null, [Validators.required, Validators.email]);
  phoneNumberControl = new FormControl(null, [Validators.required, Validators.pattern("^[\+]?[0-9 \-]{10,}$")]);
  addressControl = new FormControl(null, [Validators.required, Validators.maxLength(this.adddressMaxLength)]);
  msgControl = new FormControl(null, [Validators.maxLength(this.msgMaxLength)]);
  subscriptionForm: FormGroup;

  constructor(fb: FormBuilder) {
    this.subscriptionForm = fb.group({
      firstname: this.firstnameControl,
      surname: this.surnameControl,
      birthday: this.birthdayControl,
      email: this.emailControl,
      phoneNumber: this.phoneNumberControl,
      addressControl: this.addressControl,
      msg: this.msgControl,
    });
  }

  submit(): void {
    const newMember: Member =  {
      surname: this.surnameControl.value,
      firstname: this.firstnameControl.value,
      birthday: this.birthdayControl.value,
      email: this.emailControl.value,
      phoneNumber: this.phoneNumberControl.value,
      address: this.addressControl.value,
    }
    const ms: MemberSubscription = {
      member: newMember,
      msg: this.msgControl.value,
    };
    this.memberSubscription.emit(ms);
  }

}