import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import {HttpClient} from '@angular/common/http'
import {ProductListResponseModel} from 'src/app/models/productListResponseModel';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products:Product[] = [];
  apiUrl= 'https://localhost:44365/api/products/getall';
  constructor(private httpClient:HttpClient) {}

  ngOnInit(): void {
    this.getProducts();
    console.log("Çalıştı")
  }

  getProducts(){
    this.httpClient
    .get<ProductListResponseModel>(this.apiUrl)
    .subscribe((response)=>{
    this.products = response.data
     });
  }
}
