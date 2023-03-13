import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {catchError, Observable} from 'rxjs';
import {AuthenticationService} from "../modules/authentication/services/authentication.service";
import {Router} from "@angular/router";
import Routes from "../costants/routes";
import {MessageService} from "primeng/api";
import { Utilities } from '../shared/utilities/utilities';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private authentcationService: AuthenticationService, private router: Router, private messageService: MessageService) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this.authentcationService.getAccessToken();
    const newReq = request.clone({
      headers: request.headers.set('Authorization', `Bearer ${token}`),
    });
    return next.handle(newReq).pipe(
      catchError((err: HttpErrorResponse) => {
        if (err.error.statusCode === 401) {
          Utilities.removeValueFromLocalStorage('token')
          this.authentcationService.logout();
          this.messageService.add({
            severity: 'error',
            summary: `Error (${err.error.statusCode})`,
            detail: err.error.message
          })
          this.router.navigate([Routes.LOGIN])
        }
        throw err;
      })
    );
  }
}
