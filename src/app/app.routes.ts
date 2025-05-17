import { Routes } from '@angular/router';

export const routes: Routes = [
  {path:'', redirectTo:'payment', pathMatch:'full'},
  {path:'payment', loadComponent: () => import('./components/payment/payment.component').then(m => m.PaymentComponent)},
];
