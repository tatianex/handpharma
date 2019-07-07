import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PaginaPage } from '../pages/pagina/pagina';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'informacao', loadChildren: './home/home.module#HomePageModule' },
 ];
 
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    PaginaPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    RouterModule.forRoot(routes)
  ],
  exports:[ RouterModule ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    PaginaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
