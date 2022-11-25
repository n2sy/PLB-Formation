import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  defaultLangage = 'java';
  myComment = "Rien à signaler pour l'instant...";
  onSubmit(f: NgForm) {
    console.log(f);
  }

  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    // this.http.get('https://jsonplaceholder.typicode.com/uuusers').subscribe({
    //   next: (response) => {
    //     console.log(response);
    //   },
    //   error: (err) => {
    //     console.log(err);
    //   },
    //   complete: () => {
    //     console.log('Flux terminé');
    //   },
    // });
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
