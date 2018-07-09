import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {RouterModule} from '@angular/router';

// core
import {AppStoreProviders} from './app.store';
import {AuthService} from './auth/auth.service';
import {ROUTES} from './app.routing';

// primeNG
import {ToggleButtonModule} from 'primeng/togglebutton';
import {SliderModule} from 'primeng/slider';
import {GMapModule} from 'primeng/gmap';

// custom
import { AppComponent } from './app.component';
import { LeftPanelComponent } from './components/left-panel/left-panel.component';
import { LoginComponent } from './components/login/login.component';
import { CounterComponent } from './components/language-switcher/language-switcher.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AboutComponent } from './components/right-panel/about/about.component';
import { SkillsComponent } from './components/right-panel/skills/skills.component';
import { ExperienceComponent } from './components/right-panel/experience/experience.component';
import { EducationComponent } from './components/right-panel/education/education.component';
import { ContactComponent } from './components/right-panel/contact/contact.component';
import { SocialComponent } from './components/right-panel/social/social.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    LeftPanelComponent,
    LoginComponent,
    CounterComponent,
    NotFoundComponent,
    AboutComponent,
    SkillsComponent,
    ExperienceComponent,
    EducationComponent,
    ContactComponent,
    SocialComponent
  ],
  imports: [
    BrowserModule, FormsModule, BrowserAnimationsModule, HttpClientModule,
    RouterModule.forRoot(ROUTES),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    // primeng
    ToggleButtonModule, SliderModule, GMapModule
  ],
  providers: [AuthService, AppStoreProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
