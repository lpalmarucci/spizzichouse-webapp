import {Component} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {AuthenticationService} from "./services/authentication.service";
import {ILogin} from "./models/authentication";

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

  constructor(private fb: FormBuilder, private authenticationService: AuthenticationService) {
  }

  handleSubmitForm(e: MouseEvent) {
    e.preventDefault();
    this.authenticationService.login(this.loginForm.value as ILogin).subscribe(() => {
      //navigate to home page
    });
  }
}
