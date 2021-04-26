import { Component, OnInit } from '@angular/core';

//Importar de API
import { Catalogo } from '../models/catalogo';
import { Categorias } from '../models/categorias';

//recibir parametros ruta
import { ActivatedRoute, NavigationEnd, Params, Router } from '@angular/router';

//Importar datos
import { TiendaService } from '../services/tienda.service';

@Component({
  selector: 'app-inicio-tienda',
  templateUrl: './inicio-tienda.component.html',
  styleUrls: ['./inicio-tienda.component.scss']
})
export class InicioTiendaComponent implements OnInit {

  catalogo: Catalogo;
  categoria: Categorias;
  filtro: {clase: string};
  
  constructor(private servicioTienda: TiendaService, private rutaActiva: ActivatedRoute, 
    private router:Router,){  }

  ngOnInit(): void {
    this.cargarTodo(); 
  }

  cargarTodo(): void {
    //Recibir productos
    this.servicioTienda.getProd()
      .subscribe(
        data => {
          this.catalogo = data;
          console.log(data);
        },
        error => {
          console.log(error);
    });

    //Recibir Categorias
    this.servicioTienda.getCategorias()
      .subscribe(
        data => {
          this.categoria = data;
          console.log(data);
        },
        error => {
          console.log(error);
    });

    //Recibir parametro filtro
    this.filtro = {
      clase: this.rutaActiva.snapshot.params.clase
    };
  }

  //Recargar el RL
  redirectTo(uri:string){
    console.log("Checking passed item: ",uri);
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
    this.router.navigate(['/tienda/'+uri]));
  }

  //En caso de necesitar recargar
  // refresh() {
  //   this.ngOnInit();
  // }
}
