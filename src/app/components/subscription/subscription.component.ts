
import { Component, OnInit } from '@angular/core';

import { MemberSubscription } from '../../model/member-subscription';

import { SubscriptionService } from '../../services/subscription/subscription.service';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.scss']
})
export class SubcriptionComponent implements OnInit {

  errorMsg: string;

  constructor(private subscriptionService: SubscriptionService) { }

  ngOnInit() {
  }

  send(memberSubscription: MemberSubscription): void {
    this.subscriptionService.sendMemberSubscription(memberSubscription);
  }

}