import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientItem } from 'src/app/models/clientes/ClientItem';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {
  clientList: ClientItem[];

  formG: FormGroup;

  constructor(private backendService: BackendService, private formBuilder: FormBuilder, private router: Router) { 
    this.clientList = [];

    this.formG = this.formBuilder.group({
      nombre: [''],
      nit: [null]
    });
  }

  ngOnInit(): void {
    this.backendService.getClientes().subscribe((x) =>{
      this.clientList = x.clientes;
    });
  }

  guardar(){
    this.backendService.insertaCliente(this.formG.controls["nombre"].value, this.formG.controls["nit"].value).subscribe(x => alert(x.mensaje));
  
    window.location.reload();
  }

  editar(cliente:ClientItem){

  }

  eliminar(cliente:ClientItem){
    this.backendService.eliminaCliente(cliente.id_cliente).subscribe(x =>{
      alert(x.mensaje);
    });
      window.location.reload();
  }

}
