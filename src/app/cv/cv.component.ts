import { Component, OnInit } from '@angular/core';
import { Candidat } from '../models/candidat';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent implements OnInit {
  //societe = 'PLB';
  constructor() {}

  ngOnInit(): void {
    // this.societe = 'PLB';
  }

  TabCandidats: Candidat[] = [
    new Candidat(1, 'bart', 'simpson', 12, 'Ingénieur', 'bart.jpeg'),
    new Candidat(2, 'homer', 'simpson', 44, 'Directeur', 'homer.jpg'),
    new Candidat(3, 'marge', 'simpson', 33, 'Chef de projet', 'marge.jpeg'),
  ];

  clickedCandidat: Candidat;

  recupCandidat(cand) {
    this.clickedCandidat = cand;
  }
}
