import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-subcription',
  templateUrl: './subcription.component.html',
  styleUrls: ['./subcription.component.scss']
})
export class SubcriptionComponent implements OnInit {

  firstnameMaxLength = 20;
  firstnaneControl = new FormControl(null, [Validators.required, Validators.maxLength(this.firstnameMaxLength)]);
  surnameMaxLength = 20;
  surnameControl = new FormControl(null, [Validators.required, Validators.maxLength(this.surnameMaxLength)]);
  birthdayMinDate = new Date(1900, 0, 1);
  birthdayStartDate = new Date(1970, 0, 1);
  today = new Date();
  birthdayMaxDate = new Date(this.today.getFullYear() - 18, this.today.getMonth(), this.today.getDate());
  birthdayControl = new FormControl(null, [Validators.required]);
  adddressMaxLength = 120;
  addressControl = new FormControl(null, [Validators.required, Validators.maxLength(this.adddressMaxLength)]);

  constructor() {}

  ngOnInit() {
  }

}
