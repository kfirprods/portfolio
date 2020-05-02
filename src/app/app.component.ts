import { AuthenticationService } from 'src/app/services/authentication.service';
import { ProjectsService } from './services/projects.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  projects;

  constructor(public auth: AuthenticationService, private projectsService: ProjectsService) { }

  async ngOnInit() {
    this.projects = await this.projectsService.getProjects();
  }
}
