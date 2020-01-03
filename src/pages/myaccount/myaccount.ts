import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { LibraryPage } from '../library/library';
import { MorePage } from '../more/more';
import { FirstpagePage } from '../firstpage/firstpage';
import { FunctionProvider } from '../../providers/function/function';
import { HomePage } from '../home/home';
import { Storage } from "@ionic/storage";
import { Validators, FormBuilder, FormGroup, AbstractControl } from '@angular/forms';






import { HttpClient, HttpHeaders } from '@angular/common/http';
/**
 * Generated class for the MyaccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-myaccount',
  templateUrl: 'myaccount.html',
})
export class MyaccountPage {
  createSuccess = false;

  public name: string;
  private form = {

    password1: '',
    password2: '',
    prespassword: ''
  };

  private form_group: FormGroup;
  private password1_control: AbstractControl;
  private password2_control: AbstractControl;
  private prespassword_control: AbstractControl;
  user: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public provider: FunctionProvider,
    private formBuilder: FormBuilder,
    private alertCtrl: AlertController,
    public http: HttpClient,
    public storage: Storage) {
    this.is_connected();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyaccountPage');
  }
  is_connected() {
    return this.storage.get("user").then((user: any) => {
      if (!user) {
        console.log(this.user);
        return this.navCtrl.setRoot(HomePage);
      }
      else {
      this.user = user;


      }
    });

  }
  showPopup(title, text) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: text,
      buttons: [
        {
          text: 'موافق'
        }
      ]
    });
    alert.present();
  }
  updatePassword() {
    // if(this.user.password.equals(this.form.prespassword))
    //  {

    if (!this.form.prespassword || !this.form.password1 || !this.form.password2) {
      this.showPopup("خطأ", "عذراً ، الرجاء التاكد من إدخال كلمة السر ");
    }
    else if (!(this.form.password1 == this.form.password2)) {
      this.showPopup("خطأ", "عذراً ، الرجاء التاكد من صحة تكرار كلمة السر  ");
    }
    else {


      this.user.data[0].password1 = this.form.password1;
      this.user.data[0].password2 = this.form.password2;
      this.user.data[0].password = this.form.password1;
      this.provider.update_password(this.user).subscribe((data: any) => {

        if (data.api == "false") {
          console.log("user or password incorrect");
        } else {
          this.showPopup("نجاح", "تم تغيير كلمة السر ");
          this.storage.set("user", this.user).then(() => {
            console.log(this.user);
          });

        }

      });
    }
  }
  pushpages(indexpage: any) {
    if (indexpage == "1") this.navCtrl.push(LibraryPage);
    if (indexpage == "2") this.navCtrl.push(FirstpagePage);
    if (indexpage == "3") this.navCtrl.push(MyaccountPage);
    if (indexpage == "4") this.navCtrl.push(MorePage);

  }


  form_validator() {
    //form validation
    this.form_group = this.formBuilder.group({
      password1_control: ['', Validators.compose([Validators.required, Validators.minLength(8)])],
      password2_control: ['', Validators.compose([Validators.required, Validators.minLength(8)])],
      prespassword_control: ['', Validators.compose([Validators.required, Validators.minLength(8)])],

    });


    this.password1_control = this.form_group.controls['password1_control'];
    this.password2_control = this.form_group.controls['password2_control'];
    this.prespassword_control = this.form_group.controls['prespassword_control'];

    //form validation
  }
}
