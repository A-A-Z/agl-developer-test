import { Component } from '@angular/core';
import { RequestService } from '../../services/request.service';
import { IPerson } from '../../models/iperson.model.ts';

@Component({
  selector   : 'app',
  templateUrl: './app.component.html',
  providers: [RequestService]
})
export class AppComponent {
  errorMessage: string;
  personData: IPerson[];

  constructor (private _requestService: RequestService ) {}

  ngOnInit(): void {
    this.getPeople();
  }

  getPeople() {
    this._requestService.getPeople()
      .subscribe(
        data => this.personData = data,
        error => this.errorMessage = <any>error
      )
  }

}
