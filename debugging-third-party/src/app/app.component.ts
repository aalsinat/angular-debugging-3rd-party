import {Component} from '@angular/core';
// import 'lodash';
import {random} from 'lodash';

// declare var _: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  number = 0;

  onIncrease() {
    // this.number *= 2;
    // this.number = _.random(1, 10);
    this.number = random(1, 10);
  }
}
