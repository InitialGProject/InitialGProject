import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AccountService } from './../../_services/account.service';
import { AlertService } from './../../_services/alert.service';

@Component({ templateUrl: 'login.component.html' })
export class LoginComponent implements OnInit {
  form: FormGroup;
  loading = false;
  submitted = false;
  usuario: any;
  password: any;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private accountService: AccountService,
    private alertService: AlertService
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    const user = { usuario: this.usuario, password: this.password };
    this.accountService.login(user).subscribe(data => {
      console.log(data);
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.form.controls; }

  onSubmit() {
    this.submitted = true;

    // reset alerts on submit
    this.alertService.clear();

    // stop here if form is invalid
    if (this.form.invalid) {
      return;
    }

    this.loading = true;
    this.accountService.login(this.f.username).subscribe(data => {
      console.log(data);
      // next: () => {
      //   // get return url from query parameters or default to home page
      //   //const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
      //   //this.router.navigateByUrl(returnUrl);
    },
      error => {
        this.alertService.error(error);
        this.loading = false;
      });
  }
}