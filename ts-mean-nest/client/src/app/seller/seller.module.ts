import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppMaterialModule } from '../shared/app-material.module';
import { ManageProductsComponent } from './manage-products/manage-products.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { SellerRoutingModule } from './seller-routing.module';

@NgModule({
  declarations: [ManageProductsComponent, ProductFormComponent],
  imports: [
    CommonModule,
    SellerRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppMaterialModule
  ]
})
export class SellerModule { }
