import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Candidat } from '../models/candidat';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css'],
})
export class ListeComponent {
  @Input() listeCandidats: Candidat[] = [];
  @Output() sendCandToCv = new EventEmitter();

  sendToCv(cand) {
    this.sendCandToCv.emit(cand);
  }
}
