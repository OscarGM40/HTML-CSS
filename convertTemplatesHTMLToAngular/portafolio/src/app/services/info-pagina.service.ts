import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Equipo } from '../interfaces/equipo.interface';
import { InfoPagina } from '../interfaces/infoPagina.interface';

@Injectable({ providedIn: 'root' })
export class InfoPaginaService {

  info!:InfoPagina;
  cargada: boolean = false;
  equipo!:Equipo[];

  constructor(private http: HttpClient) { 
    this.getInfo();
    this.getEquipo();
  }

  /* leer el archivo */
  public getInfo() {
    return this.http.get('assets/data/data.json')
    .subscribe( (resp) => {
      this.cargada = true;
      this.info = resp;
    });
  }
  
  public getEquipo(){
      return this.http.get<Equipo[]>('https://angulartemplatesfh-default-rtdb.europe-west1.firebasedatabase.app/equipo.json')
      .subscribe( (resp) => {
      this.cargada = true;
      this.equipo = resp;
   });
  }

}
