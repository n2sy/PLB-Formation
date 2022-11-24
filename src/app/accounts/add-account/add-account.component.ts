import {
  Component,
  EventEmitter,
  Output,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.css'],
})
export class AddAccountComponent implements OnInit {
  @ViewChild('accName', { static: true }) controleName;

  ngOnInit(): void {
    console.log(this.controleName);
    console.log(this.controleName.nativeElement.value);
  }
  @Output() sendToHome = new EventEmitter();

  sendNewAccount(newName, newStatut) {
    // console.log(this.controleName.nativeElement.value);
    // this.controleName.nativeElement.value = 'Samy';
    this.sendToHome.emit({
      nom: newName,
      statut: newStatut,
    });
  }
}
