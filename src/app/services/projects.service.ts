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

  async getProjects(): Promise<Project[]> {
     const projects = await this.http.get<Project[]>(`${serverAddress}/projects`).toPromise();
     return projects.sort(project => project.priority);
  }

  async updateProject(project: Project): Promise<boolean> {
    try {
      await this.http.put(`${serverAddress}/projects/${project.id}`, {project}).toPromise();
      return Promise.resolve(true);
    } catch { // TODO: Catch specific errors, e.g. unauthorized 401
      return Promise.resolve(false);
    }
  }
}
