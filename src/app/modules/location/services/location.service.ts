import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ILocation} from "../models/location";
import {environment} from "../../../../environments/environment";
import { IAffectedResult } from 'src/app/shared/models/api';

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

  remove(locationId: string): Observable<IAffectedResult>{
    return this._http.delete<IAffectedResult>(`${environment.apiBaseUrl}/locations/${locationId}`)
  }

  update(locationId: string, locationDto: ILocation): Observable<IAffectedResult>{
    return this._http.patch<IAffectedResult>(`${environment.apiBaseUrl}/locations/${locationId}`, locationDto)
  }
}
