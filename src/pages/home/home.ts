import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from "@ionic/storage";
import { HttpClient } from '@angular/common/http';
import { FunctionProvider } from '../../providers/function/function';
import { FirstpagePage } from '../firstpage/firstpage';
import { LibraryPage } from '../library/library';
import { MyaccountPage } from '../myaccount/myaccount';
import { MorePage } from '../more/more';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  createSuccess = false;
  private form = {
    email: '',
    password: ''
  };
  error_login: number;
  constructor(public navCtrl: NavController, public http: HttpClient, private provider: FunctionProvider,
    public storage: Storage) {
    this.error_login = 0;
  }
  login() {
    this.provider.connect(this.form).subscribe((data: any) => {
      console.log(data);
      if (data.api_status !== 1 || data.data.length === 0) {

        this.error_login = 1;
      } else {
        console.log(data);

        this.error_login = 0;
        this.storage.set("user", data).then(() => {

          this.navCtrl.setRoot(FirstpagePage);
        });

      }

    }), err => {
      console.log(err);
    };
  }
  pushpages(indexpage: any) {
    if (indexpage == "1") this.navCtrl.push(LibraryPage);
    if (indexpage == "4") this.navCtrl.push(MorePage);

  }
}
