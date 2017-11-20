import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { HomeCliente } from '../pages/home-cliente/home-cliente';
import { Categoria } from '../pages/categoria/categoria';
import { Login } from '../pages/login/login';
import { DadosLoja } from '../pages/dados-loja/dados-loja';
import { DadosCliente } from '../pages/dados-cliente/dados-cliente';
import { HistoricoPedidos } from '../pages/historico-pedidos/historico-pedidos';
import { HistoricoPedidosCliente } from '../pages/historico-pedidos-cliente/historico-pedidos-cliente';
import { TabsPage } from '../pages/tabs-page/tabs-page';
import { Produtos } from '../pages/produtos/produtos';
import { Funcionarios } from '../pages/funcionarios/funcionarios';
import { RecebimentoLoja } from '../pages/recebimento-loja/recebimento-loja';

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
      { title: 'Início', component: HomePage },
      { title: 'Dados', component: DadosLoja},
      { title: 'Categoria', component: Categoria },
      { title: 'Sair', component: null },
    ];

    //menu loja
    this.pagesLoja = [
      { title: 'Início', component: HomePage },
      { title: 'Dados', component: DadosLoja},
      { title: 'Funcionários', component: Funcionarios},
      { title: 'Categorias', component: Categoria },
      { title: 'Produtos', component: Produtos },
      { title: 'Recebimentos', component: RecebimentoLoja },
      { title: 'Pedidos', component: HistoricoPedidos },
      { title: 'Catálogo', component: TabsPage },
      { title: 'Sair', component: null },
    ];

    // Menu funcionario
    this.pagesFuncionario = [
      { title: 'Início', component: HomePage },
      { title: 'Dados', component: DadosCliente},
      { title: 'Pedidos', component: HistoricoPedidos },
      { title: 'Sair', component: null },
    ];

    // Menu cliente
    this.pagesCliente = [
      { title: 'Início', component: HomeCliente },
      { title: 'Dados', component: DadosCliente },
      { title: 'Pedidos', component: HistoricoPedidosCliente},
      { title: 'Sair', component: null },
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
