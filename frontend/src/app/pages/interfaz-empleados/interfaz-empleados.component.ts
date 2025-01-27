import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';
import { NgIf } from '@angular/common';
import { Empleados } from '../../interface/empleados';
import { FormsModule } from '@angular/forms';
import { EmpleadosService } from '../../services/empleados.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-interfaz-empleados',
  standalone: true,
  imports: [FormsModule, NgFor, NgIf],
  templateUrl: './interfaz-empleados.component.html',
  styleUrl: './interfaz-empleados.component.css'
})
export class InterfazEmpleadosComponent {

  // Inyectar
  _empleadosService = inject(EmpleadosService);
  // _router = inject(HttpClient);


  //Variables:

  allEmpleados : Empleados [] = [];

  codigo_empleado: number = 0;
  nombres: string = '';
  primerApellido: string = '';
  segundoApellido: string = '';
  codigo_departamento: number = 0;
  showDiv: boolean = false;
  editMode: boolean = false;
  editEmpleado: string | undefined | null = null;

//   //Obtener datos

  getData(){
    this._empleadosService.getEmpleados().subscribe({
      next: (res: any) => {
        this.allEmpleados = res.datos;
        console.log(this.allEmpleados);
      },
      error: (err) => {
        console.error('Ocurrio un error', err);
      }
    });
  }

//   //Crear empleados

  postData(){
    if(!this.codigo_empleado || this.nombres === '' || this.primerApellido === '' || this.segundoApellido === '' || !this.codigo_departamento){
      alert('Ingrese todos los campos para continuar');
    }else{
      const newEmpleado : Empleados = {
        codigo_empleado: this.codigo_empleado,
        nombres: this.nombres,
        primerApellido: this.primerApellido,
        segundoApellido: this.segundoApellido,
        codigo_departamento: this.codigo_departamento
      }

      this._empleadosService.postEmpleados(newEmpleado).subscribe({
        next: (res: any) => {
          if(res) {
            console.log('res', res);
            this.getData();
          }else{
            console.error('ocurrio un error');
          }
        },
        error:(err) => {
          console.log('Ocurrio un error', err);
        }
      });
    }
  }

  //Actualizar empleados

  empleadosId(id: string | undefined) {
    this.editEmpleado = this.nombres;
    this.editMode = true;
    this.showDiv = true;
  }

  putEmpleado(){
    console.log(this.editEmpleado, this.codigo_empleado, this.nombres, this.primerApellido, this.segundoApellido, this.codigo_departamento);
    if(!this.codigo_empleado || this.nombres === '' || this.primerApellido === '' || this.segundoApellido === '' || !this.codigo_departamento){
      alert('Ingrese todos los campos para continuar')
    }else if(this.editEmpleado) {
      console.log('Hola entre')
      const upgradedEmpleado : Empleados = {
        codigo_empleado: this.codigo_empleado,
        nombres: this.nombres,
        primerApellido: this.primerApellido,
        segundoApellido: this.segundoApellido,
        codigo_departamento: this.codigo_departamento
      }

      this._empleadosService.putEmpleados(this.editEmpleado, upgradedEmpleado).subscribe({
        
        next: (res: any) => {
          if(res) {
            console.log('res', res);
            this.getData();
            this.toggleDiv();
          }else{
            console.error('Ocurrio un error al actualizar');
          }

        },
          error: (err) => {
            console.error('Ocurrio un error al actualizar', err);
        }
      })
    }
  }

  toggleDiv(){
    this.showDiv = !this.showDiv;
    if (!this.showDiv) {
      this.codigo_empleado = 0;
      this.nombres = '';
      this.primerApellido = '';
      this.segundoApellido = '';
      this.codigo_departamento = 0;
      this.editMode = false;
      this.editEmpleado = null;
    }
  }

  limpiarCampos(){
    this.codigo_empleado = 0;
    this.nombres = '';
    this.primerApellido = '';
    this.segundoApellido = '';
    this.codigo_departamento = 0;
  }

  ngOnInit(){
    this.getData();
  }


}
