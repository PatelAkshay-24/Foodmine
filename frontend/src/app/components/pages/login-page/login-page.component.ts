import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { UserserviceService } from 'src/app/services/userservice.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})

export class LoginPageComponent {
  loginForm!: FormGroup;
  isSubmitted = false;
  returnUrl = '';
  constructor(
    private formBuilder: FormBuilder,
    private userservice: UserserviceService,
    private activatedrouter: ActivatedRoute,
    private router: Router
  ) {}


  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
    //loginForm.Controls.email

    this.returnUrl = this.activatedrouter.snapshot.queryParams.returnUrl
  }

  //Reactive Forms Control
  get fc() {
    return this.loginForm.controls;
  }

  //Submit Funcation  Inside of Form
  submit() {
    this.isSubmitted = true;
    if (this.loginForm.invalid) return;

    this.userservice.login({
      email: this.fc.email.value,
      password: this.fc.password.value
    }).subscribe(() =>{
      this.router.navigateByUrl(this.returnUrl);
    });
  }
}
