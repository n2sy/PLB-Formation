import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ListCandidatsService } from '../services/list-candidats.service';

@Component({
  selector: 'app-infos',
  templateUrl: './infos.component.html',
  styleUrls: ['./infos.component.css'],
})
export class InfosComponent implements OnInit {
  myId;
  selCandidat;
  constructor(
    private activatedRoute: ActivatedRoute,
    private location: Location,
    private router: Router,
    private CandSer: ListCandidatsService
  ) {}

  ngOnInit(): void {
    // V1 avec snapchot
    // this.myId = this.activatedRoute.snapshot.params['id'];
    // this.myId = this.activatedRoute.snapshot.paramMap.get('id');

    // V2 avec observables
    // avec Params
    // this.activatedRoute.params.subscribe({
    //   next: (p: Params) => {
    //     this.myId = p['id'];
    //   },
    // });

    //avec ParamMap
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
        //this.router.navigateByUrl("..");
        // this.location.back();
      },
    });
  }

  onDelete() {
    if (confirm('Etes-vous sur de vouloir supprimer ce candidat ?')) {
      this.CandSer.deleteCandidatAPI(this.selCandidat._id).subscribe({
        next: (response) => {
          alert('Le candidat a été bien supprimé');
          this.router.navigateByUrl('/cv');
        },
        error: (err) => {
          console.log(err);
        },
      });
    }
  }
}
