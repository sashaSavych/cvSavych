import { Injectable } from '@angular/core';
import * as auth0 from 'auth0-js';
import {Router} from '@angular/router';

@Injectable()
export class AuthService {

  auth0 = new auth0.WebAuth({
    clientID: 'yjRaQzZgINIBNh6Dh0FNC7VKszoip690',
    domain: 'osavych.eu.auth0.com',
    responseType: 'token id_token',
    audience: 'https://osavych.eu.auth0.com/userinfo',
    redirectUri: 'http://localhost:2203/login',
    scope: 'openid'
  });

  constructor(public router: Router) {  }

  private static setSession(authResult): void {
    const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
  }

  public login(): void {
    this.auth0.authorize();
  }

  public handleAuthentication(): void {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        window.location.hash = '';
        AuthService.setSession(authResult);
        this.router.navigate(['/']);
      } else if (err) {
        this.login();
        console.error(err);
      }
    });
  }

  public logout(): void {
    this.login();
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
  }

  public isAuthenticated(): boolean {
    const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
  }

}
