import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AccountService } from './../../_services/account.service';
import { AlertService } from './../../_services/alert.service';

//cifrar a md5
import {Md5} from 'ts-md5/dist/md5';

@Component({ templateUrl: 'register.component.html' })

export class RegisterComponent implements OnInit {
  loading = false;
  submitted = false;

  form: FormGroup;



  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private accountService: AccountService,
    private alertService: AlertService,
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      nombre: [null, Validators.required],
      password: [null, [Validators.required, Validators.minLength(6)]],
      correo: [null, Validators.required, Validators.email],
      token: [this.token(),[]],
    });
  }

  //Creamos un token aleatorio para el usuario 
  token(){
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = 32;
    for (let i = 0; i < charactersLength; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
  
  passMD(){
    let md5 = new Md5()
    let test=md5.appendStr(this.form.get(["password"])!.value).end();
    console.log(test);
    return test;
  }

  // convenience getter for easy access to form fields
  get f() { 
    return {
      nombre: this.form.get(["nombre"])!.value,
      password: this.passMD(),
      correo: this.form.get(["correo"])!.value,
      token:this.form.get(["token"])!.value,
    };
  }

  private losDatosMalditos():any{
    return {
      nombre: this.form.get(["nombre"])!.value,
      password: this.passMD(),
      correo: this.form.get(["correo"])!.value,
      token:this.form.get(["token"])!.value,
    };
  }

  onSubmit() {
    this.submitted = true;

    // reset alerts on submit
    this.alertService.clear();

    // stop here if form is invalid
    if (this.form.invalid) {
      return;
    }

    this.loading = true;
    this.accountService.register(this.losDatosMalditos())
      // .pipe(first())
      .subscribe(
        data => {
          console.log("data "+data);
          this.alertService.success('Registrado con Éxito', { keepAfterRouteChange: true });
          this.router.navigate(['../login'], { relativeTo: this.route });
        });
  }
}