import { Component, OnInit } from '@angular/core';
import { Candidat } from '../models/candidat';
import { FirstService } from '../services/first.service';
import { ListCandidatsService } from '../services/list-candidats.service';
import { ListServerService } from '../sub/list-server.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
  providers: [],
})
export class CvComponent implements OnInit {
  //societe = 'PLB';
  TabCandidats;

  clickedCandidat: Candidat;
  constructor(
    private firstSer: FirstService,
    private candSer: ListCandidatsService,
    private serSer: ListServerService
  ) {}

  ngOnInit(): void {
    // this.societe = 'PLB';
    // this.firstSer.showInfos();
    // this.TabCandidats = this.candSer.getAllCandidats();
    //console.log(this.serSer.getAllServers());
    this.candSer.getAllCandidatsAPI().subscribe({
      next: (response) => {
        this.TabCandidats = response;
        console.log(this.TabCandidats);
      },
    });
    console.log('Soufiane');
  }

  recupCandidat(cand) {
    this.clickedCandidat = cand;
  }

  // addCandidat() {
  //   this.candSer.addNewCandidat();
  // }

  showCands() {
    console.log(this.candSer.getAllCandidats());
  }
}
