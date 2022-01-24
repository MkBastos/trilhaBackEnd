import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Category } from './category.model';

import {Observable, throwError} from 'rxjs';
import {map, catchError, retry} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BackEndService {

  private apiPath = "https://p38yx781aa.execute-api.us-east-1.amazonaws.com/Stage/"


  constructor(private http : HttpClient) { }


  /*getAll(): Observable<Category[]> {
    return this.http.get(this.apiPath + '/cateoria?user_id=miqueias_bastos').pipe(
      catchError(this.handleError),
      map(this.jsonDataToCategories)
    )
  }*/

  read(): Observable<Category[]> {
    return this.http.get<Category[]>(this.apiPath + 'categorias?user_id=miqueias_bastos').pipe(
      catchError(this.handleError),
      map(this.jsonDataToCategories)
    )
  }

  getById(id: number): Observable<Category> {
    const url= `${this.apiPath}/${id}`;
    return this.http.get(url).pipe (
      catchError(this.handleError),
      map(this.jsaonDataToCategory)
    )

  }

  create(category: Category) {
    category.user_id = "miqueias_bastos"
    category.id = 67
    console.log(category)
    return this.http.post(this.apiPath + 'categorias', category). pipe (
      catchError(error => {console.log(error); return ''})
    )

  }

  create1(category: Category): Observable<Category> {
    console.log("Serviço respondendo!")
    return this.http.post(this.apiPath + 'categorias?user_id=miqueias_bastos', category). pipe (
      catchError(this.handleError),
      map(this.jsaonDataToCategory)
    )
  }

  update(category: Category): Observable<Category> {
    const url= `${this.apiPath}/${category.id}`;
    return this.http.put(url, category). pipe(
      catchError(this.handleError),
      map(()=> category)
    )
  }

  delete(id: number): Observable<any> {
    const url= `${this.apiPath}/${id}`;
    return this.http.delete(url).pipe(
      catchError(this.handleError),
      map(() => null)
    )
  }

  private jsonDataToCategories (jsonData: any): Category[] {
    const categories: Category[] = [];
    jsonData.forEach((element: any) => categories.push(element as Category))
    return categories;
  }

  private jsaonDataToCategory(jsonData: any): Category {
    return jsonData as Category;
  }

  private handleError(error: any): Observable<any> {
    console.log("Erro na requisição => ", error);
    return throwError(error);
  }

}
