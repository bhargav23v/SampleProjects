import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class RepositoryService {

  private branchesUrl = "https://api.halifax.co.uk/open-banking/v2.2/branches";

  getBranches(): Observable<any> {
    // TODO: send the message _after_ fetching the heroes
    return this.http.get<any>(this.branchesUrl);
  }

  getBranch(id: Number): Observable<any> {
    let list: any[] = [];
    this.getBranches().subscribe(response => {
      list = response.data[0].Brand[0].Branch.filter((item: any) => {
        return item.Identification == id;
      });
    });
    return list[0];
  }

  constructor(private http: HttpClient) { }
}
