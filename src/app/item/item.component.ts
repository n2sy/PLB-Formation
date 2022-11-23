import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Candidat } from '../models/candidat';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent {
  @Input() oneCandidat: Candidat;
  @Output() sendCandToListe = new EventEmitter<Candidat>();

  sendToListe() {
    this.sendCandToListe.emit(this.oneCandidat);
  }
}
