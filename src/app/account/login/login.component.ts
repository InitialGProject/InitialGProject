import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AccountService } from './../../_services/account.service';
import { AlertService } from './../../_services/alert.service';
import { User } from 'src/app/_models/user';
import { GlobalVars } from '../../globalVars';

//test BS
import { DataSharingService } from '../../data-sharing.service';
import { HttpClient } from '@angular/common/http';

@Component({ templateUrl: 'login.component.html' })

export class LoginComponent implements OnInit {
  form: FormGroup;
  loading = false;
  submitted = false;
  nombre: any;
  password: any;
  user: User;
  isUserLoggedIn:boolean;

  constructor(
    private formBuilder: FormBuilder,
    private accountService: AccountService,
    private alertService: AlertService,
    private route: ActivatedRoute,
    private router: Router,
    private globalVars: GlobalVars,
    private dataSharingService: DataSharingService,
    private http: HttpClient,

  ) { 
    //id usuariologged
    this.dataSharingService.isUserLoggedIn.subscribe( value => {
      this.isUserLoggedIn = value;
    }); 
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.nombre = this.globalVars.getGlobalUser()
    
    if (localStorage.getItem('usuario')) {
      this.user = JSON.parse(localStorage.getItem('usuario'));
      console.log("Cargado");

      this.nombre = this.user.nombre
      this.globalVars.setGlobalToken(this.user.token)
      this.globalVars.setGlobalUser(this.user.nombre)
      this.globalVars.setglobalUserToken(this.user)
      console.log(this.user);
      this.alertService.success('Login Correcto', { keepAfterRouteChange: true });

      //Para el BS actualice cosas
      this.cuandoUserLogea(this.user);
    }

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
          
          //Guardamos user en local
          localStorage.setItem('usuario', JSON.stringify(this.user));
          // console.log("Guardado");
          // console.log(localStorage.getItem('usuario'));

          this.nombre = this.user.nombre
          this.globalVars.setGlobalToken(this.user.token)
          this.globalVars.setGlobalUser(this.user.nombre)
          this.globalVars.setglobalUserToken(this.user)
          // console.log(this.user);
          this.alertService.success('Login Correcto', { keepAfterRouteChange: true });
          this.router.navigate(['/'], { relativeTo: this.route });
          
          //Para el BS actualice cosas
          this.cuandoUserLogea(this.user);
        }
      },
      error => {
        this.alertService.error(error);
        this.loading = false;
      });
  }

  //Funcion para actualizar el BS
  cuandoUserLogea(data) {

    
    //Si esta logueado es true
    this.dataSharingService.isUserLoggedIn.next(true);
    
    //Guarda el token sobrecargado para actualizar la pagina
    this.dataSharingService.token.next(data);

    //Guardara el id usuario activo
    this.dataSharingService.iduseract.next(data.id);


  }

  userLocal(){
    if(!this.isUserLoggedIn)
      if (localStorage.getItem('usuario')) {
        this.user = JSON.parse(localStorage.getItem('usuario'));
        
        //Para el BS actualice cosas
        this.cuandoUserLogea(this.user);

        this.nombre = this.user.nombre
        this.globalVars.setGlobalToken(this.user.token)
        this.globalVars.setGlobalUser(this.user.nombre)
        this.globalVars.setglobalUserToken(this.user)
        
        console.log("Logueo func:")
        console.log(this.user);
      }
  }

  sacardatosLog(link:number){
    console.log("TESTEAMOS ->localhost:8080/usuarios/"+link, link);
    this.http.get<any>(GlobalVars.ruta+link)
       .subscribe(data => {
        this.teto = data.total;
   });
  }

  teto:any;
}
