import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
  ReactiveFormsModule,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginData: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.loginData = this.fb.group({
      email: new FormControl(
        '',
        Validators.compose([Validators.required, Validators.email])
      ),
      password: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(8),
          Validators.pattern(
            '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$'
          ),
        ])
      ),
    });
  }

  login() {
    localStorage.setItem('isLogin', 'jwt');
    this.router.navigate(['home']);
  }
}
