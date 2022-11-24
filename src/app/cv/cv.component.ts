import { Component, OnInit } from '@angular/core';
import { Candidat } from '../models/candidat';
import { FirstService } from '../services/first.service';
import { ListCandidatsService } from '../services/list-candidats.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
  providers: [],
})
export class CvComponent implements OnInit {
  //societe = 'PLB';
  TabCandidats: Candidat[] = [];

  clickedCandidat: Candidat;
  constructor(
    private firstSer: FirstService,
    private candSer: ListCandidatsService
  ) {}

  ngOnInit(): void {
    // this.societe = 'PLB';
    this.firstSer.showInfos();
    this.TabCandidats = this.candSer.getAllCandidats();
  }

  recupCandidat(cand) {
    this.clickedCandidat = cand;
  }

  addCandidat() {
    this.candSer.addNewCandidat();
  }

  showCands() {
    console.log(this.candSer.getAllCandidats());
  }
}
