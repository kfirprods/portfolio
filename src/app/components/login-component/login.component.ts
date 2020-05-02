import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-component',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  message: string;
  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private authenticationService: AuthenticationService, private router: Router) {
    this.form = formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  async onSubmit() {
    const { username, password } = this.form.value;

    const isAuthenticated = await this.authenticationService.authenticate(username, password);

    if (isAuthenticated) {
      this.message = "Redirecting you...";

      setTimeout(() => { this.router.navigate(['/']); }, 1000);
    } else {
      this.message = "Authentication failed";
    }
  }
}
