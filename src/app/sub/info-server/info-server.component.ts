import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ListServerService } from '../list-server.service';

@Component({
  selector: 'app-info-server',
  templateUrl: './info-server.component.html',
  styleUrls: ['./info-server.component.css'],
})
export class InfoServerComponent implements OnInit {
  selectedServer;
  showEditBtn = false;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private serService: ListServerService
  ) {}

  ngOnInit(): void {
    // Recupération du route paramter
    this.activatedRoute.paramMap.subscribe({
      next: (p: ParamMap) => {
        this.selectedServer = this.serService.getServerById(p.get('myid'));
      },
    });

    // Récupération du query parameter
    this.activatedRoute.queryParamMap.subscribe({
      next: (p: ParamMap) => {
        // this.showEditBtn = p.get('allowEdit') == '1' ? true : false;
        this.showEditBtn = p.get('allowEdit') != '1';
      },
    });
  }

  goToEdit() {
    this.router.navigate(['/serveurs', this.selectedServer.id, 'edit']);
  }
}
