import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
  import { delay } from 'rxjs/operators';
import { ProductoItem } from '../interfaces/productoItem.interface';

const base_url = 'https://angulartemplatesfh-default-rtdb.europe-west1.firebasedatabase.app';

@Injectable({ providedIn: 'root' })
export class ProductoService {

  cargando: boolean = true;
  producto!: ProductoItem;

  constructor(private http: HttpClient) {
  }

  public cargarProducto(cod: string) {
    return this.http.get<ProductoItem>(`${base_url}/productos/${cod}.json`).pipe(
      delay(50)
    )
      .subscribe((resp) => {
        this.cargando = false;
        this.producto = resp;
      });
  }
}
