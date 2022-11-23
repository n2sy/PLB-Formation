import { Component } from '@angular/core';

@Component({
  selector: 'app-ms-word',
  templateUrl: './ms-word.component.html',
  styleUrls: ['./ms-word.component.css'],
})
export class MsWordComponent {
  listFonts = ['', 'Garamond', 'Phosphate', 'Arial'];
  bgColor;
  txtColor;
  fSize;
  font;

  changeSize(newSize) {
    this.fSize = `${newSize}px`;
  }
}
