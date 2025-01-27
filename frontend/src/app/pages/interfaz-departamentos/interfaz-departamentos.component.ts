import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';
import { NgIf } from '@angular/common';
import { DepartamentosTs } from '../../interface/departamentos';
import { FormsModule } from '@angular/forms';
import { DepartamentosService } from '../../services/departamentos.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-interfaz-departamentos',
  standalone: true,
  imports: [FormsModule, NgFor, NgIf],
  templateUrl: './interfaz-departamentos.component.html',
  styleUrl: './interfaz-departamentos.component.css'
})
export class InterfazDepartamentosComponent {

  _departamentosService = inject(DepartamentosService);

  allDepartamentos : DepartamentosTs [] = [];

  name: string = ''
  codigo_departamento: number = 0;
  showDiv: boolean = false;
  editMode: boolean = false;
  editDepartamento: string | undefined | null = null;

  getData(){
    this._departamentosService.getDepartamentos().subscribe({
      next: (res: any) => {
        this.allDepartamentos = res.datos;
        console.log(this.allDepartamentos);
      },
      error:(err) => {
        console.error('Ocurrio un error', err);
      }
    });
  }


  postData(){
    if(this.name === '' || !this.codigo_departamento){
      alert('Ingrese todos los campos para continuar')
    }else {
      const newDepartamento: DepartamentosTs = {
        name: this.name,
        codigo_departamento: this.codigo_departamento
      } 

      this._departamentosService.postDepartamentos(newDepartamento).subscribe({
        next: (res: any) => {
          if(res) {
            console.log('res', res);
            this.getData();
          }else{
            console.log('Ocurrio un error');
          }
        },
        error:(err) => {
          console.log('Ocurrio un error', err);
        }
      });
    }
  }

  departamentoid(id:string | undefined){
    this.editDepartamento = this.name;
    this.editMode = true;
    this.showDiv = true;
  }

  putDepartamento(){
    if(this.name === '' || !this.codigo_departamento){
      alert('Ingrese todos los campos para continuar');
    }else if(this.editDepartamento){

      const upgradedDepartamento : DepartamentosTs = {
        name: this.name,
        codigo_departamento: this.codigo_departamento
      }
      this._departamentosService.putDepartamentos(this.editDepartamento, upgradedDepartamento).subscribe({

        next: (res:any) => {
          if(res){
            console.log('res', res);
            this.getData();
            this.toggleDiv();
          }else{
            console.error('Ocurrio un error al actualizar');
          }
        },
        error:(err) => {
          console.error('Ocurrio un error al actualizar', err);
        }
      });
    }
  }

  toggleDiv(){
    this.showDiv = !this.showDiv;
    if(!this.showDiv){
      this.name = '';
      this.codigo_departamento = 0;
      this.editMode = false;
      this.editDepartamento = null;
    }
  }

  limpiarCampos(){
    this.name = '';
    this.codigo_departamento = 0
  }

  ngOnInit(){
    this.getData();
  }

}
