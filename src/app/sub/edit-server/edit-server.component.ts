import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListServerService } from '../list-server.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css'],
})
export class EditServerComponent {
  editedServer;
  constructor(
    private activatedRoute: ActivatedRoute,
    private serService: ListServerService
  ) {}

  ngOnInit(): void {
    // Recupération du route paramter
    this.activatedRoute.paramMap.subscribe({
      next: (p) => {
        this.editedServer = this.serService.getServerById(p.get('myid'));
      },
    });
  }
}
