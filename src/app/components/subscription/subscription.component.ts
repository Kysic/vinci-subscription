
import { Component, OnInit } from '@angular/core';

import { MemberSubscription } from '../../model/member-subscription';
import { SubscriptionService } from '../../services/subscription/subscription.service';
import { MatDialog } from '@angular/material';
import { DialogErrorComponent } from '../dialog-error/dialog-error.component';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.scss']
})
export class SubcriptionComponent implements OnInit {

  subscriptionSent: boolean = false;
  errorMsg: string;

  constructor(
    private subscriptionService: SubscriptionService,
    private dialog: MatDialog,
  ) { }

  ngOnInit() {
  }

  send(memberSubscription: MemberSubscription): void {
    console.log('sending member subscription', memberSubscription);
    this.subscriptionService.sendMemberSubscription(memberSubscription).subscribe(
      () => this.subscriptionSent = true,
      error => this.showError(error)
    );
  }

  showError(errorMsg: string): void {
    this.dialog.open(DialogErrorComponent, {
      width: '500px',
      data: { errorMsg: errorMsg }
    });
  }

}