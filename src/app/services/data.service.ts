import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private dataUrl: string = '../assets/data/data.json'; // Path to JSON file

  
    constructor(private http: HttpClient) {}
  
    getItems(): Observable<Product[]> {
      return this.http.get<Product[]>(this.dataUrl);
    }
}
