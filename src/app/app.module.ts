import { AuthInterceptorService } from './auth-interceptor.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CarouselComponent } from './carousel/carousel.component';
import { MocktaillistComponent } from './mocktaillist/mocktaillist.component';
import { SoloCockTailComponent } from './solo-cock-tail/solo-cock-tail.component';
import { SearchItemComponent } from './search-item/search-item.component';
import { CartComponent } from './cart/cart.component';
import { IncrementPipe } from './increment.pipe';
import { CheckoutComponent } from './checkout/checkout.component';
import { PaymentComponent } from './payment/payment.component';
import { SummaryComponent } from './summary/summary.component';
import { AddressComponent } from './address/address.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    CarouselComponent,
    MocktaillistComponent,
    SoloCockTailComponent,
    SearchItemComponent,
    CartComponent,
    IncrementPipe,
    CheckoutComponent,
    PaymentComponent,
    SummaryComponent,
    AddressComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [{provide:HTTP_INTERCEPTORS, useClass:AuthInterceptorService,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
