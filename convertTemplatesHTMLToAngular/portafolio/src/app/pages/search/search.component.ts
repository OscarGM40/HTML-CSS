import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent implements OnInit {

  termino!:string;

  constructor(
    private activatedRoute: ActivatedRoute,
    public _productosService: ProductosService
    ) {
    this.activatedRoute.params.subscribe(
      params => {
      this.termino = params['termino'];
      
      this._productosService.
      filtrarProductosAsync(this.termino)
    });
  }

  ngOnInit(): void {
  }

}
