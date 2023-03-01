import {Injectable} from '@angular/core';
import {IAccessToken, ILogin} from "../models/authentication";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {catchError, map, Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private readonly API_URL: string = environment.apiBaseUrl;

  constructor(private _http: HttpClient) {
  }

  login(loginDto: ILogin): Observable<boolean> {
    return this._http.post<IAccessToken>(`${this.API_URL}/auth/login`, loginDto).pipe(
      map(() => true),
      catchError(() => of(false))
    );
  }
}
