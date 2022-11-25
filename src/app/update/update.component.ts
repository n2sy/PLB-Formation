import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ListCandidatsService } from '../services/list-candidats.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],
})
export class UpdateComponent implements OnInit {
  selCandidat;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private CandSer: ListCandidatsService
  ) {}
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe({
      next: (p: ParamMap) => {
        this.CandSer.getCandidatByIdAPI(p.get('id')).subscribe({
          next: (response) => {
            this.selCandidat = response;
          },
          error: (err) => {
            console.log(err);
          },
        });
      },
    });
  }

  onUpdate() {
    this.CandSer.updateCandidatAPI(this.selCandidat).subscribe({
      next: (response) => {
        alert('Ce candidat a bien été mis à jour');
        this.router.navigateByUrl('/cv');
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
