import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-foot',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './foot.component.html',
  styleUrl: './foot.component.css'
})
export class FootComponent {

}
