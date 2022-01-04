import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/producto.interface';
import { delay } from 'rxjs/operators';
import { of } from 'rxjs';

const base_url = 'https://angulartemplatesfh-default-rtdb.europe-west1.firebasedatabase.app';

@Injectable({ providedIn: 'root' })
export class ProductosService {

  cargando: boolean = true;
  productos: Producto[] = [];
  productosFiltrados: Producto[] = [];

  constructor(private http: HttpClient) {
    this.cargarProductos();
  }

  private cargarProductos() {
    return new Promise<void>((resolve) => {
      this.http.get<Producto[]>(`${base_url}/productos_idx.json`)
        .subscribe((resp) => {
          this.cargando = false;
          this.productos = resp;
          resolve();
        });
    });
  }

  public filtrarProductosAsync(termino: string) {
    termino = termino.toLocaleLowerCase();
    if(this.productos.length === 0) {
      this.cargarProductos().then( () => {
        this.filtrarProductos(termino);
      });
    }else{
      this.filtrarProductos(termino);
    }
  }
  
  private filtrarProductos(termino: string) {
    this.productosFiltrados = [];
    this.productosFiltrados = this.productos.filter(producto => producto.titulo.toLocaleLowerCase().includes(termino) || producto.categoria.toLocaleLowerCase().includes(termino));
  }

}
