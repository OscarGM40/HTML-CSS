import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from 'src/app/services/info-pagina.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: [
  ]
})
export class FooterComponent implements OnInit {

  public anio: number = new Date().getFullYear();
  
  constructor(public _infoPagina: InfoPaginaService) { }

  ngOnInit(): void {
  }

}
