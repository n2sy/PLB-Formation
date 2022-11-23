import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
})
export class FirstComponent {
  nom = 'Samy';
  color = 'pink';
  hd = false;

  traitementDuBouton() {
    this.hd = !this.hd;
  }

  sendInput(inputValue) {
    console.log(inputValue.value);
  }

  traitementDuParent(info) {
    //alert(info);
    this.nom = info;
  }
}
