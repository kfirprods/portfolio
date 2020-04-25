import { ProjectsService } from './services/projects.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  projects;

  constructor(private projectsService: ProjectsService) { }

  async ngOnInit() {
    this.projects = await this.projectsService.getProjects();
  }
}
