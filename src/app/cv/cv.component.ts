import { Component } from '@angular/core';
import { Candidat } from '../models/candidat';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent {
  TabCandidats: Candidat[] = [
    new Candidat(1, 'Bart', 'Simpson', 12, 'Ingénieur', 'bart.jpeg'),
    new Candidat(1, 'Bart', 'Simpson', 12, 'Ingénieur'),
  ];
}
