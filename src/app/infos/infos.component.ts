import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Params } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-infos',
  templateUrl: './infos.component.html',
  styleUrls: ['./infos.component.css'],
})
export class InfosComponent implements OnInit {
  myId;
  constructor(private activatedRoute: ActivatedRoute) {}
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
        this.myId = p.get('id');
      },
    });
  }
}
