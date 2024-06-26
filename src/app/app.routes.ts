import { Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ModifierUtilisateurComponent } from './modifier-utilisateur/modifier-utilisateur.component';
import { GestionUtilisateurComponent } from './gestion-utilisateur/gestion-utilisateur.component';
import { Page404Component } from './page404/page404.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { AjoutRetardComponent } from './ajout-retard/ajout-retard.component';
import { GestionRetardComponent } from './gestion-retard/gestion-retard.component';
import { TableauUtilisateurComponent } from './tableau-utilisateur/tableau-utilisateur.component';
import { GestionFormationComponent } from './gestion-formation/gestion-formation.component';
import { ModifierFormationComponent } from './modifier-formation/modifier-formation.component';

export const routes: Routes = [
    {path: "accueil", component: AccueilComponent},
    {path: "connexion", component: ConnexionComponent},
    {path: "ajout-utilisateur", component: ModifierUtilisateurComponent},
    {path: "ajout-formation", component: ModifierFormationComponent},
    {path: "ajout-retard", component: AjoutRetardComponent},
    {path: "modifier-utilisateur/:id", component: ModifierUtilisateurComponent},
    {path :"modifier-formation/:id", component: ModifierFormationComponent},
    {path: "gestion-utilisateurs", component: GestionUtilisateurComponent},
    {path: "gestion-retard", component: GestionRetardComponent},
    {path: "gestion-formations", component: GestionFormationComponent},
    {path: "accueil-utilisateur", component: TableauUtilisateurComponent},
    {path: "", redirectTo: "accueil", pathMatch: "full" },
    {path: "", component :Page404Component},
];
