import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './core/containers/main/main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        loadChildren: './products/products.module#ProductsModule'
      },
      {
        path: 'checkout',
        loadChildren: './shopping-cart/shopping-cart.module#ShoppingCartModule'
      },
      { path: 'session', loadChildren: './auth/auth.module#AuthModule' },
      { path: 'seller', loadChildren: './seller/seller.module#SellerModule' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
