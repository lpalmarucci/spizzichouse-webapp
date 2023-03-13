import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ILocation} from "../models/location";
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class LocationService {


  constructor(private _http: HttpClient) {
  }

  getAll(): Observable<ILocation[]> {
    return this._http.get<ILocation[]>(`${environment.apiBaseUrl}/locations`)
  }

  create(location: ILocation): Observable<ILocation>{
    return this._http.post<ILocation>(`${environment.apiBaseUrl}/locations`, location);
  }
}
