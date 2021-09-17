import { College } from './../../../../api-interfaces/src/lib/api-interfaces';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



const BASE_URL = 'http://universities.hipolabs.com/';
const MODEL = 'search?country=United+States';



@Injectable({
  providedIn: 'root'
})
export class CollegeService {


  constructor(private http: HttpClient) { }

  getAll(): Observable<College[]> {
    return this.http.get<College[]>(this.getUrl())
  };

  getOne(id: string): Observable<College> {
    return this.http.get<College>(this.getUrlById(id))
  }

  private getUrl() {
    return `${BASE_URL}${MODEL}`
  };

  private getUrlById(id) {
    return `${this.getUrl()}/${id}`
  }
}
