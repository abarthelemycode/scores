import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class ErrorInterceptor implements HttpInterceptor {
    constructor() { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {

          if (err.status === 403) {
            console.log('Error interceptors : code 403');
          }
          if (err.status === 404) {
            console.log('Error interceptors : code 404');
          }
          if (err.status === 500) {
            console.log('Error interceptors : code 500');
          }

          const error = err.error.message || err.statusText;
          return throwError(error);
        }));
    }
}
