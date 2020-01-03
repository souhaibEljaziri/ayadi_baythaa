import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { FunctionProvider } from '../../providers/function/function';
import { MyaccountPage } from '../myaccount/myaccount';
import { MorePage } from '../more/more';
import { FirstpagePage } from '../firstpage/firstpage';
import { Storage } from "@ionic/storage";
/**
 * Generated class for the LibraryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-library',
  templateUrl: 'library.html',
})
export class LibraryPage {
  pubs: any;
  user: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient, private provider: FunctionProvider, public storage: Storage) {
    this.get_posts();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LibraryPage');
  }
  get_posts() {

    this.provider.get_post().subscribe((res: any) => {
      console.log(res);
      this.pubs = res.data;
    })

  }
  pushpages(indexpage: any) {
    if (indexpage == "1") this.navCtrl.push(LibraryPage);
    if (indexpage == "4") this.navCtrl.push(MorePage);

  }
}
