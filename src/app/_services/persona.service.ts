import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Persona} from '../_models/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  API_ANT = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  getPersonas(){
    return this.http.get(this.API_ANT+'/persona');
  }
  
  getPersona(id: number){
    return this.http.get(this.API_ANT+'/persona',+id);
  }

  createPersona(persona: Persona){
    return this.http.post(this.API_ANT+'/persona',persona);
  }

  updatePersona(persona: Persona){
    return this.http.put(this.API_ANT+'/persona'+persona.id,persona);
  }

  deletePersona(id: number){
    return this.http.delete(this.API_ANT+'/persona'+id);
  }
}
