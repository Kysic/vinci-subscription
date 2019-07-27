import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-subcription',
  templateUrl: './subcription.component.html',
  styleUrls: ['./subcription.component.scss']
})
export class SubcriptionComponent implements OnInit {

  firstnameMaxLength = 20;
  firstnameControl = new FormControl(null, [Validators.required, Validators.maxLength(this.firstnameMaxLength)]);
  surnameMaxLength = 20;
  surnameControl = new FormControl(null, [Validators.required, Validators.maxLength(this.surnameMaxLength)]);
  birthdayMinDate = new Date(1900, 0, 1);
  birthdayStartDate = new Date(1970, 0, 1);
  today = new Date();
  birthdayMaxDate = new Date(this.today.getFullYear() - 18, this.today.getMonth(), this.today.getDate());
  birthdayControl = new FormControl(null, [Validators.required]);
  mailControl = new FormControl(null, [Validators.required, Validators.email]);
  phoneNumberControl = new FormControl(null, [Validators.required]);
  adddressMaxLength = 120;
  addressControl = new FormControl(null, [Validators.required, Validators.maxLength(this.adddressMaxLength)]);
  msgMaxLength = 1000;
  msgControl = new FormControl(null, [Validators.maxLength(this.msgMaxLength)]);
  subscriptionForm: FormGroup;

  constructor(fb: FormBuilder) {
    this.subscriptionForm = fb.group({
      firstname: this.firstnameControl,
      surname: this.surnameControl,
      birthday: this.birthdayControl,
      mail: this.mailControl,
      phoneNumber: this.phoneNumberControl,
      msg: this.msgControl,
    });
  }

  ngOnInit() {
  }

}
