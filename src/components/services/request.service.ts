// Imports
import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
//import { Comment }           from '../model/comment';
import {Observable} from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class RequestService {
     // Resolve HTTP using the constructor
     constructor (private _http:Http) {}
     // private instance variable to hold base url
     //private commentsUrl = 'http://localhost:3000/api/comments';

    getUser(){
      return this._http.get('http://agl-developer-test.azurewebsites.net/people.json')
        .map(res=>res.json());
    };
}
