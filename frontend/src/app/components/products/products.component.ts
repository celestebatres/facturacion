import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductItem } from 'src/app/models/productos/ProductItem';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  //Declaracion de variables para guardar datos
  //Para el GET
  productList: ProductItem[];

  //Para el POST
  formG: FormGroup;

  constructor(private backendService: BackendService, private formBuilder:FormBuilder) { 
    this.productList = [];

    this.formG = this.formBuilder.group({
      id_producto: [null],
      nombre: [''],
      precio: [null],
      grms: [null],
      existencia: [null],
      fecha_venc: ['']
    });
  }
  //Cuando se inicia
  ngOnInit(): void {
    this.backendService.getProducts().subscribe((x) =>{
      this.productList = x.productos;
    });
    
  }


  //Guarda el nuevo registro en la base de datos >>POST<<
  guardar(){
    this.backendService.insertaProduct( this.formG.controls["id_producto"].value, this.formG.controls["nombre"].value, this.formG.controls["precio"].value, this.formG.controls["grms"].value, this.formG.controls["existencia"].value, this.formG.controls["fecha_venc"].value).subscribe(x => alert(x.mensaje));
  }

}
