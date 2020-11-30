import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private baseUrl:String="http://localhost:9898"

  constructor(private http:HttpClient) { }
  sendEmail(data:any){
    return this.http.post(`${this.baseUrl}/sendEmail`,data)
  }
}
