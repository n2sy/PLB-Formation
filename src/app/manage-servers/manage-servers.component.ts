import { Component } from '@angular/core';

@Component({
  selector: 'app-manage-servers',
  templateUrl: './manage-servers.component.html',
  styleUrls: ['./manage-servers.component.css'],
})
export class ManageServersComponent {
  selectedStatut = '';
  listServers = [
    {
      nom: 'Production server',
      type: 'small',
      date_d: new Date(),
      statut: 'critical',
    },
    {
      nom: 'Test Development server',
      type: 'large',
      date_d: new Date(),
      statut: 'stable',
    },
    {
      nom: 'Production Test server',
      type: 'medium',
      date_d: new Date(),
      statut: 'offline',
    },
    {
      nom: 'Nidhal server',
      type: 'small',
      date_d: new Date(),
      statut: 'stable',
    },
  ];
  addServer() {
    this.listServers.push({
      nom: 'NEW SERVER',
      type: 'small',
      date_d: new Date(),
      statut: 'stable',
    });
  }

  affecterClass(st) {
    switch (st) {
      case 'stable':
        return { 'list-group-item-success': true };
    }
    return {
      'list-group-item-success': st == 'stable',
      'list-group-item-danger': st == 'critical',
      'list-group-item-warning': st == 'offline',
    };
  }
}
