import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor{
  intercept(req: HttpRequest<any>, next: HttpHandler){

    console.log("Came here in middleware");

    if(req.url.includes("cart") && localStorage.token){
      let headers= new HttpHeaders();
      headers=headers.append("authtoken",localStorage.token);

      var req= req.clone({
        headers:headers

      })


    }
    return next.handle(req)
  }

  constructor() { }

}
