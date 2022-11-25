import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  defaultLangage = 'java';
  myComment = "Rien à signaler pour l'instant...";
  notAllowed = false;
  onSubmit(f) {
    // console.log(f);
    this.authSer.seConnecter(f.value).subscribe({
      next: (response) => {
        console.log(response);
        localStorage.setItem('token', response['token']);
        this.router.navigateByUrl('/cv');
      },
      error: (err) => {
        this.notAllowed = true;
        f.reset();
      },
    });
  }

  constructor(private authSer: AuthService, private router: Router) {}
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
