import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//
import { VistaProductoComponent } from './vista-producto/vista-producto.component';
import { LayoutComponent } from './layout/layout.component';
import { InicioTiendaComponent } from './inicio-tienda/inicio-tienda.component';

const tienda: Routes = [
    {
        path: 'tienda', component: InicioTiendaComponent,
    },

    { 
        path: 'tienda/:clase', component: InicioTiendaComponent,
    },
    {
        path: 'vista-producto/:id', component: VistaProductoComponent,
    }
    
];

@NgModule({
    imports: [
        RouterModule.forRoot(tienda),
        RouterModule.forChild(tienda)],
    exports: [RouterModule]
})

export class TiendaRoutingModule { }