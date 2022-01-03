import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class InterceptorService implements HttpInterceptor {
  
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('InterceptorService');

    let headers = new HttpHeaders({
      'token': '123456789',
      'x-token':'another hash',
    })
    let reqCloned = req.clone({
      headers: headers
    });
    console.log('intercepted request', reqCloned);
    return next.handle(reqCloned);
  }

    
}
