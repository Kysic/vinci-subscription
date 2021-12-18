
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

  inProgress: boolean = false;
  subscriptionSent: boolean = false;
  errorMsg: string;

  constructor(
    private subscriptionService: SubscriptionService,
    private dialog: MatDialog,
  ) { }

  ngOnInit() {
  }

  async send(memberSubscription: MemberSubscription): Promise<void> {
    if (!this.inProgress) {
      this.inProgress = true;
      try {
        console.log('sending member subscription', memberSubscription);
        await this.subscriptionService.sendMemberSubscription(memberSubscription).toPromise();
        this.subscriptionSent = true;
      } catch (error) {
        this.showError(error);
      } finally {
        this.inProgress = false;
      }
    }
  }

  showError(errorMsg: string): void {
    this.dialog.open(DialogErrorComponent, {
      width: '500px',
      data: { errorMsg: errorMsg }
    });
  }

}