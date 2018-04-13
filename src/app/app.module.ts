import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { LeftPanelComponent } from './components/left-panel/left-panel.component';
import { RightPanelComponent } from './components/right-panel/right-panel.component';

import {ToggleButtonModule} from 'primeng/togglebutton';
import {SliderModule} from 'primeng/slider';

import {AuthService} from './auth/auth.service';
import {ROUTES} from './app.routing';
import { LoginComponent } from './components/login/login.component';
import { CounterComponent } from './components/language-switcher/language-switcher.component';
import {AppStoreProviders} from './app.store';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    LeftPanelComponent,
    RightPanelComponent,
    LoginComponent,
    CounterComponent
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
    ToggleButtonModule, SliderModule
  ],
  providers: [AuthService, AppStoreProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
