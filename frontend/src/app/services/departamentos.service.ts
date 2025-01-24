import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DepartamentosTs } from '../interface/departamentos';

@Injectable({
  providedIn: 'root'
})
export class DepartamentosService {

  private _httpClient = inject(HttpClient);

  //URL de los departamentos

  private URL_DEPARTAMENTOS = "http://localhost:3000/departamentos";


  //PETICIÓN POST
  postDepartamentos(departamento: DepartamentosTs){
    return this._httpClient.post(this.URL_DEPARTAMENTOS + "/crear", departamento);
  }

  //PETICIÓN GET
  getDepartamentos(){
    return this._httpClient.get(this.URL_DEPARTAMENTOS + "/obtener");
  }

  //PETICIÓN PUT
  putDepartamentos(id: string | undefined, infoDeActualizar: DepartamentosTs){
    return this._httpClient.put(this.URL_DEPARTAMENTOS + "/actualizar/" + id, infoDeActualizar);
  }

}
