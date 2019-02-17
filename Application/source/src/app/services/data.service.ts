import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IData } from '../model/IData';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class DataService {
  constructor(private http: HttpClient) {}

  data = '../mocks/data/data.json';
  url =
    'https://pixabay.com/api/?key=11629623-dad070788addd8e348e861320&q=yellow+flowers&image_type=photo&pretty=true';

  //   getData(): Observable<IData[]> {
  //     return this.http.get<IData[]>(
  //       'https://api.giphy.com/v1/gifs/trending?api_key=ia095O4YgIMFHd55m0xehdmhCx2tiNGA&limit=10&rating=PG-13'
  //     );
  //   }

  //   test
  getData(): Observable<any[]> {
    return this.http.get<any[]>(this.url);
  }
}
