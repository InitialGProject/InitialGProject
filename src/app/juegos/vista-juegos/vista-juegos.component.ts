import { Component, OnInit } from '@angular/core';
import { Juegos } from '../models/juegos';
import { JuegosService } from '../services/juegos.service';

import jQuery from 'jquery';

//recibir parametros
import { ActivatedRoute, Params } from '@angular/router';
import { LoginComponent } from 'src/app/account/login/login.component';


@Component({
  selector: 'app-juegos-vista-juegos',
  templateUrl: './vista-juegos.component.html',
  styleUrls: ['./vista-juegos.component.scss']
})
export class VistaJuegosComponent implements OnInit {
  tipo: {clase: string};
  juego: Juegos;

  constructor(private servicioJuegos: JuegosService, private rutaActiva: ActivatedRoute,    private CargaLogin:LoginComponent,
) { }

  ngOnInit(): void {
    this.dameJuegos();
    this.secret();    
    this.CargaLogin.ngOnInit();

  }

  secret(){
    var codeTimerLength = 1000;
    var codeTimer;
    var codePosition = 0;
    var code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
    
    jQuery(function(){
      jQuery(document).on('keyup',function(e){
        if(e.which == code[codePosition] && !jQuery('.dino').filter(':animated').length) {
          try {
            jQuery('.panel ul li').eq(codePosition).addClass('entered');
            clearTimeout(codeTimer);
            if (codePosition < code.length-1) {
              codePosition++;
              codeTimer = setTimeout(function(){resetTimer();}, codeTimerLength)
            }
            else {
              triggerEgg();
            }
          }
          catch(e){}
        }
        else if (e.which != code[codePosition]) {
          resetTimer();
        }
      })
    })

    /* ??? */
    function triggerEgg(){
      alert('Codigo Konami!!! LIBEREN A LOS GATITOS ROAAARR!')
      jQuery('.dino').show();
      jQuery('#meow')[0].currentTime = 0
      jQuery('#meow')[0].play();
      jQuery('.dino').css({
            bottom: -440,
            right: 0
          });
      jQuery('.dino').animate({
        bottom: 0
        },400).promise().done(function(){
        jQuery('.dino').animate({
          right: '100%'
        }, 700).promise().done(function(){
          jQuery('.dino').css({
            bottom: -440,
            right: 0
          });
          resetTimer();
          jQuery('.dino').hide();

        })
      })
    }
    const _te = triggerEgg;

    
    function resetTimer(){
      console.log(':) Felicidades por descubrirme');
      try {
        clearTimeout(codeTimer);
      }
      catch(e){}
      codeTimer = null;
      codePosition = 0;
      jQuery('.panel ul li').removeClass('entered');
    }
  }

  dameJuegos(): void {
    this.tipo = {
      clase: this.rutaActiva.snapshot.params.clase
    };
    this.servicioJuegos.getAll()
      .subscribe(
        data => {
          this.juego = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
}
