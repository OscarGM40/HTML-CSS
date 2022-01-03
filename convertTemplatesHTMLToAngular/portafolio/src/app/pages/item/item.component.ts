import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styles: [
  ]
})
export class ItemComponent implements OnInit {

  cod="";

  constructor(private activatedRoute: ActivatedRoute,
    public productoService: ProductoService) {
    this.activatedRoute.params.subscribe(params => this.cod = params['cod']);
    this.productoService.cargarProducto(this.cod);
  }

  ngOnInit(): void {
  }

}
