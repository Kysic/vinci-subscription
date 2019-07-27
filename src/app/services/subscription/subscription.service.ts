import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { environment } from '../../../environments/environment';

import { MemberSubscription } from '../../model/member-subscription';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {

  constructor(private http: HttpClient) { }

  sendMemberSubscription(memberSubscription: MemberSubscription): Observable<void> {
    console.log('sending member subscription', memberSubscription);
    return this.http.post<void>(environment.subscriptionApiUrl, memberSubscription, httpOptions).pipe(
        catchError(err => {
          console.log('Error while sending member subscription', err);
          return throwError(err.message);
        })
    )
  }

}
