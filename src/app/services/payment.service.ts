import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PaymentCreate} from '../models/payment';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private http: HttpClient) { }

  pay(payment: any) {
    return this.http.post<any>(`${environment.baseUrl}/pagos/${payment.typePayment}?monto=${payment.amount}`, { monto: payment.amount });
  }
}
