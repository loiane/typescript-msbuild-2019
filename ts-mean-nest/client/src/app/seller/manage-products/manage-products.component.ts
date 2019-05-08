import { Component, OnInit } from '@angular/core';
import { SellerService } from '../seller.service';
import { Observable } from 'rxjs';
import { Product } from '../../shared/model/product';

@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.sass']
})
export class ManageProductsComponent implements OnInit {

  products$: Observable<Product[]>;

  constructor(private service: SellerService) { }

  ngOnInit() {
    this.products$ = this.service.load();
  }

}
