import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css'],
})
export class SecondComponent {
  @Input() cl = 'blue';
  @Input() age = 30;
  @Output() msgToParent = new EventEmitter();

  sendToParent() {
    this.msgToParent.emit('Message de la part de Second Component');
  }
}
