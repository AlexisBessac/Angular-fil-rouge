import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';

@Component({
  selector: 'app-ajout-retard',
  standalone: true,
  imports: [MatButtonModule,
            MatFormFieldModule,
            MatSelectModule,
            MatRadioModule],
  templateUrl: './ajout-retard.component.html',
  styleUrl: './ajout-retard.component.scss'
})
export class AjoutRetardComponent {

}
