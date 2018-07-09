import { Routes } from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {AboutComponent} from './components/right-panel/about/about.component';
import {SkillsComponent} from './components/right-panel/skills/skills.component';
import {ContactComponent} from './components/right-panel/contact/contact.component';
import {EducationComponent} from './components/right-panel/education/education.component';
import {ExperienceComponent} from './components/right-panel/experience/experience.component';
import {SocialComponent} from './components/right-panel/social/social.component';

export const ROUTES: Routes = [
  { path: '', redirectTo: 'about', pathMatch: 'full' },

  { path: 'about', component: AboutComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'education', component: EducationComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'social/:url', component: SocialComponent },

  { path: 'login', component: LoginComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: 'not-found' }
];
