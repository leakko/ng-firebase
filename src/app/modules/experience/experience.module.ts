import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperienceComponent } from './experience.component';
import { ExperienceRoutingModule } from './experience-routing-module';
import { SharedModule } from '../shared/shared.module';
import { ExperienceCardComponent } from './components/experience-card/experience-card.component';



@NgModule({
  declarations: [
    ExperienceComponent,
    ExperienceCardComponent
  ],
  imports: [
    CommonModule,
    ExperienceRoutingModule,
    SharedModule
  ]
})
export class ExperienceModule { }
