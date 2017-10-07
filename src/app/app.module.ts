import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { HomeCliente } from '../pages/home-cliente/home-cliente';
import { Geo } from '../pages/geo/geo';
import { Login } from '../pages/login/login';
import { Signup } from '../pages/signup/signup';
import { Categoria } from '../pages/categoria/categoria';
import { DetalheItem } from '../pages/detalhe-item/detalhe-item';
import { DadosLoja } from '../pages/dados-loja/dados-loja';
import { DadosCliente } from '../pages/dados-cliente/dados-cliente';

import { Json } from '../providers/json';
import { LoginProvider } from '../providers/loginprovider';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    HomeCliente,
    Geo,
    Login,
    Signup,
    Categoria,
    DetalheItem,
    DadosLoja,
    DadosCliente
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
    HomeCliente,
    Geo,
    Login,
    Signup,
    Categoria,
    DetalheItem,
    DadosLoja,
    DadosCliente
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
