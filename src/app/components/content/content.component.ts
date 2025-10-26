import { Component } from '@angular/core';
import { SkillsComponent } from "../skills/skills.component";
import { ProfileComponent } from '../profile/profile.component';
import { ExperienceComponent } from '../experience/experience.component';
import { ProjectsComponent } from '../projects/projects.component';
import { EducationComponent } from '../education/education.component';

@Component({
  selector: 'app-content',
  imports: [ProfileComponent,ExperienceComponent,ProjectsComponent,SkillsComponent,EducationComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {

}
