// Imports
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { IPerson } from '../models/iperson.model.ts';

@Injectable()
export class RequestService {
  constructor (private _http:Http) {}

  private commentsUrl = 'http://localhost:1337/agl-developer-test.azurewebsites.net/people.json';

  getPeople(): Observable<IPerson[]> {
    return this._http.get(this.commentsUrl)
      .map((response: Response) => <IPerson[]>response.json())
      .do(data => console.log('Result:',data))
      .catch(this.handleError)
  }

  private handleError(error: Response) {
    return Observable.throw(error.json().error || 'Server error');
  }
}
