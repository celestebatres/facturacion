import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { ProductList } from '../models/productos/ProductList';
import { SaveProduct } from '../models/productos/SaveProduct';
import { SaveProductResponse } from '../models/productos/SaveProductResponse';
import { PutProduct } from '../models/productos/PutProduct';
import { PutProductResponse } from '../models/productos/PutProductResponse';
import { DeleteProductResponse } from '../models/productos/DeleteProductResponse';
import { UsuarioList } from '../models/usuarios/UsuarioList';
import { SaveUsuario } from '../models/usuarios/SaveUsuario';
import { SaveUsuarioResponse } from '../models/usuarios/SaveUsuarioResponse';
import { PutUsuario } from '../models/usuarios/PutUsuario';
import { PutProveedorResponse } from '../models/proveedores/PutProveedorResponse';
import { PutUsuarioResponse } from '../models/usuarios/PutUsuarioResponse';
import { DeleteUsuarioResponse } from '../models/usuarios/DeleteUsuarioResponse';


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
    getUsuarios(){
      let url: string = BE_API + '/usuarios';
      return this.http.get<UsuarioList>(url, httpOptions);
    }
    
    //post
    insertaUsuario(nombre: string, username: string, contrasena: string, fecha_nac: string, rol: string){
      let url:string = BE_API + '/usuarios';
      let usuario: SaveUsuario = new SaveUsuario(nombre, username, contrasena, fecha_nac, rol)

      return this.http.post<SaveUsuarioResponse>(url, usuario, httpOptions);
    }
    //put
    editaUsuario(id_usuario: number, nombre: string, username: string, contrasena: string, fecha_nac: string, rol: string){
      let url:string = BE_API + '/usuarios/' + id_usuario;
      let usuario: PutUsuario = new PutUsuario(nombre, username, contrasena, fecha_nac, rol);
      return this.http.put<PutUsuarioResponse>(url, usuario, httpOptions);
    }

    //delete
    eliminaUsuario(id_usuario: number){
      let url:string = BE_API + '/usuarios/' + id_usuario;
      return this.http.delete<DeleteUsuarioResponse >(url, httpOptions);
    }

  //Facturas
    //get
    getFacturas(){
      let url: string = BE_API + '/usuarios';
      return this.http.get<UsuarioList>(url, httpOptions);
    }
    
    //post
    insertaFactura(nombre: string, username: string, contrasena: string, fecha_nac: string, rol: string){
      let url:string = BE_API + '/usuarios';
      let usuario: SaveUsuario = new SaveUsuario(nombre, username, contrasena, fecha_nac, rol)

      return this.http.post<SaveUsuarioResponse>(url, usuario, httpOptions);
    }
    //put
    editaFactura(id_usuario: number, nombre: string, username: string, contrasena: string, fecha_nac: string, rol: string){
      let url:string = BE_API + '/usuarios/' + id_usuario;
      let usuario: PutUsuario = new PutUsuario(nombre, username, contrasena, fecha_nac, rol);
      return this.http.put<PutUsuarioResponse>(url, usuario, httpOptions);
    }

    //delete
    eliminaFactura(id_usuario: number){
      let url:string = BE_API + '/usuarios/' + id_usuario;
      return this.http.delete<DeleteUsuarioResponse >(url, httpOptions);
    }

  //Proveedores
    

    
}
