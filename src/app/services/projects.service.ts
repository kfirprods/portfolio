import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Project} from 'portfolio-types/models/project';

import { serverAddress } from './consts';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  constructor(private http: HttpClient) {
  }

  async getProjects(): Promise<any> {
    return await this.http.get(`${serverAddress}/projects`).toPromise();
  }

  async updateProject(project: Project): Promise<boolean> {
    try {
      await this.http.put(`${serverAddress}/projects/${project.id}`, {project}).toPromise();
      return true;
    } catch { // TODO: Catch errors specifically, e.g. unauthorized 401
      return false;
    }
  }
}
