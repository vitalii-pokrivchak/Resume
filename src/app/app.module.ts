import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProfileComponent } from '../components/profile/profile.component';
import { SkillComponent } from '../components/skill/skill.component';
import { EducationComponent } from '../components/education/education.component';
import { ProgressComponent } from '../components/progress/progress.component';
import { SocialNetworkComponent } from '../components/social-network/social-network.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    SkillComponent,
    EducationComponent,
    ProgressComponent,
    SocialNetworkComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
