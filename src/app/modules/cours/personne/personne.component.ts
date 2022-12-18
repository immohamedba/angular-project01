import { Component,OnInit } from '@angular/core';
import { PersonneService } from 'src/app/services/personne.service';
import { Personne } from 'src/app/interfaces/personne';

@Component({
  selector: 'app-personne',
  templateUrl: './personne.component.html',
  styleUrls: ['./personne.component.css']
})
export class PersonneComponent implements OnInit {

  personnes: Array <Personne> = new Array <Personne>();
  personne :Personne ={};
  constructor (private personneService: PersonneService){};
   ngOnInit(){
    this.personnes = this.personneService.getAll();
  }
}