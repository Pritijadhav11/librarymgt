import { Injectable } from "@angular/core";
import {HttpInterceptor, HttpRequest, HttpHandler,HttpEvent } from '@angular/common/http';
import{Observable} from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor{
    constructor(){}
        intercept(req: HttpRequest<any>,next:HttpHandler):Observable<HttpEvent<any>>{
            const token=sessionStorage.getItem('token');
        {

        if(token){
            const newreq=req.clone({
                headers:req.headers.set("Authorization",token)
            });
            return next.handle(newreq);
        }else
        {
            return next.handle(req);
        }
        }

    }

}