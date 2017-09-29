import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { Geo } from '../pages/geo/geo';
import { Categoria } from '../pages/categoria/categoria';
import { Login } from '../pages/login/login';
import { DetalheItem } from '../pages/detalhe-item/detalhe-item';
import { DadosLoja } from '../pages/dados-loja/dados-loja';

import { LoginProvider } from '../providers/loginprovider'

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage:any = Login;

  pages: Array<{title: string, component: any}>;
  pages1: Array<{title: string, component: any}>;
  pages2: Array<{title: string, component: any}>;
  pages3: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, private lp: LoginProvider) {
    this.initializeApp();

    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'List', component: Geo },
      { title: 'Dados', component: DadosLoja},
      { title: 'Categoria', component: Categoria },
      { title: 'Logout', component: null },
    ];

    this.pages1 = [
      { title: 'Home', component: HomePage },
      { title: 'Dados', component: DadosLoja},
      { title: 'Categoria', component: Categoria },
      { title: 'Catalogo', component: null },
      { title: 'Logout', component: null },
    ];

    // Menu funcionario
    this.pages2 = [
      { title: 'Home', component: HomePage },
      { title: 'Dados', component: null},
      { title: 'Logout', component: null },
    ];

    // Menu cliente
    this.pages3 = [
      { title: 'Home', component: HomePage },
      { title: 'Dados', component: null},
      { title: 'Pedidos', component: null},
      { title: 'Logout', component: null },
    ];
  }
  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    if(page.component) {
      this.nav.setRoot(page.component);
    } else {
      this.lp.logout();
      this.nav.setRoot(Login);
    }
  }
}
