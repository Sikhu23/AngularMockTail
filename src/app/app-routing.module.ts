import { SummaryComponent } from './summary/summary.component';
import { AddressComponent } from './address/address.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CartComponent } from './cart/cart.component';
import { SearchItemComponent } from './search-item/search-item.component';
import { SoloCockTailComponent } from './solo-cock-tail/solo-cock-tail.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaymentComponent } from './payment/payment.component';
import { SecurityServiceService } from './security-service.service';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'cart',canActivate:[SecurityServiceService],component:CartComponent},
  {path:'solomocktail/:id',component:SoloCockTailComponent},
  {path:'search',component:SearchItemComponent},
  {path:'checkout',canActivate:[SecurityServiceService],component:CheckoutComponent,children:[
    {path:'address',component:AddressComponent},
    {path:'payment',component:PaymentComponent},
    {path:'cart',component:CartComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
