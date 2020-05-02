import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
import { ReactiveFormsModule } from '@angular/forms';

import { PhotoSlideComponent } from './components/photo-slide/photo-slide.component';
import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from './main.component';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { ProjectComponent } from './components/project/project.component';
import { LoginComponent } from './components/login-component/login.component';
import { IconButtonComponent } from './components/icon-button/icon-button.component';
import { EditableLabelComponent } from './components/editable-label/editable-label.component';

export function jwtTokenGetter() {
  return localStorage.getItem('access_token');
}

@NgModule({
  declarations: [
    MainComponent,
    AppComponent,
    PhotoSlideComponent,
    ProjectComponent,
    LoginComponent,
    IconButtonComponent,
    EditableLabelComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: jwtTokenGetter,

        whitelistedDomains: ['localhost:3000', 'kfir.dev']
      }
    })
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
