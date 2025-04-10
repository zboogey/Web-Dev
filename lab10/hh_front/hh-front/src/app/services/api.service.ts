import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { Company, Vacancy } from '../models/company';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'http://localhost:8000/api/';

  constructor(private http: HttpClient) {
    console.log('ApiService initialized');
  }

  getCompanies(): Observable<Company[]> {
    console.log('Making request to:', `${this.apiUrl}companies/`);
    return this.http.get<Company[]>(`${this.apiUrl}companies/`).pipe(
      tap((data) => console.log('Response received:', data)),
      catchError((error: HttpErrorResponse) => {
        console.error('Request failed:', {
          status: error.status,
          statusText: error.statusText,
          message: error.message,
          url: error.url,
        });
        return throwError(() => error);
      })
    );
  }

  getCompanyVacancies(companyId: number): Observable<Vacancy[]> {
    console.log(
      'Making request to:',
      `${this.apiUrl}companies/${companyId}/vacancies/`
    );
    return this.http
      .get<Vacancy[]>(`${this.apiUrl}companies/${companyId}/vacancies/`)
      .pipe(
        tap((data) => console.log('Vacancies response:', data)),
        catchError((error: HttpErrorResponse) => {
          console.error('Vacancies request failed:', error);
          return throwError(() => error);
        })
      );
  }
}
