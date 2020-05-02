import { TokenManagerService } from './token-manager.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { serverAddress } from './consts';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private http: HttpClient, private tokenManager: TokenManagerService) {
  }

  async authenticate(username: string, password: string) {
    try {
      const result = await this.http.post<{ token: string }>(`${serverAddress}/auth`, { username, password }).toPromise();
      this.tokenManager.updateToken(result.token);

      return true;
    } catch {
      return false;
    }
  }

  public get token(): string {
    return this.tokenManager.getToken();
  }

  public get loggedIn(): boolean {
    return this.token !== null;
  }
}
