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
import {PanelModule} from 'primeng/panel';
import {ProgressBarModule} from 'primeng/progressbar';
import {CarouselModule} from 'primeng/carousel';
import {ScrollPanelModule} from 'primeng/scrollpanel';

// custom
import { AboutComponent } from './components/right-panel/about/about.component';
import { SkillsComponent } from './components/right-panel/skills/skills.component';
import { ExperienceComponent } from './components/right-panel/experience/experience.component';
import { EducationComponent } from './components/right-panel/education/education.component';
import { SocialComponent } from './components/right-panel/social/social.component';
import { InfoRowComponent } from './components/right-panel/info-row/info-row.component';
import { FooterComponent } from './components/right-panel/footer/footer.component';
import { DynamicProgressComponent } from './components/right-panel/dynamic-progress/dynamic-progress.component';
import { ExperienceItemComponent } from './components/right-panel/experience/experience-item/experience-item.component';

import { AppComponent } from './app.component';
import { LeftPanelComponent } from './components/left-panel/left-panel.component';
import { LoginComponent } from './components/login/login.component';
import { LanguageSwitcherComponent } from './components/params-panel/language-switcher/language-switcher.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ParamsPanelComponent } from './components/params-panel/params-panel.component';
import { BlockTitleComponent } from './components/right-panel/block-title/block-title.component';
import { PeriodItemComponent } from './components/right-panel/period-item/period-item.component';
import { EducationItemComponent } from './components/right-panel/education/education-item/education-item.component';
import { TestimonialItemComponent } from './components/right-panel/testimonial-item/testimonial-item.component';
import { CircleProgressBarComponent } from './components/right-panel/circle-progress-bar/circle-progress-bar.component';
import { ContactItemComponent } from './components/right-panel/contact-item/contact-item.component';
import { CheckItemComponent } from './components/right-panel/about/check-item/check-item.component';
import { ScrollPanelComponent } from './components/scroll-panel/scroll-panel.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    LeftPanelComponent,
    LoginComponent,
    LanguageSwitcherComponent,
    NotFoundComponent,
    AboutComponent,
    SkillsComponent,
    ExperienceComponent,
    EducationComponent,
    SocialComponent,
    ParamsPanelComponent,
    InfoRowComponent,
    FooterComponent,
    DynamicProgressComponent,
    ExperienceItemComponent,
    BlockTitleComponent,
    PeriodItemComponent,
    EducationItemComponent,
    TestimonialItemComponent,
    CircleProgressBarComponent,
    ContactItemComponent,
    CheckItemComponent,
    ScrollPanelComponent
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
    ToggleButtonModule,
    SliderModule,
    PanelModule,
    ProgressBarModule,
    CarouselModule,
    ScrollPanelModule
  ],
  providers: [AuthService, AppStoreProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
