import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {HttpClient} from "@angular/common/http";
import * as _ from 'lodash'

@Component({
  selector: 'app-hot',
  templateUrl: './hot.component.html',
  styleUrls: ['./hot.component.scss']
})
export class HotComponent implements OnInit {

  dataSour: Observable<any>;
  product: Array<any> = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('http://m.breadtrip.com/api/v2/index/').subscribe((data) => {
      console.log(data);
    });
    console.log(this.product);
  }

}
