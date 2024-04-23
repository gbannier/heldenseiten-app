import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from "@angular/router";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-hand',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './hand.component.html',
  styleUrl: './hand.component.css'
})
export class HandComponent {
 constructor(private modalService: NgbModal) {
 }
  close() {
    this.modalService.dismissAll()
  }
}
