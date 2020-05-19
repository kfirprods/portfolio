import { AuthenticationService } from 'src/app/services/authentication.service';
import { ProjectsService } from './services/projects.service';
import { Component, OnInit } from '@angular/core';
import { Project } from 'portfolio-types/models/project';
import TypewriterText from './components/typewriter/typewriter-text.type';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  projects: Project[];
  profileTexts: TypewriterText[];

  constructor(public auth: AuthenticationService, private projectsService: ProjectsService) {
    this.profileTexts = [
      new TypewriterText('Software development is more than just a profession - it\'s a '),
      new TypewriterText('passion!', 'highlighted')
    ];
  }

  async ngOnInit() {
    this.projects = await this.projectsService.getProjects();
  }

  async onProjectPriorityChanged($event) {
    const {project, oldPriority} = $event;

    console.log(`${project.id} priority goes from ${oldPriority} -> ${project.priority}`);
    const existingProjectId = this.projects.findIndex(p => p.priority === project.priority && p.id !== project.id);

    if (existingProjectId !== -1) {
      const existingProject = this.projects[existingProjectId];

      existingProject.priority = oldPriority;
      await this.projectsService.updateProject(existingProject);

      const newIndex = this.projects.indexOf(project);

      // Swap the conflicting projects
      [this.projects[existingProjectId], this.projects[newIndex]] = [this.projects[newIndex], this.projects[existingProjectId]];
      console.log(`Swapped project ${existingProjectId} and ${newIndex}`);
    }

    await this.projectsService.updateProject(project);
  }
}
