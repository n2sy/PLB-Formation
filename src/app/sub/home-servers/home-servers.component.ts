import { Component, OnInit } from '@angular/core';
import { ListCandidatsService } from 'src/app/services/list-candidats.service';
import { ListServerService } from '../list-server.service';

@Component({
  selector: 'app-home-servers',
  templateUrl: './home-servers.component.html',
  styleUrls: ['./home-servers.component.css'],
})
export class HomeServersComponent implements OnInit {
  tab = [];

  constructor(
    private serverSer: ListServerService,
    private candSer: ListCandidatsService
  ) {}
  ngOnInit(): void {
    this.tab = this.serverSer.getAllServers();
    console.log('.....');

    console.log(this.candSer.getAllCandidats());
  }
}
