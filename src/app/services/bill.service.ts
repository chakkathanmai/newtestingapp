import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bill } from '../models/bill';

@Injectable({
  providedIn: 'root'
})
export class BillService {
  private baseUrl = 'http://localhost:8081/bill-api/bills';
  constructor(private http:HttpClient) { }

  getByCardNumber=(cardNumber:number):Observable<Bill[]>=>{
       let url=`${this.baseUrl}/card/${cardNumber}`;
       return this.http.get<Bill[]>(url);
  }


}

