import { Products } from './../../model/communications/products';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class InputOutService {
  private url = {
    products: 'products',
  };
  constructor(private http: HttpClient) {}

  get(): Observable<Products[]> {
    return this.http.get<Products[]>(environment.serverUrl + this.url.products);
  }
}
