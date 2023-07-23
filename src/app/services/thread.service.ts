import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ThreadService {
  private _jsonURL = 'assets/data.json';

  constructor(private http: Http) {}

  getThreads(): Observable<any> {
    return this.http.get(this._jsonURL).map(res => res.json());
  }
}