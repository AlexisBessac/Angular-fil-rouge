import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-modifier-retard',
  standalone: true,
  imports: [MatButtonModule, MatInputModule, MatSelectModule],
  templateUrl: './modifier-retard.component.html',
  styleUrl: './modifier-retard.component.scss'
})
export class ModifierRetardComponent {

}
