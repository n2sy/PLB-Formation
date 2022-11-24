import { Component } from '@angular/core';

@Component({
  selector: 'app-home-account',
  templateUrl: './home-account.component.html',
  styleUrls: ['./home-account.component.css'],
})
export class HomeAccountComponent {
  listAccounts = [
    {
      nom: 'Master Account',
      statut: 'active',
    },
  ];

  recupNewAccount(newAccount) {
    this.listAccounts.push(newAccount);
  }

  changeStatut(acc, newStatut) {
    acc.statut = newStatut;
  }
}
