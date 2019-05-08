import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageProductsComponent } from './manage-products/manage-products.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { AuthService } from '../auth/auth.service';

const routes: Routes = [
  { path: 'manage', component: ManageProductsComponent },
  { path: 'new-product', component: ProductFormComponent },
  { path: 'edit-product', component: ProductFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SellerRoutingModule { }
