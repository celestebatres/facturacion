import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { ProductList } from '../models/productos/ProductList';
import { SaveProduct } from '../models/productos/SaveProduct';
import { SaveProductResponse } from '../models/productos/SaveProductResponse';
import { PutProduct } from '../models/productos/PutProduct';
import { PutProductResponse } from '../models/productos/PutProductResponse';
import { DeleteProductResponse } from '../models/productos/DeleteProductResponse';


const BE_API = environment.urlBackend;

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class BackendService {

  constructor(private http: HttpClient) { }


  //Productos

    //get
    getProducts(){
      let url: string = BE_API + '/productos';
      return this.http.get<ProductList>(url, httpOptions);
    }
    
    //post
    insertaProduct(id_producto: number, nombre: string, precio:number, grms:number, existencia: number, fecha_venc: string){
      let url:string = BE_API + '/productos';
      let producto : SaveProduct = new SaveProduct(id_producto, nombre, precio, grms, existencia, fecha_venc);
      return this.http.post<SaveProductResponse>(url, producto, httpOptions);
    }
    //put
    editaProduct(id_producto: number, nombre: string, precio:number, grms:number, existencia: number, fecha_venc: string){
      let url:string = BE_API + '/productos/' + id_producto;
      let producto: PutProduct = new PutProduct(nombre, precio, grms, existencia, fecha_venc);
      return this.http.put<PutProductResponse>(url, producto, httpOptions);
    }

    //delete
    eliminaProduct(id_producto: number){
      let url:string = BE_API + '/productos/' + id_producto;
      return this.http.delete<DeleteProductResponse>(url, httpOptions);
    }

  //Usuarios
    //get
    //post
    //put
    //delete

  //Facturas
    //get
    //post
    //put
    //delete

  //Proveedores
    //get
    //post
    //put
    //delete

    
}
