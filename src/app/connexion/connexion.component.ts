import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthentificationService } from '../authentification.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatButtonModule,
    MatInputModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './connexion.component.html',
  styleUrl: './connexion.component.scss',
})
export class ConnexionComponent {
  http: HttpClient = inject(HttpClient);
  formBuilder: FormBuilder = inject(FormBuilder);
  router: Router = inject(Router);
  snackBar: MatSnackBar = inject(MatSnackBar);
  authentification: AuthentificationService = inject(AuthentificationService);

  formulaire: FormGroup = this.formBuilder.group({
    email: ['a@a', [Validators.email, Validators.required]],
    password: ['root', [Validators.required]],
  });

  onConnexion() {
    if (this.formulaire.valid) {
      this.http
        .post(
          'http://backendfilrouge/connexion.php',
          this.formulaire.value
        )
        .subscribe((resultat: any) => {
          this.authentification.connexion(resultat.jwt);
  
          // Vérifier le rôle de l'utilisateur à partir de la réponse
          const role = resultat.role; 

          // Redirection en fonction du rôle
          switch (role) {
            case 'administrateur':
              this.router.navigateByUrl('/gestion-utilisateurs');
              break;
            case 'gestionnaire':
              this.router.navigateByUrl('/gestion-retard');
              break;
            case 'utilisateur':
              this.router.navigateByUrl('/accueil-utilisateur');
              break;
            default:
              // Redirection par défaut ou traitement d'erreur
              break;
          }
  
          this.snackBar.open('Vous êtes connecté', undefined, {
            panelClass: 'snack-bar-valid',
            duration: 3000,
          });
        });

        
    }
    
  }
}
