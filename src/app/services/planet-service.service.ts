import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PlanetService {
  private API_URL = environment.apiUrl;
  constructor(private httpClient: HttpClient) { }

  getPlanets(nrPage): Observable<any> {
    return this.httpClient.get(`${this.API_URL}?page=${nrPage}`);
  }
  getPlanetDetails(id): Observable<any> {
    return this.httpClient.get(`${this.API_URL}${id}`);
  }

}
