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
import { DetalheCategoria } from '../pages/detalhe-categoria/detalhe-categoria';
import { DadosLoja } from '../pages/dados-loja/dados-loja';
import { DadosCliente } from '../pages/dados-cliente/dados-cliente';
import { Recebimento } from '../pages/recebimento/recebimento';
import { TabsPage } from '../pages/tabs-page/tabs-page';
import { Comida } from '../pages/comida/comida';
import { Bebida } from '../pages/bebida/bebida';
import { Checkout } from '../pages/checkout/checkout';
import { HistoricoPedidos } from '../pages/historico-pedidos/historico-pedidos';
import { DetalhePedido } from '../pages/detalhe-pedido/detalhe-pedido';
import { Produtos } from '../pages/produtos/produtos';
import { DetalheProduto } from '../pages/detalhe-produto/detalhe-produto';
import { Funcionarios } from '../pages/funcionarios/funcionarios';
import { DetalhesFuncionario } from '../pages/detalhes-funcionario/detalhes-funcionario';

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
    DetalheCategoria,
    DadosLoja,
    DadosCliente,
    Recebimento,
    TabsPage,
    Comida,
    Bebida,
    Checkout,
    HistoricoPedidos,
    DetalhePedido,
    Produtos,
    DetalheProduto,
    Funcionarios,
    DetalhesFuncionario
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp, {
      tabsHideOnSubPages: true
    })
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
    DetalheCategoria,
    DadosLoja,
    DadosCliente,
    Recebimento,
    TabsPage,
    Comida,
    Bebida,
    Checkout,
    HistoricoPedidos,
    DetalhePedido,
    Produtos,
    DetalheProduto,
    Funcionarios,
    DetalhesFuncionario
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
