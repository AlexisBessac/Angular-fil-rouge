import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatIconModule} from '@angular/material/icon';
import { DatePipe } from '@angular/common'

@Component({
  selector: 'app-gestion-formation',
  standalone: true,
  imports: [RouterLink,
            MatButtonModule,
            MatIconModule,
            MatPaginatorModule,
            MatTableModule,
            HttpClientModule,
            DatePipe
  ],
  templateUrl: './gestion-formation.component.html',
  styleUrl: './gestion-formation.component.scss'
})
export class GestionFormationComponent {
  html: HttpClient = inject(HttpClient)
  listeFormation:any = []

  ngOnInit(){
   this.rafraichir()
  }

  rafraichir() {

    const jwt = localStorage.getItem("jwt");

    if(jwt) {

      this.html
        .get('http://backendfilrouge/liste-formation.php', {'headers': {'Authorization': jwt}})
        .subscribe({
          next: (result) => (this.listeFormation = result),
          error: () => alert('Erreur inconnue, contactez votre administrateur'),
        });

    }
  }


  
}
