import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  link = 'http://localhost:3000/auth/login';
  constructor(private http: HttpClient) {}

  seConnecter(credentials) {
    return this.http.post(this.link, credentials);
  }

  estConnecte() {
    let myToken = localStorage.getItem('token');
    if (myToken) return true;
    return false;
  }

  seDeconnecter() {
    localStorage.removeItem('token');
  }
}
