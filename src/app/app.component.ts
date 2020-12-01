import { Component } from '@angular/core';
import {AmpsService} from './amps.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularAmps';

  constructor(private ampsService: AmpsService) {
  }

  startAmps($event: MouseEvent): void  {

    this.ampsService.start();

  }
}
