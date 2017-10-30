import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { HomeCliente } from '../pages/home-cliente/home-cliente';
import { Geo } from '../pages/geo/geo';
import { Categoria } from '../pages/categoria/categoria';
import { Login } from '../pages/login/login';
import { DetalheCategoria } from '../pages/detalhe-categoria/detalhe-categoria';
import { DadosLoja } from '../pages/dados-loja/dados-loja';
import { DadosCliente } from '../pages/dados-cliente/dados-cliente';
import { Recebimento } from '../pages/recebimento/recebimento';
import { HistoricoPedidos } from '../pages/historico-pedidos/historico-pedidos';
import { TabsPage } from '../pages/tabs-page/tabs-page';
import { Produtos } from '../pages/produtos/produtos';
import { Funcionarios } from '../pages/funcionarios/funcionarios';

import { LoginProvider } from '../providers/loginprovider'

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage:any = Login;

  pagesAdministrador: Array<{title: string, component: any}>;
  pagesLoja: Array<{title: string, component: any}>;
  pagesFuncionario: Array<{title: string, component: any}>;
  pagesCliente: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, private lp: LoginProvider) {
    this.initializeApp();

    // Menu adm
    this.pagesAdministrador = [
      { title: 'Home', component: HomePage },
      { title: 'Dados', component: DadosLoja},
      { title: 'Categoria', component: Categoria },
      { title: 'Logout', component: null },
    ];

    //menu loja
    this.pagesLoja = [
      { title: 'Home', component: HomePage },
      { title: 'Dados', component: DadosLoja},
      { title: 'Funcionarios', component: Funcionarios},
      { title: 'Categoria', component: Categoria },
      { title: 'Produtos', component: Produtos },
      { title: 'Catalogo', component: TabsPage },
      { title: 'Logout', component: null },
    ];

    // Menu funcionario
    this.pagesFuncionario = [
      { title: 'Home', component: HomePage },
      { title: 'Dados', component: DadosCliente},
      { title: 'Logout', component: null },
    ];

    // Menu cliente
    this.pagesCliente = [
      { title: 'Home', component: HomeCliente },
      { title: 'Dados', component: DadosCliente },
      { title: 'Pedidos', component: HistoricoPedidos},
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
