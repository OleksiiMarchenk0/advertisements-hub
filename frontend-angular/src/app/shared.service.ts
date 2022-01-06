import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SharedService {
readonly API_URL = 'http://127.0.0.1:8000';
  constructor(private http:HttpClient) { }

  getCategories():Observable<any[]>{
    console.log(this.http.get<any[]>(`${this.API_URL}/category/`));

    return this.http.get<any[]>(`${this.API_URL}/category/`)
  }
  addCategory(val:any):Observable<any[]>{
    return this.http.post<any[]>(`${this.API_URL}/category/`, val)
  }
  updateCategory(val:any):Observable<any[]>{
    return this.http.put<any[]>(`${this.API_URL}/category/`, val)
  }
  deleteCategory(val:number):Observable<any[]>{
    return this.http.delete<any[]>(`${this.API_URL}/category/${val}`)
  }
  getOffers():Observable<any[]>{
    return this.http.get<any[]>(`${this.API_URL}/offers/`)
  }
  addOffer(val:any):Observable<any[]>{
    return this.http.post<any[]>(`${this.API_URL}/offers/`, val)
  }
  updateOffer(val:any):Observable<any[]>{
    return this.http.put<any[]>(`${this.API_URL}/offers/`, val)
  }
  deleteOffer(val:number):Observable<any[]>{
    return this.http.delete<any[]>(`${this.API_URL}/offers/${val}`)
  }
  getAllCategoriesNames():Observable<any[]>{
    return this.http.get<any[]>(`${this.API_URL}/category/`)
  }
}
