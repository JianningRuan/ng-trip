import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {HttpClient, HttpHandler, HttpParams} from "@angular/common/http";
import { Router } from '@angular/router'

import tripItem from './../../assets/js/trip-list'

@Component({
  selector: '[app-hot]',
  templateUrl: './hot.component.html',
  styleUrls: ['./hot.component.scss']
})
export class HotComponent implements OnInit {

  dataSour: Observable<any>;
  tripItem:Array<any>;
  banner: Array<any> = []; // banner
  hotTrip:Array<any>; // 旅行日志
  destinationIn:Array<any>; // 国内目的地
  destinationOut:Array<any>; // 国外目的地


  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    if (tripItem.status === 0) {
      this.tripItem = tripItem.data.elements;

      this.banner = tripItem.data.elements[0].data;
      this.hotTrip = tripItem.data.elements.slice(7);
      this.destinationIn = tripItem.data.search_data[1].elements;
      this.destinationOut = tripItem.data.search_data[0].elements;
    }
    console.log(this.hotTrip);
    /*this.http.get('http://m.breadtrip.com/api/v2/index/').subscribe((data) => {
      console.log(data);
    });
    console.log(this.product);*/
  }

  clickTripItem(id){
    console.log(id);
    this.router.navigate(['tripDetail'], {
      queryParams: {
        id: id
      }
    })
  }

}
