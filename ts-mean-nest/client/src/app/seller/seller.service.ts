import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';
import { Product } from '../shared/model/product';

@Injectable({
  providedIn: 'root'
})
export class SellerService {

  private readonly API = `${environment.baseUrl}/product`;

  constructor(private http: HttpClient) { }

  load() {
    return this.http.get<Product[]>(this.API);
  }
}
