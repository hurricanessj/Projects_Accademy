import { Component } from '@angular/core';
import { Project } from '../models/Project';
import { ProjectService } from '../service/project.service';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projectList: Project[] = [];
  selectedProg: Project | null = null

  constructor(private progService: ProjectService, private router: Router, protected authService : AuthService) { }

loadProg() {
  this.progService.getProjects().subscribe((prog) => {
    this.projectList = prog;
    console.log('Progetti caricati:', this.projectList);
  });
}

  ngOnInit() {
    this.loadProg()
  }

  saveProject(project: Project) {
    if (project.id) {

      this.progService.updateProject(project).subscribe(() => this.loadProg())

    } else {

      let progToAdd = { ...project }
      delete progToAdd.id

      console.log('user to add', progToAdd)
      this.progService.addProject(progToAdd).subscribe(() => this.loadProg())

    }
    this.resetForm()
  }

  editProg(prog: Project) {
    console.log(prog)
    this.selectedProg = { ...prog }
  }

  deleteProg(id: any) {
    this.progService.deleteProject(id).subscribe(() => this.loadProg())

  }
  resetForm() {
    this.selectedProg = null
  }


}
