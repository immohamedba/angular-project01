import { Component } from '@angular/core';
import { Personne } from './classes/personne';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Cours-angular';
  Personne: Personne = new Personne(100,'wick');
  tab :number[]= [2,3,5,8];
  
  direBonjour(): string{
    return "Bonjour angular ";
  }

  nom ='Yessine';
  constructor(){}


}
