import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private urlApi = 'http://localhost:5043'; // URL base de tu API

  constructor(private http: HttpClient) {}

  public getData(url: string): Observable<any> {
    const apiUrl = `${this.urlApi}/${url}`; // Construir la URL completa
    return this.http.get<any>(apiUrl);
  }
}
