import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/producto.interface';
import { delay } from 'rxjs/operators';

const base_url = 'https://angulartemplatesfh-default-rtdb.europe-west1.firebasedatabase.app';

@Injectable({ providedIn: 'root' })
export class ProductosService {

    cargando:boolean = true;
    productos:Producto[] = [];

  constructor(private http: HttpClient) { 
    this.cargarProductos();
  }

  private cargarProductos() {
    return this.http.get<Producto[]>(`${base_url}/productos_idx.json`).pipe(
      delay(500)
    )
    .subscribe( (resp) => {
      this.cargando = false;
      this.productos = resp;
    });
  }
}
