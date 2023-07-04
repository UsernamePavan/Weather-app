import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  apiKey = 'd378acb1ff1cbdf4c1908c0259e4fb52';
  days=5
  constructor(private http: HttpClient) {
    
   }

  getforcastweather(location:string){
    const apiUrls=`https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${this.apiKey}`
     return this.http.get(apiUrls)
  }
}
