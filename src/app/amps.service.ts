import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AmpsService {

  private worker: Worker = null;

  constructor() {
    this.worker = new Worker('./angular-amps.worker', {type: 'module', name: 'AmpsWebWorker'});
    this.worker.onmessage = ({data}) => {
      this.processMessage(data);
    };
  }


  private processMessage(data: any): void {
    console.log('Data : ', data.data);
  }

  public start(): void {
    this.worker.postMessage({topic: 'orders'});
  }
}
