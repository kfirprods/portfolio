import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';


const TOKEN_STORAGE_KEY = 'access_token';


@Injectable({
  providedIn: 'root'
})
export class TokenManagerService {
  constructor(private jwtHelper: JwtHelperService) {
  }

  updateToken(newToken: string) {
    localStorage.setItem(TOKEN_STORAGE_KEY, newToken);
  }

  getToken() {
    const token = localStorage.getItem(TOKEN_STORAGE_KEY);

    if (!token) {
      return null;
    }

    if (this.jwtHelper.isTokenExpired(token)) {
      return null;
    }

    return token;
  }
}
