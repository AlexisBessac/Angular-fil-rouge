import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AuthentificationService } from './authentification.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, 
            RouterLink, 
            RouterLinkActive,
            FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  texteRecherche: string = '';
  
  router: Router = inject(Router);
  snackBar: MatSnackBar = inject(MatSnackBar);
  
  authentification: AuthentificationService =  inject(AuthentificationService)

  onRecherche() {
    this.router.navigate(['/accueil', this.texteRecherche]);
  }

  onDeconnexion() {
    
    this.authentification.deconnexion();

    this.snackBar.open('Vous êtes deconnecté', undefined, {
      panelClass: 'snack-bar-valid',
      duration: 3000,
    });

    this.router.navigateByUrl('/connexion');
  }

}
