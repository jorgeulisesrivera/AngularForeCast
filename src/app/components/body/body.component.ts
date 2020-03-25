import { Component, OnInit } from '@angular/core';
//import {HttpClient} from '@angular/common/http'
import {FereCastService} from '../../services/fere-cast.service'

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  foreCast = [];
  constructor(private forecast: FereCastService) { 
    
    forecast.getForeCast()
    .subscribe((data:any)=>{
      //console.log("mi data forecast: ",data)
      this.foreCast = data;
    })


  }
  /*
  foreCast = [];
  constructor(private http:HttpClient) { 
    this.http.get("https://api.openweathermap.org/data/2.5/forecast?id=7874740&appid=6ac9d35cb14c8b698da1245e9479b095&lang=es&units=metric")
    .subscribe((data:any)=>{
      console.log("mi data forecast: ",data)
      this.foreCast = data.list;
    })
  }*/

  ngOnInit(): void {
  }

}
