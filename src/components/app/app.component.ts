import { Component } from '@angular/core';
import { NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common'
import { RequestService } from '../../services/request.service';
import { IPerson } from '../../models/iperson.model.ts';

@Component({
  selector   : 'app',
  templateUrl: './app.component.html',
  providers: [RequestService]
})

export class AppComponent {
  loadStates: string[];
  loadStateKey: number;
  errorMessage: string;
  personData: IPerson[];

  constructor (private _requestService: RequestService ) {
    this.loadStates = [
      'loading',
      'results',
      'no-results',
      'error'
    ]
    this.loadStateKey = 0;
  }

  ngOnInit(): void {
    this.getPeople();
  }

  getPeople() {
    this._requestService.getPeople()
      .subscribe(
        data => this.loadData(data),
        error => this.handleError(<any>error)
      )
  }

  loadData(data) {
    this.personData = data;
    if ( data.length ) {
      this.loadStateKey = 1;
    } else {
      this.loadStateKey = 2;
    }
  }

  handleError(error) {
    this.errorMessage = <any>error;
    this.loadStateKey = 3;
  }

}
