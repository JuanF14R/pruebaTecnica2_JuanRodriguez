import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Empleados } from '../interface/empleados';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  private _httpClient = inject(HttpClient);

  //URL de los departamentos

  private URL_EMPLEADOS = "http://localhost:3000/empleados";

  //PETICIÓN POST
    postEmpleados(empleados: Empleados){
      return this._httpClient.post(this.URL_EMPLEADOS + "/crear", empleados);
    }
  
    //PETICIÓN GET
    getEmpleados(){
      return this._httpClient.get(this.URL_EMPLEADOS + "/obtener");
    }
  
    //PETICIÓN PUT
    putEmpleados(id: string | undefined, infoDeActualizar: Empleados){
      return this._httpClient.put(this.URL_EMPLEADOS + "/actualizar/" + id, infoDeActualizar);
    }

}
