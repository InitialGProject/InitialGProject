import { Component, OnInit } from '@angular/core';

//Importar de API
import { Catalogo } from '../models/catalogo';
import { Categorias } from '../models/categorias';

//recibir parametros ruta
import { ActivatedRoute, NavigationEnd, Params, Router } from '@angular/router';

//Importar datos
import { TiendaService } from '../services/tienda.service';

//BS
import { DataSharingService } from '../../data-sharing.service';

@Component({
  selector: 'app-inicio-tienda',
  templateUrl: './inicio-tienda.component.html',
  styleUrls: ['./inicio-tienda.component.scss']
})
export class InicioTiendaComponent implements OnInit {

  catalogo: Catalogo;
  categoria: Categorias;
  filtro: {clase: string};

  testeo:string;
  
  constructor(
    private servicioTienda: TiendaService, 
    private rutaActiva: ActivatedRoute, 
    private router:Router, 
    private dataSharingService: DataSharingService,
    ){
      
      //Para probetear cosas
      this.dataSharingService.testeo.subscribe( value => {
      this.testeo = value;
      });  
    }

  ngOnInit(): void {
    this.cargarTodo(); 
    this.servicioTienda.getUserLog(); 
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
}
