import { NgModule,LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr);

import {FormsModule} from "@angular/forms";
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule,HTTP_INTERCEPTORS } from'@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductCardItemComponent } from './product-card-item/product-card-item.component';
import { ProductCardListComponent } from './product-card-list/product-card-list.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ShowStockPipe } from './show-stock.pipe';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductDatailsComponent } from './product-datails/product-datails.component';
import { CounterComponent } from './counter/counter.component';
import { RequestInterceptor } from './request.interceptor'
import { SpinnerComponent } from './spinner/spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductCardItemComponent,
    ProductCardListComponent,
    LoginComponent,
    RegisterComponent,
    ShowStockPipe,
    NotFoundPageComponent,
    NavbarComponent,
    ProductDatailsComponent,
    CounterComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    {  provide:HTTP_INTERCEPTORS,
      useClass:RequestInterceptor,
      multi:true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
