import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Candidat } from '../models/candidat';

@Injectable({
  providedIn: 'root',
})
export class ListCandidatsService {
  link = 'http://localhost:3000/cv/persons';
  private allCandidates = [
    // new Candidat(1, 'bart', 'simpson', 12, 'Ingénieur', 'bart.jpeg'),
    // new Candidat(2, 'homer', 'simpson', 44, 'Directeur', 'homer.jpg'),
    // new Candidat(3, 'marge', 'simpson', 33, 'Chef de projet', 'marge.jpeg'),
  ];
  constructor(private http: HttpClient) {}

  getAllCandidats() {
    return this.allCandidates;
  }
  getAllCandidatsAPI() {
    return this.http.get(this.link);
  }

  getCandidatById(id) {
    return this.allCandidates.find((c) => c.id == id);
  }
  getCandidatByIdAPI(id) {
    return this.http.get(`${this.link}/${id}`);
  }

  addCandidat(newCand) {
    newCand.id = this.allCandidates[this.allCandidates.length - 1].id + 1;
    this.allCandidates.push(newCand);
  }
  addCandidatAPI(newCand) {
    return this.http.post(this.link, newCand);
  }

  deleteCandidat(cand) {
    let i = this.allCandidates.indexOf(cand);
    this.allCandidates.splice(i, 1);
  }
  deleteCandidatAPI(idCand) {
    return this.http.delete(`${this.link}/${idCand}`);
  }

  updateCandidat(cand) {
    let i = this.allCandidates.indexOf(cand);
    this.allCandidates[i] = cand;
  }
  updateCandidatAPI(cand) {
    return this.http.put(`${this.link}/${cand._id}`, cand);
  }

  // addNewCandidat() {
  //   this.allCandidates.push(
  //     new Candidat(2, 'NEW', 'CANDIDAT', 44, 'Directeur', 'homer.jpg')
  //   );
  // }
}
