import { Component, inject } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-modifier-formation',
  standalone: true,
  imports: [HttpClientModule,
            MatButtonModule,
            MatInputModule,
            MatSnackBarModule,
            FormsModule,
            ReactiveFormsModule
  ],
  templateUrl: './modifier-formation.component.html',
  styleUrl: './modifier-formation.component.scss'
})
export class ModifierFormationComponent {
  
  http: HttpClient = inject(HttpClient);
  formBuilder: FormBuilder = inject(FormBuilder);
  snackBar: MatSnackBar = inject(MatSnackBar);
  router: Router = inject(Router);
  route: ActivatedRoute = inject(ActivatedRoute);

  lessonId?: number;

  formulaire: FormGroup = this.formBuilder.group({
    name_formation: ['', [Validators.required]],
    date_debut: ['', [Validators.required]],
    date_fin: ['', [Validators.required]],
    place: ['', [Validators.required]],
    city: ['', [Validators.required]],
  });

  onAjoutFormation() {
    if (this.formulaire.valid) {
      const url = this.lessonId
        ? 'http://backendfilrouge/edit-lesson.php?id=' +
          this.lessonId
        : 'http://backendfilrouge/ajout-formation.php';


       const jwt = localStorage.getItem('jwt');

        if (jwt) {

          this.http
            .post(url, this.formulaire.value, {
              headers: { Authorization: jwt },
            })
            .subscribe({
              next: (resultat) => {
                this.snackBar.open(
                  "La formation a bien été " +
                    (this.lessonId ? 'modifié' : 'ajouté'),
                  undefined,
                  {
                    panelClass: 'snack-bar-valid',
                    duration: 3000,
                  }
                );
                this.router.navigateByUrl('/gestion-formations');
              },
              error: (erreur) => {
                if (erreur.status == 409) {
                  alert(erreur.error.message);
                } else {
                  alert('Erreur inconnue, contactez votre administrateur');
                }
              },
            });
        }
    }
  }
}
