import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';

import { MemberSubscription } from '../../model/member-subscription';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {

  constructor(private http: HttpClient) { }

  sendMemberSubscription(memberSubscription: MemberSubscription): void {
    console.log(memberSubscription.msg);
  }

}
