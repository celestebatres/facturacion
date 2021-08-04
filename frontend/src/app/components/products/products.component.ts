import { Component, OnInit } from '@angular/core';
import { ProductItem } from 'src/app/models/productos/ProductItem';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  productList: ProductItem[];

  constructor(private backendService: BackendService) { 
    this.productList = [];
  }

  ngOnInit(): void {
    this.backendService.getProducts().subscribe((x) =>{
      this.productList = x.productos;
    });
    
  }

}
