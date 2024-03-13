import { HttpEvent, HttpHandler, HttpInterceptor, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()

export class httpInterceptor implements HttpInterceptor{

  constructor(private service:AuthService){}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      const authToken = this.service.getToken();
      const authReq = req.clone({
        setHeaders: {
          Authorization : `Bearer ${authToken}`
        }
      });
      return next.handle(authReq);
  }
  
}
