import { Component, inject } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { DatePipe } from '@angular/common'
import { HttpClient, HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-gestion-retard',
  standalone: true,
  imports: [MatButtonModule,
            MatTableModule,
            MatPaginatorModule,
            DatePipe,
            HttpClientModule
  ],
  templateUrl: './gestion-retard.component.html',
  styleUrl: './gestion-retard.component.scss'
})
export class GestionRetardComponent {
  retardListe: any
  
  html: HttpClient = inject(HttpClient);

  ngOnInit(){
    this.rafraichir()
  }

  rafraichir() {

    const jwt = localStorage.getItem("jwt");

    if(jwt) {

      this.html
        .get('http://backendfilrouge/liste-retard.php', {'headers': {'Authorization': jwt}})
        .subscribe({
          next: (result) => (this.retardListe = result),
          error: () => alert('Erreur inconnue, contactez votre administrateur'),
        });

    }
  }
}
