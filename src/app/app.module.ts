import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentNameComponent } from './x/component-name/component-name.component';
import { AdresseComponent } from './composants/adresse/adresse.component';
import { StagiaireComponent } from './composants/stagiaire/stagiaire.component';
import { MenuComponent } from './composants/menu/menu.component';
import { PersonneComponent } from './modules/cours/personne/personne.component';
import { FormulaireComponent } from './composants/formulaire/formulaire.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentNameComponent,
    AdresseComponent,
    StagiaireComponent,
    MenuComponent,
    PersonneComponent,
    FormulaireComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
