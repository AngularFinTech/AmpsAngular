import { Component } from '@angular/core';
import {AmpsService} from './amps.service';
import {nconf} from 'nconf';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularAmps';

  constructor(private ampsService: AmpsService) {
    nconf.argv().env().use('memory');
  }

  startAmps($event: MouseEvent): void  {

    this.ampsService.start();

  }
}
