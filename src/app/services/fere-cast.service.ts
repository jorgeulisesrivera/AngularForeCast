import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class FereCastService {

  constructor(private http:HttpClient) { 

  }

  getForeCast()
  {

    const headers = new HttpHeaders({
      'post1':'1000'
    })

    return this.http.get("https://api.openweathermap.org/data/2.5/forecast?id=7874740&appid=6ac9d35cb14c8b698da1245e9479b095&lang=es&units=metric")
    .pipe(map(data=>{
      return data['list'];
    }))
    
  }


}
