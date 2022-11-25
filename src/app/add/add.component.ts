import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ListCandidatsService } from '../services/list-candidats.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent {
  constructor(private router: Router, private candSer: ListCandidatsService) {}

  onAjouter(newC) {
    this.candSer.addCandidatAPI(newC).subscribe({
      next: (response) => {
        alert("Un nouveau candidat vient d'être crée");
        this.router.navigateByUrl('/cv');
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
