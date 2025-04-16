import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { provideAnimations } from '@angular/platform-browser/animations';
import {PaymentService} from '../../services/payment.service';
import {PaymentCreate} from '../../models/payment';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatSelectModule
  ],
  providers: [provideAnimations(),PaymentService],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponent {
  private fb = new FormBuilder();

  paymentTypes: string[] = ['CREDIT_CARD', 'DEBIT_CARD', 'PAYPAL']; // 👈 esto soluciona el error

  constructor(private paymentService: PaymentService) {
    // Aquí puedes inicializar cualquier otra cosa que necesites
  }


  paymentForm = this.fb.group({
    typePayment: ['', Validators.required],
    Amount: [null, [Validators.required, Validators.min(0.01)]],
  });

  response = '';
  loading = false;

  onSubmit() {
    const paymentPayload: PaymentCreate = {
      typePayment: this.paymentForm.value.typePayment,
      amount: this.paymentForm.value.Amount,
    };
    if (this.paymentForm.invalid) {
      return;
    }else
    this.paymentService.pay(paymentPayload).subscribe(payment => {
      this.response = payment;
      console.log(payment);
    })
  }
}
