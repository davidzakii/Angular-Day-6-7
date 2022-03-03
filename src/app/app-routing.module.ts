import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { ProductCardListComponent } from './product-card-list/product-card-list.component';
import { ProductDatailsComponent } from './product-datails/product-datails.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuardGuard } from './auth-guard.guard';
import { CounterComponent } from './counter/counter.component';


const routes: Routes = [
  {
    path : "",
    component : ProductCardListComponent
  },

  {
    path:  "login",
    component: LoginComponent
  },

  {
    path: "register",
    component: RegisterComponent
  },

  {
    path: "product-datails/:id",
    component: ProductDatailsComponent
  },

  {
    path: "cart-private",
    component: ProductDatailsComponent,
    canActivate: [AuthGuardGuard]
  },

  {
    path: "cart",
    component: ProductDatailsComponent,
  },

  {
    path: "counter/:id",
    component: CounterComponent,
  },

  {
    path: "**",
    component: NotFoundPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
