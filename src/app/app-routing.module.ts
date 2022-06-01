import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'home', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)}, 
  { path: 'portfolio', loadChildren: () => import('./modules/portfolio/portfolio.module').then(m => m.PortfolioModule) },
  { path: 'contact', loadChildren: () => import('./modules/contact/contact.module').then(m => m.ContactModule) },
  { path: 'education', loadChildren: () => import('./modules/education/education.module').then(m => m.EducationModule) },
  { path: 'experience', loadChildren: () => import('./modules/experience/experience.module').then(m => m.ExperienceModule) },
  { path: 'resume', loadChildren: () => import('./modules/resume/resume.module').then(m => m.ResumeModule) },
  { path: 'skills', loadChildren: () => import('./modules/skills/skills.module').then(m => m.SkillsModule) },
  { path: '', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule), pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
