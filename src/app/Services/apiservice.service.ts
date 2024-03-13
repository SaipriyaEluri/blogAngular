import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  apiUrl = "http://192.168.0.164:8081/blog/blog";

  constructor(private http: HttpClient) { }

  createPost(payload:any){
    return this.http.post(`${this.apiUrl}/userBlog`, payload)
  }
}
