import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getPets(){
    return this._http.get('/api/pets');
  }
  getPet(id){
    return this._http.get('/api/pets/'+id)
  }
  addPet(pet){
    return this._http.post('/api/pets',pet)
  }
  updatePet(Upet){
    return this._http.put('/api/pets/'+Upet._id, Upet)
  }
  destroyPet(id){
    return this._http.delete('/api/pets/'+id)
  }
  lPet(id){
    return this._http.get('/api/pets/'+id+'/up')
  }
  ulPet(id){
    return this._http.get('/api/pets/'+id+'/down')
  }
}
