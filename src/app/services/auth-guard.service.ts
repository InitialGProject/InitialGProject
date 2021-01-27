import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {
  private loggedIn = new BehaviorSubject<boolean>(false);
  isLoggedIn() {
    return this.loggedIn.asObservable();
  }
  constructor(
    private router: Router
  ) { }

  login() {

    this.loggedIn.next(true);
    this.router.navigate(['/']);

  }

  logout() {
    this.loggedIn.next(false);
    this.router.navigate(['./login']);
  }
}