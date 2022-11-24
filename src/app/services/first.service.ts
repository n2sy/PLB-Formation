import { Injectable } from '@angular/core';
import { ListCandidatsService } from './list-candidats.service';

@Injectable()
export class FirstService {
  constructor(private candSer: ListCandidatsService) {}

  showInfos() {
    console.log('Je suis le premier service !!!!!!!!');
    console.log(this.candSer.getAllCandidats());
  }
}
