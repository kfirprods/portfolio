import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { serverAddress } from './consts';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  constructor(private http: HttpClient) {
  }

  async getProjects() {
    return await this.http.get(`${serverAddress}/projects`).toPromise();
  }
}
