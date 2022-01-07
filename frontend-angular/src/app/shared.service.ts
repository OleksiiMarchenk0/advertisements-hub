import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Offer } from './interface/offer';
import { Category } from './interface/category';
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
  getCategory(id:number):Observable<Category>{
    return this.http.get<Category>(`${this.API_URL}/category/${id}`)
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
  getOffer(id:number):Observable<Offer>{
    return this.http.get<Offer>(`${this.API_URL}/offers/${id}`)
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


  private extractData(res:Response) {
    let body = res.json();
    return body || [];
}

private handleError(error:any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
        error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
}
}
