import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StagiaireComponent } from './composants/stagiaire/stagiaire.component';
import { AdresseComponent } from './composants/adresse/adresse.component';
import { PersonneComponent } from './modules/cours/personne/personne.component';
import { FormulaireComponent } from './composants/formulaire/formulaire.component';

const routes: Routes = [
  {path :'stagiaire', component :StagiaireComponent},
  {path :'stagiaire/:nom/:prenom', component :StagiaireComponent},
  {path :'adresse', component : AdresseComponent},
  {path :'personne', component :PersonneComponent},
  {path :'formulaire', component :FormulaireComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
