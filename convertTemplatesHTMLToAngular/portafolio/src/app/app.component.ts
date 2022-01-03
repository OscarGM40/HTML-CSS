import { Component } from '@angular/core';
import { ProductosService } from './services/productos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  constructor(public productoService: ProductosService) {
  
  }
  
  
}
