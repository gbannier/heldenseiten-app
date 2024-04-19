import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {
  @Output() headClick = new EventEmitter<void>();
  @Output() handClick = new EventEmitter<void>();
  @Output() footClick = new EventEmitter<void>();
  onHeadClick() {
    this.headClick.emit();
  }
  onHandClick() {
    this.handClick.emit();
  }

  onFootClick() {
    this.footClick.emit();
  }
}
