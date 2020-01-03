import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { HttpClientModule } from '@angular/common/http';
import { FirstpagePage } from '../pages/firstpage/firstpage';
import { LibraryPage } from '../pages/library/library';
import { MyaccountPage } from '../pages/myaccount/myaccount';
import { MorePage } from '../pages/more/more';
import { FunctionProvider } from '../providers/function/function';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    FirstpagePage,
    LibraryPage,
    MyaccountPage,
    MorePage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    FirstpagePage,
    LibraryPage,
    MyaccountPage,
    MorePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FunctionProvider
  ]
})
export class AppModule {}
