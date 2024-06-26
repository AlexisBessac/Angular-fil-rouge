import { Component, inject } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ajout-retard',
  standalone: true,
  imports: [MatButtonModule,
            MatFormFieldModule,
            MatSelectModule,
            MatRadioModule, 
            HttpClientModule,
            ReactiveFormsModule,
            FormsModule],
  templateUrl: './ajout-retard.component.html',
  styleUrl: './ajout-retard.component.scss'
})
export class AjoutRetardComponent {
  users: any[] = [];
  selectedUser: any;

  formBuilder: FormBuilder = inject(FormBuilder);

  http:HttpClient = inject(HttpClient)

  listeEtudiant: any[] = [];

  formulaire: FormGroup = this.formBuilder.group({
    date: ['', [Validators.required]],
    listeEtudiant: ['', [Validators.required]]
  });

  ngOnInit() {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      this.http.get<any[]>('http://backendfilrouge/get-retard.php', {
        headers: { Authorization: jwt }
      }).subscribe({
        next: (data) => this.listeEtudiant = data,
        error: (erreur) => alert(erreur.error.message),
      });
    }
  }

 onAjoutRetard(){

 }
}
