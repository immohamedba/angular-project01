import { Component, OnInit } from '@angular/core';
import { Personne } from './../../interfaces/personne';
@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {
  nom = "";
  myform = false;
  personne: Personne = {};
  constructor() { }
  ngOnInit() {  }


    ValidForm() {}



}
