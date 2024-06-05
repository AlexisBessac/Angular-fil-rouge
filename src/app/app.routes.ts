import { Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ModifierUtilisateurComponent } from './modifier-utilisateur/modifier-utilisateur.component';
import { GestionUtilisateurComponent } from './gestion-utilisateur/gestion-utilisateur.component';
import { Page404Component } from './page404/page404.component';
import { ConnexionComponent } from './connexion/connexion.component';

export const routes: Routes = [
    {path: "accueil", component: AccueilComponent},
    {path: "connexion", component: ConnexionComponent},
    {path: "ajout-utilisateur", component: ModifierUtilisateurComponent},
    {path: "modifier-utilisateur/:id", component: ModifierUtilisateurComponent},
    {path: "gestion-utilisateurs", component: GestionUtilisateurComponent},
    {path: "", redirectTo: "accueil", pathMatch: "full" },
    {path: "", component :Page404Component},
];
