import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ProveedorItem } from 'src/app/models/proveedores/ProveedorItem';
import { ProveedorList } from 'src/app/models/proveedores/ProveedorList';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.scss']
})
export class ProveedoresComponent implements OnInit {
  proveedoresList: ProveedorItem[];

  formG: FormGroup;

  constructor(private backendService: BackendService, private formBuilder: FormBuilder, private router: Router) {
    this.proveedoresList = [];

    this.formG = this.formBuilder.group({
      id_proveedor: [''],
      nombre: [''],
      laboratorio: ['']
    })

   }

  ngOnInit(): void {
    this.backendService.getProveedores().subscribe(x =>{
      this.proveedoresList = x.proveedores;
    });
  }

  guardar(){
    this.backendService.insertaProveedor(this.formG.controls["nombre"].value, this.formG.controls["laboratorio"].value).subscribe(x => alert(x.mensaje));
    window.location.reload();
  }

  editar(proveedor: ProveedorItem){

  }

  eliminar(proveedor: ProveedorItem){
      this.backendService.eliminaProveedor(proveedor.id_proveedor).subscribe(x=>{
        alert(x.mensaje);
      });
      window.location.reload();
  }

}
