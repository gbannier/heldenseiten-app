import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-hand',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './hand.component.html',
  styleUrl: './hand.component.css'
})
export class HandComponent {

}
