import { Component } from '@angular/core';
import { flexible } from './../assets/js/common'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  ngOnInit() {
    flexible();
  }
}
