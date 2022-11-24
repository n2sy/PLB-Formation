import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css'],
})
export class AccueilComponent {
  constructor(private router: Router) {}

  goToServers() {
    this.router.navigateByUrl('/manage-servers');
  }

  goToCv() {
    this.router.navigate(['/cv']);
  }
}
