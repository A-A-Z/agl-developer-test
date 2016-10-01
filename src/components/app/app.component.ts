import { Component } from '@angular/core';
import { RequestService } from '../../services/request.service';

@Component({
  selector   : 'app',
  templateUrl: './app.component.html',
  providers: [RequestService]
})
export class AppComponent {
  getData:string;

  constructor (private _requestService: RequestService ) {  this.onGet(); }

  onGet(){
    console.log('Getting user now.1');
      this._requestService.getUser().subscribe(
        data =>this.getData = JSON.stringify(data),
        error=>console.log('ERROR',error),
        ()=>console.log('Finished Get2',this.getData)
      );
  }
}
