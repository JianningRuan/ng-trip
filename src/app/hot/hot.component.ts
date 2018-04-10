import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {HttpClient, HttpHandler, HttpParams} from "@angular/common/http";

import tripItem from './../../assets/js/trip-list'

@Component({
  selector: 'app-hot',
  templateUrl: './hot.component.html',
  styleUrls: ['./hot.component.scss']
})
export class HotComponent implements OnInit {

  dataSour: Observable<any>;
  product: Array<any> = [];
  banner: Array<any> = [];
  tripItem:Array<any>;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    if (tripItem.status === 0) {
      this.tripItem = tripItem.data.elements;
    }
    console.log(this.tripItem);
    /*this.http.get('http://m.breadtrip.com/api/v2/index/').subscribe((data) => {
      console.log(data);
    });
    console.log(this.product);*/
  }

}
