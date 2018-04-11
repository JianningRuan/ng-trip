import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() hotTrip: Array<any>;
  @Output() clickTrip = new EventEmitter();

  clickIt(val) {
    console.log(val);
    this.clickTrip.emit(val.data[0].id);
  }
}
