import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Subject, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token:any;

  apiUrl = "http://192.168.0.115:8081/blog/api";

  constructor(private http:HttpClient) { }

  // sendingData = new Subject<string>();

  // dataTransferMethod(data:any){
  //   this.sendingData.next(data);
  // }

  signIn(payload:any){
    return this.http.post(`${this.apiUrl}/auth/user/signin`,payload).pipe(
      map((res:any) => {
        this.token = res.token;
        console.log(this.token,'token=========');
        localStorage.setItem('token', this.token);
      })
    )
  }

  getToken(){
    return localStorage.getItem('token');
  }

  signUp(payload:any){
    return this.http.post(`${this.apiUrl}/auth/user/signup`,payload);
  }

  verifyOTP(payload:any){
    return this.http.post(`${this.apiUrl}/auth/validate-otp`,payload);
  }
}
