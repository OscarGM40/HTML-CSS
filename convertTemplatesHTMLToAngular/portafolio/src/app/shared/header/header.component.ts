import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InfoPaginaService } from 'src/app/services/info-pagina.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent implements OnInit {

  constructor(
    public _infoPagina:InfoPaginaService,
    private router:Router
    ) { }

  search(termino:string){
    if(termino.length < 1){
      return;
    }
    this.router.navigate(['/search',termino]);
  }
  
  ngOnInit(): void {

  }

}
