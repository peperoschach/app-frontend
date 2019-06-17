import { Injectable } from '@angular/core'
import { Http } from '@angular/http'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { APP_API } from '../app.api';
import { APP_ID } from '../app.id';
import { ContentModel } from './content.model';


@Injectable()
export class ContentService {

  constructor(private http: Http){}


  getCityClimate(term: any): Observable<ContentModel[]> {
    return this.http.get(`${APP_API}/?appid=${APP_ID}&id=${term}&units=metric`)
                    .pipe(map(response => response.json()))
  }



}
