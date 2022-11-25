import { Injectable } from '@angular/core';

@Injectable()
export class ListServerService {
  private tabServers = [
    {
      id: 1,
      nom: 'Serveur de production',
      statut: 'offline',
    },
    {
      id: 2,
      nom: 'Serveur de test',
      statut: 'onnline',
    },
    {
      id: 3,
      nom: 'Serveur de développement',
      statut: 'offline',
    },
  ];

  constructor() {}
  getAllServers() {
    return this.tabServers;
  }
  getServerById(id) {
    return this.tabServers.find((s) => s.id == id);
  }
}
