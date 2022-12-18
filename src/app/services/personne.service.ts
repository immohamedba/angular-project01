import { Injectable } from '@angular/core';
import { Personne } from './../interfaces/personne';
@Injectable({
  providedIn: 'root'
})
export class PersonneService {
personnes : Array<Personne> = new Array <Personne>();
  constructor() {
    this.personnes.push({nom :'Firas'});
    this.personnes.push({nom :'Chahine'});
    this.personnes.push({nom :'Nour'});
   }
  
  getAll():Array<Personne>{
    return this.personnes;
   }
}
