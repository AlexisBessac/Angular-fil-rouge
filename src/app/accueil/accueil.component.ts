import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { DatePipe } from '@angular/common'

@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [MatButtonModule, 
            MatTableModule, 
            HttpClientModule,
            MatPaginatorModule,
            DatePipe],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.scss'
})
export class AccueilComponent {
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
