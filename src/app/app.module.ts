import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Geo } from '../pages/geo/geo';
import { TesteJson } from '../pages/teste-json/teste-json';
import { Login } from '../pages/login/login';
import { Signup } from '../pages/signup/signup';

import { Json } from '../providers/json';
import { LoginProvider } from '../providers/loginprovider';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Geo,
    TesteJson,
    Login,
    Signup
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Geo,
    TesteJson,
    Login,
    Signup
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Json,
    LoginProvider
  ]
})
export class AppModule {}
