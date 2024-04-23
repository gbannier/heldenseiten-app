import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from "@angular/router";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-foot',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './foot.component.html',
  styleUrl: './foot.component.css'
})
export class FootComponent {
  constructor(private modalService: NgbModal) {
  }
  close() {
    this.modalService.dismissAll()
  }
}
