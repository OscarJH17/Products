import { HttpClient, HttpHeaders } from '@angular/common/http';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  public productList = new BehaviorSubject(null);
  constructor(private http: HttpClient) { }

  getProductsList(params:any){
    return this.http.get("https://www.blibli.com/backend/search/products",{params:params})
  }

  setProductList(data:any){
    this.productList.next(data);
  }
}
