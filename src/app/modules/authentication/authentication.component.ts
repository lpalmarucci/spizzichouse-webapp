import {Component} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {AuthenticationService} from "./services/authentication.service";
import {ILogin} from "./models/authentication";
import {Router} from "@angular/router";
import Routes from "../../shared/costants/routes";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent {
  loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  })

  constructor(private messageService: MessageService, private fb: FormBuilder, private authenticationService: AuthenticationService, private router: Router) {
  }

  handleSubmitForm(e: MouseEvent) {
    e.preventDefault();
    this.authenticationService.login(this.loginForm.value as ILogin).subscribe((ok) => {
      if (ok)
        this.router.navigate([Routes.HOME])
    });
  }
}
