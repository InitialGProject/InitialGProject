import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AccountService } from './../../_services/account.service';
import { AlertService } from './../../_services/alert.service';
import { User } from 'src/app/_models/user';
import { GlobalVars } from '../../globalVars';

@Component({ templateUrl: 'login.component.html' })

export class LoginComponent implements OnInit {
  form: FormGroup;
  loading = false;
  submitted = false;
  nombre: any;
  password: any;
  user: User;

  constructor(
    private formBuilder: FormBuilder,
    private accountService: AccountService,
    private alertService: AlertService,
    private route: ActivatedRoute,
    private router: Router,
    private globalVars: GlobalVars
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.nombre = this.globalVars.getGlobalUser()
  }

  // convenience getter for easy access to form fields
  get f() { return this.form.controls; }

  onSubmit() {
    this.submitted = true;

    //reset alerts on submit
    this.alertService.clear();

    //stop here if form is invalid
    if (this.form.invalid) {
      return;
    }
    this.loading = true;
    this.accountService.login(this.f.username.value, this.f.password.value).subscribe(
      data => {
        if (data.token) {
          this.user = data;
          this.nombre = this.user.nombre
          this.globalVars.setGlobalToken(this.user.token)
          this.globalVars.setGlobalUser(this.user.nombre)
          this.globalVars.setglobalUserToken(this.user)
          console.log(this.user);
          this.alertService.success('Login Correcto', { keepAfterRouteChange: true });
          this.router.navigate(['/'], { relativeTo: this.route });
        }
      },
      error => {
        this.alertService.error(error);
        this.loading = false;
      });
  }
}
