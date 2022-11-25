import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  defaultLangage = 'java';
  myComment = "Rien à signaler pour l'instant...";
  onSubmit(f: NgForm) {
    console.log(f);
  }

  genererPwd(f: NgForm) {
    f.setValue({
      login: '',
      password: '12345678',
      preferences: {
        langage: '',
        commentaire: '',
        exp2: '',
      },
      exemple: '',
    });
  }
  genererPwdII(f: NgForm) {
    f.form.patchValue({
      password: '12345678',
    });
  }

  onReset(f: NgForm) {
    f.reset();
  }
}
