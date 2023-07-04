import { Component } from '@angular/core';
import {ProductsService} from '../products.service'

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {
  location: any
  currentWeather: any;
  celcius:any
  forecastWeather: any;
  humidity:any
  TodayDate: Date;
  days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  constructor(private ProductsService:ProductsService) {
    this.TodayDate =new Date()
}


getforecast(){
    this.ProductsService.getforcastweather(this.location).subscribe((data)=>{
         console.log("data forecast",data)
         this.forecastWeather = data
         this.forecastWeather.list.forEach((element:any) => {
              element.day = this.days[new Date(element.dt_txt).getDay()]
         });
         this.forecastWeather.list = this.forecastWeather.list.filter((obj:any, pos:any, arr:any) => {
            return arr.map((mapObj:any) => mapObj.day).indexOf(obj.day) === pos;
        });
        this.currentWeather =this.forecastWeather.list[0]
         console.log(this.forecastWeather)
    })
}
transform(value: number): number {
  return Math.round(value);
}
}
