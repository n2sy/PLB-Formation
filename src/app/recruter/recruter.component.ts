import { Component, OnInit } from '@angular/core';
import { ListRecruesService } from '../services/list-recrues.service';

@Component({
  selector: 'app-recruter',
  templateUrl: './recruter.component.html',
  styleUrls: ['./recruter.component.css'],
})
export class RecruterComponent implements OnInit {
  tabRecrues = [];
  constructor(private recrueSer: ListRecruesService) {}
  ngOnInit(): void {
    this.tabRecrues = this.recrueSer.getAllRecrues();
  }
}
