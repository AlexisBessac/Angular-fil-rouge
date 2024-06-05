import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatIconModule} from '@angular/material/icon';


@Component({
  selector: 'app-gestion-utilisateur',
  standalone: true,
  imports: [RouterLink, 
            MatButtonModule, 
            HttpClientModule,
            MatTableModule,
            MatPaginatorModule, 
            MatIconModule
          ],
  templateUrl: './gestion-utilisateur.component.html',
  styleUrl: './gestion-utilisateur.component.scss'
})
export class GestionUtilisateurComponent {
  html: HttpClient = inject(HttpClient)
  listeUtilisateur:any = []

  ngOnInit(){
   this.rafraichir()
  }

  rafraichir() {

    const jwt = localStorage.getItem("jwt");

    if(jwt) {

      this.html
        .get('http://backendfilrouge/liste-utilisateur.php', {'headers': {'Authorization': jwt}})
        .subscribe({
          next: (result) => (this.listeUtilisateur = result),
          error: () => alert('Erreur inconnue, contactez votre administrateur'),
        });

    }
  }


  onSuppressionUtilisateur(idUtilisateur : number){
    if(confirm("Etes vous sûr de vouloir supprimer cet utilisateur")){
      
      const jwt = localStorage.getItem("jwt");

      if(jwt){
        
      }
      this.html
      .delete("http://backendfilrouge/delete-user.php?id=" + idUtilisateur)
      .subscribe({
        next: (result) => this.rafraichir(),
        error: () => alert('Erreur inconnue contactez votre administrateur')
      })
    }
  }
}
