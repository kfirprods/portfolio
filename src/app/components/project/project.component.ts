import { ProjectsService } from './../../services/projects.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Project } from 'portfolio-types/models/project';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  @Input()
  project: Project;

  @Input()
  maxPriority: number;

  @Output()
  projectPriorityChanged = new EventEmitter<{project: Project, oldPriority: number}>();

  constructor(public auth: AuthenticationService, private projectsService: ProjectsService) { }

  ngOnInit(): void {
  }

  updateTitle(newTitle: string): void {
    this.project.title = newTitle;
    this.projectsService.updateProject(this.project);
  }

  updateParagraph(paragraphIndex: number, newParagraph: string): void {
    if (!newParagraph) {
      this.project.paragraphs.splice(paragraphIndex, 1);
    } else {
      this.project.paragraphs[paragraphIndex] = newParagraph;
    }

    this.projectsService.updateProject(this.project);
  }

  addParagraph(paragraph: string): void {
    if (!paragraph) {
      return;
    }

    this.project.paragraphs.push(paragraph);
    this.projectsService.updateProject(this.project);
  }

  increasePriority(): void {
    const oldPriority = this.project.priority;
    this.project.priority -= 1;

    this.projectPriorityChanged.emit({project: this.project, oldPriority});
  }

  decreasePriority(): void {
    const oldPriority = this.project.priority;
    this.project.priority += 1;

    this.projectPriorityChanged.emit({project: this.project, oldPriority});
  }
}
