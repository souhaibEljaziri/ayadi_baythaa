import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LibraryPage } from '../library/library';
import { MyaccountPage } from '../myaccount/myaccount';

import { FirstpagePage } from '../firstpage/firstpage';
/**
 * Generated class for the MorePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-more',
  templateUrl: 'more.html',
})
export class MorePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MorePage');
  }
  pushpages(indexpage: any) {
    if (indexpage == "1") this.navCtrl.push(LibraryPage);

    if (indexpage == "4") this.navCtrl.push(MorePage);

  }
}
