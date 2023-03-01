import {Injectable} from '@angular/core';
import {IAccessToken, ILogin} from "../models/authentication";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {BehaviorSubject, catchError, map, Observable, of, tap} from "rxjs";
import {ACCESS_TOKEN} from "../../../shared/costants/localStorageKeys";
import {MessageService} from "primeng/api";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private readonly API_URL: string = environment.apiBaseUrl;
  private readonly loggedIn = new BehaviorSubject<boolean>(this.getAccessToken());

  get isLoggedIn(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }

  constructor(private _http: HttpClient, private messageService: MessageService) {
  }

  login(loginDto: ILogin): Observable<boolean> {
    return this._http.post<IAccessToken>(`${this.API_URL}/auth/login`, loginDto).pipe(
      tap((data) => this.saveAccessToken(data.access_token)),
      tap(() => this.loggedIn.next(true)),
      map(() => true),
      catchError((err: HttpErrorResponse) => {
        this.messageService.add({
          summary: `An error occurred (${err.error.statusCode})`,
          detail: err.error.message,
          severity: 'error',
        })
        return of(false)
      })
    );
  }

  private saveAccessToken(token: string): void {
    localStorage.setItem(ACCESS_TOKEN, token)
  }

  private getAccessToken(): boolean {
    const token: string | null = localStorage.getItem(ACCESS_TOKEN);
    if (token)
      return !!token;
    return false;
  }
}
