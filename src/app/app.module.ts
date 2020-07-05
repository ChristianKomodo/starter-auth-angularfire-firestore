import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { BlogComponent } from './blog/blog.component';
import { LoginComponent } from './login/login.component';
import { SuperSecretComponent } from './super-secret/super-secret.component';

const config = {
  apiKey: 'AIzaSyDV03XDoV7Wo6Q49uH-BzeF0q9m0-75xgM',
  authDomain: 'tomtomcms-b09f3.firebaseapp.com',
  databaseURL: 'https://tomtomcms-b09f3.firebaseio.com',
  projectId: 'tomtomcms-b09f3',
  storageBucket: 'tomtomcms-b09f3.appspot.com',
  messagingSenderId: '46123510046',
  appId: '1:46123510046:web:8722891557fe86af3a810f'
};

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule,
    AngularFireAuthModule,
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    BlogComponent,
    LoginComponent,
    SuperSecretComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
