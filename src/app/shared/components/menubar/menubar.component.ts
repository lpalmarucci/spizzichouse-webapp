import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "../../../modules/authentication/services/authentication.service";
import {Observable} from "rxjs";
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.scss']
})
export class MenubarComponent implements OnInit {

  showAppbar$: Observable<boolean> = this.authenticationService.isLoggedIn;
  items: MenuItem[];

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-fw pi-home',
        routerLink: '/home'
      },
      {
        label: 'Casate',
        icon: 'pi pi-fw pi-th-large',
        routerLink: '/casate'
      },
      {
        label: 'Giocatori',
        icon: 'pi pi-fw pi-users',
        routerLink: 'players'
      },
      {
        label: 'Profilo',
        icon: 'pi pi-fw pi-user',
        items: [
          {
            label: 'Gestisci profilo',
            icon: 'pi pi-fw pi-user-edit',
            routerLink: '/users/me'
          },
          {
            label: 'Logout',
            icon: 'pi pi-fw pi-user-edit',
            routerLink: '/logout'
          }
        ]
      }
    ];
  }

  constructor(private authenticationService: AuthenticationService) {
  }
}
