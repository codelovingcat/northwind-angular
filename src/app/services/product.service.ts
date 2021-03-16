import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductListResponseModel } from '../models/productListResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl= 'https://localhost:44365/api/products/getall';

  constructor(private httpClient:HttpClient) { }

  getProducts() : Observable<ProductListResponseModel>{
    return this.httpClient.get<ProductListResponseModel>(this.apiUrl)
  }
}
