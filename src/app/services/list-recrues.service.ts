import { Injectable } from '@angular/core';
import { Candidat } from '../models/candidat';

@Injectable({
  providedIn: 'root',
})
export class ListRecruesService {
  private tabRecrures: Candidat[] = [];

  constructor() {}

  getAllRecrues() {
    return this.tabRecrures;
  }

  addNewRecrues(newRecrue) {
    if (this.tabRecrures.indexOf(newRecrue) == -1)
      this.tabRecrures.push(newRecrue);
    else alert('Ce candidat a déjà été recrutée');
  }
}
