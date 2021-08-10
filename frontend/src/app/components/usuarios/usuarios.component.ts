import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioItem } from 'src/app/models/usuarios/UsuarioItem';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {

  usuarioList: UsuarioItem[];

  //Para el POST
  formG: FormGroup;

  constructor(private backendService: BackendService, private formBuilder:FormBuilder, private router:Router) { 
    this.usuarioList = [];

    this.formG = this.formBuilder.group({
      nombre: [''],
      username: [''],
      contrasena: [''],
      fecha_nac: [''],
      rol: ['']
    });
  }
  //Cuando se inicia
  ngOnInit(): void {
    this.backendService.getUsuarios().subscribe((x) =>{
      this.usuarioList = x.usuarios;
    });
    
  }


  //Guarda el nuevo registro en la base de datos >>POST<<
  guardar(){
    this.backendService.insertaUsuario(this.formG.controls["nombre"].value, this.formG.controls["username"].value, this.formG.controls["contrasena"].value, this.formG.controls["fecha_nac"].value, this.formG.controls["rol"].value).subscribe(x => alert(x.mensaje));
    window.location.reload();
  }

  editar(producto:UsuarioItem){

  }

  eliminar(usuario:UsuarioItem){
      this.backendService.eliminaUsuario(usuario.id_usuario).subscribe(x=>{
        alert(x.mensaje);
      });
      window.location.reload();
  }

}
