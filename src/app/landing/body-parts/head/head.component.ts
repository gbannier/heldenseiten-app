import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from "@angular/router";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-head',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './head.component.html',
  styleUrl: './head.component.css'
})
export class HeadComponent {
  constructor(private modalService: NgbModal) {
  }
  close() {
    this.modalService.dismissAll()
  }
}
