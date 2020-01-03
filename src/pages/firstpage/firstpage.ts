import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Storage } from "@ionic/storage";
import { HomePage } from '../home/home';
import { LibraryPage } from '../library/library';
import { MyaccountPage } from '../myaccount/myaccount';
import { MorePage } from '../more/more';
import { FunctionProvider } from '../../providers/function/function';

/**
 * Generated class for the FirstpagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-firstpage',
  templateUrl: 'firstpage.html',
})
export class FirstpagePage {
  public index: any;
  public NBSons: any;
  private all_Sons = [];
  public NBObject: any;
  private all_Object = [];
  public NBNotes: any;
  private all_Nots = [];
  createSuccess = false;
  validfamilydata = false;
  validfamilychildren = false;
  validfamilyneeds = false;
  validfamilyvisite = false;
  validfamilynotes = false;
  user: any;
  customYearValues = [2020, 2016, 2008, 2004, 2000, 1996];
  customDayShortNames = ['s\u00f8n', 'man', 'tir', 'ons', 'tor', 'fre', 'l\u00f8r'];
  customPickerOptions: any;
  private familynotes: Array<any> = [{
    notes: '',
    id_familydata: 0
  }, {
    notes: '',
    id_familydata: 0
  }, {
    notes: '',
    id_familydata: 0
  }, {
    notes: '',
    id_familydata: 0
  }, {
    notes: '',
    id_familydata: 0
  }, {
    notes: '',
    id_familydata: 0
  }, {
    notes: '',
    id_familydata: 0
  }, {
    notes: '',
    id_familydata: 0
  }, {
    notes: '',
    id_familydata: 0
  }, {
    notes: '',
    id_familydata: 0
  }, {
    notes: '',
    id_familydata: 0
  }, {
    notes: '',
    id_familydata: 0
  }, {
    notes: '',
    id_familydata: 0
  }, {
    notes: '',
    id_familydata: 0
  }, {
    notes: '',
    id_familydata: 0
  }, {
    notes: '',
    id_familydata: 0
  }, {
    notes: '',
    id_familydata: 0
  }, {
    notes: '',
    id_familydata: 0
  }, {
    notes: '',
    id_familydata: 0
  }, {
    notes: '',
    id_familydata: 0
  }, {
    notes: '',
    id_familydata: 0
  }, {
    notes: '',
    id_familydata: 0
  }, {
    notes: '',
    id_familydata: 0

  }, {
    notes: '',
    id_familydata: 0
  }, {
    notes: '',
    id_familydata: 0
  }];
  private familyneeds: Array<any> = [{
    Neednumber: '',
    Needname: '',
    Urgent: '',
    needsgift: '',
    needdate: '',
    id_familydata: 0
  }, {
    Neednumber: '',
    Needname: '',
    Urgent: '',
    needsgift: '',
    needdate: '',
    id_familydata: 0

  }, {
    Neednumber: '',
    Needname: '',
    Urgent: '',
    needsgift: '',
    needdate: '',
    id_familydata: 0

  }, {
    Neednumber: '',
    Needname: '',
    Urgent: '',
    needsgift: '',
    needdate: '',
    id_familydata: 0

  }, {
    Neednumber: '',
    Needname: '',
    Urgent: '',
    needsgift: '',
    needdate: '',
    id_familydata: 0

  }, {
    Neednumber: '',
    Needname: '',
    Urgent: '',
    needsgift: '',
    needdate: '',
    id_familydata: 0

  }, {
    Neednumber: '',
    Needname: '',
    Urgent: '',
    needsgift: '',
    needdate: '',
    id_familydata: 0

  }, {
    Neednumber: '',
    Needname: '',
    Urgent: '',
    needsgift: '',
    needdate: '',
    id_familydata: 0

  }, {
    Neednumber: '',
    Needname: '',
    Urgent: '',
    needsgift: '',
    needdate: '',
    id_familydata: 0

  }, {
    Neednumber: '',
    Needname: '',
    Urgent: '',
    needsgift: '',
    needdate: '',
    id_familydata: 0

  }, {
    Neednumber: '',
    Needname: '',
    Urgent: '',
    needsgift: '',
    needdate: '',
    id_familydata: 0

  }, {
    Neednumber: '',
    Needname: '',
    Urgent: '',
    needsgift: '',
    needdate: '',
    id_familydata: 0

  }, {
    Neednumber: '',
    Needname: '',
    Urgent: '',
    needsgift: '',
    needdate: '',
    id_familydata: 0

  }, {
    Neednumber: '',
    Needname: '',
    Urgent: '',
    needsgift: '',
    needdate: '',
    id_familydata: 0

  }, {
    Neednumber: '',
    Needname: '',
    Urgent: '',
    needsgift: '',
    needdate: '',
    id_familydata: 0

  }, {
    Neednumber: '',
    Needname: '',
    Urgent: '',
    needsgift: '',
    needdate: '',
    id_familydata: 0

  }, {
    Neednumber: '',
    Needname: '',
    Urgent: '',
    needsgift: '',
    needdate: '',
    id_familydata: 0

  }, {
    Neednumber: '',
    Needname: '',
    Urgent: '',
    needsgift: '',
    needdate: '',
    id_familydata: 0

  }, {
    Neednumber: '',
    Needname: '',
    Urgent: '',
    needsgift: '',
    needdate: '',
    id_familydata: 0

  }, {
    Neednumber: '',
    Needname: '',
    Urgent: '',
    needsgift: '',
    needdate: '',
    id_familydata: 0

  }, {
    Neednumber: '',
    Needname: '',
    Urgent: '',
    needsgift: '',
    needdate: '',
    id_familydata: 0

  }, {
    Neednumber: '',
    Needname: '',
    Urgent: '',
    needsgift: '',
    needdate: '',
    id_familydata: 0

  }, {
    Neednumber: '',
    Needname: '',
    Urgent: '',
    needsgift: '',
    needdate: '',
    id_familydata: 0

  }, {
    Neednumber: '',
    Needname: '',
    Urgent: '',
    needsgift: '',
    needdate: '',
    id_familydata: 0

  }, {
    Neednumber: '',
    Needname: '',
    Urgent: '',
    needsgift: '',
    needdate: '',
    id_familydata: 0

  }, {
    Neednumber: '',
    Needname: '',
    Urgent: '',
    needsgift: '',
    needdate: '',
    id_familydata: 0

  }, {
    Neednumber: '',
    Needname: '',
    Urgent: '',
    needsgift: '',
    needdate: '',
    id_familydata: 0

  }, {
    Neednumber: '',
    Needname: '',
    Urgent: '',
    needsgift: '',
    needdate: '',
    id_familydata: 0

  }, {
    Neednumber: '',
    Needname: '',
    Urgent: '',
    needsgift: '',
    needdate: '',
    id_familydata: 0

  }, {
    Neednumber: '',
    Needname: '',
    Urgent: '',
    needsgift: '',
    needdate: '',
    id_familydata: 0

  }, {
    Neednumber: '',
    Needname: '',
    Urgent: '',
    needsgift: '',
    needdate: '',
    id_familydata: 0

  }, {
    Neednumber: '',
    Needname: '',
    Urgent: '',
    needsgift: '',
    needdate: '',
    id_familydata: 0

  }, {
    Neednumber: '',
    Needname: '',
    Urgent: '',
    needsgift: '',
    needdate: '',
    id_familydata: 0

  }, {
    Neednumber: '',
    Needname: '',
    Urgent: '',
    needsgift: '',
    needdate: '',
    id_familydata: 0

  }, {
    Neednumber: '',
    Needname: '',
    Urgent: '',
    needsgift: '',
    needdate: '',
    id_familydata: 0

  }, {
    Neednumber: '',
    Needname: '',
    Urgent: '',
    needsgift: '',
    needdate: '',
    id_familydata: 0

  }, {
    Neednumber: '',
    Needname: '',
    Urgent: '',
    needsgift: '',
    needdate: '',
    id_familydata: 0

  }, {
    Neednumber: '',
    Needname: '',
    Urgent: '',
    needsgift: '',
    needdate: '',
    id_familydata: 0

  }, {
    Neednumber: '',
    Needname: '',
    Urgent: '',
    needsgift: '',
    needdate: '',
    id_familydata: 0

  }];
  private familydata = {
    wifename: '',
    husbandname: '',
    phonehusband: '',
    phonewife: '',
    adress: '',
    Governorate: '',
    Region: '',
    Sexuality: '',
    greencard: '',
    cinwife: '',
    cinhusband: '',
    HomeOwnership: '',
    amountlease: '0',
    Typeofaid: '',
    Amountaid: '0',
    FileNo: '',
    fatherwork: '',
    motherwork: '',
    Monthlyincomefather: '0',
    Monthlyincomemother: '0',
    Religiousdoctrine: '',
    familymembers: '',
    id_users: 0
  };

  private familyvisite = {
    date_visite: '',
    name_visiter: '',
    objectnumber: '',
    objectname: '',
    Urgent: '',
    objectgift: '',
    objectgiftdate: '',
    id_familydata: 0
  };
  private familychildren: Array<any> = [{
    name: '',
    Age: '',
    job: '',
    amountmounth: '',
    cinchildren: '',
    id_familydata: 0
  }, {
    name: '',
    Age: '',
    job: '',
    amountmounth: '',
    cinchildren: '',
    id_familydata: 0
  }, {
    name: '',
    Age: '',
    job: '',
    amountmounth: '',
    cinchildren: '',
    id_familydata: 0
  }, {
    name: '',
    Age: '',
    job: '',
    amountmounth: '',
    cinchildren: '',
    id_familydata: 0
  }, {
    name: '',
    Age: '',
    job: '',
    amountmounth: '',
    cinchildren: '',
    id_familydata: 0
  }, {
    name: '',
    Age: '',
    job: '',
    amountmounth: '',
    cinchildren: '',
    id_familydata: 0
  }, {
    name: '',
    Age: '',
    job: '',
    amountmounth: '',
    cinchildren: '',
    id_familydata: 0
  }, {
    name: '',
    Age: '',
    job: '',
    amountmounth: '',
    cinchildren: '',
    id_familydata: 0
  }, {
    name: '',
    Age: '',
    job: '',
    amountmounth: '',
    cinchildren: '',
    id_familydata: 0
  }, {
    name: '',
    Age: '',
    job: '',
    amountmounth: '',
    cinchildren: '',
    id_familydata: 0
  }, {
    name: '',
    Age: '',
    job: '',
    amountmounth: '',
    cinchildren: '',
    id_familydata: 0
  }, {
    name: '',
    Age: '',
    job: '',
    amountmounth: '',
    cinchildren: '',
    id_familydata: 0
  }, {
    name: '',
    Age: '',
    job: '',
    amountmounth: '',
    cinchildren: '',
    id_familydata: 0
  }, {
    name: '',
    Age: '',
    job: '',
    amountmounth: '',
    cinchildren: '',
    id_familydata: 0
  }, {
    name: '',
    Age: '',
    job: '',
    amountmounth: '',
    cinchildren: '',
    id_familydata: 0
  }, {
    name: '',
    Age: '',
    job: '',
    amountmounth: '',
    cinchildren: '',
    id_familydata: 0
  }, {
    name: '',
    Age: '',
    job: '',
    amountmounth: '',
    cinchildren: '',
    id_familydata: 0
  }, {
    name: '',
    Age: '',
    job: '',
    amountmounth: '',
    cinchildren: '',
    id_familydata: 0
  }, {
    name: '',
    Age: '',
    job: '',
    amountmounth: '',
    cinchildren: '',
    id_familydata: 0
  }, {
    name: '',
    Age: '',
    job: '',
    amountmounth: '',
    cinchildren: '',
    id_familydata: 0
  }, {
    name: '',
    Age: '',
    job: '',
    amountmounth: '',
    cinchildren: '',
    id_familydata: 0
  }, {
    name: '',
    Age: '',
    job: '',
    amountmounth: '',
    cinchildren: '',
    id_familydata: 0
  }, {
    name: '',
    Age: '',
    job: '',
    amountmounth: '',
    cinchildren: '',
    id_familydata: 0
  }, {
    name: '',
    Age: '',
    job: '',
    amountmounth: '',
    cinchildren: '',
    id_familydata: 0
  }, {
    name: '',
    Age: '',
    job: '',
    amountmounth: '',
    cinchildren: '',
    id_familydata: 0
  }, {
    name: '',
    Age: '',
    job: '',
    amountmounth: '',
    cinchildren: '',
    id_familydata: 0
  }, {
    name: '',
    Age: '',
    job: '',
    amountmounth: '',
    cinchildren: '',
    id_familydata: 0
  }, {
    name: '',
    Age: '',
    job: '',
    amountmounth: '',
    cinchildren: '',
    id_familydata: 0
  }, {
    name: '',
    Age: '',
    job: '',
    amountmounth: '',
    cinchildren: '',
    id_familydata: 0
  }, {
    name: '',
    Age: '',
    job: '',
    amountmounth: '',
    cinchildren: '',
    id_familydata: 0
  }];


  public greencarteyes: boolean;
  public greencarteno: boolean;
  gov: any;
  reg: any;
  clearfamilyneeds: any[];
  clearfamilynotes: any[];
  clearfamilyvisite: { date_visite: string; name_visiter: string; objectnumber: string; objectname: string; Urgent: string; objectgift: boolean; objectgiftdate: string; id_familydata: number; };
  clearfamilychildren: any[];
  clearfamilydata: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private provider: FunctionProvider,
    public alertCtrl: AlertController, public storage: Storage) {


    this.is_connected();
    this.get_governorate();

    this.customPickerOptions = {
      buttons: [{
        text: 'Save',
        handler: () => console.log('Clicked Save!')
      }, {
        text: 'Log',
        handler: () => {
          console.log('Clicked Log. Do not Dismiss.');
          return false;
        }
      }]
    }
    this.index = 1;
    this.NBSons = 1;
    this.all_Sons[0] = 0;

    this.NBObject = 1;
    this.all_Object[0] = 0;

    this.NBNotes = 1;
    this.all_Nots[0] = 0;


  }

  OncheckGreencarteYes() {

    this.greencarteno = !this.greencarteyes;


  }
  OncheckGreencarteNo() {

    this.greencarteyes = !this.greencarteno;


  }

  logout() {
    this.storage.remove("user");
    this.navCtrl.setRoot(HomePage);
  }
  is_connected() {
    return this.storage.get("user").then((user: any) => {

      if (!user) {


        return this.navCtrl.setRoot(HomePage);
      }
      else {
        this.user = user.data[0];
        console.log(this.user.id);

      }
    });

  }

  Sandfamilychildren(id: any) {


    for (let i = 0; i < this.NBSons; i++) {

      this.familychildren[i].id_familydata = id;
      this.provider.Setfamilychildren(this.familychildren[i]).subscribe((data: any) => {

        // this.validfamilychildren=true;

      }), (err) => {

        //  this.validfamilychildren=false;
        console.log(err);

      }
    }
  }
  Sandfamilyneeds(id: any) {

    console.log(this.familyneeds);
    for (let i = 0; i < this.NBObject; i++) {

      this.familyneeds[i].id_familydata = id;

      this.provider.Setfamilyneeds(this.familyneeds[i]).subscribe((data: any) => {
        console.log(data);
        //this.validfamilyneeds=true;

      }), (err) => {
        //  this.validfamilyneeds=false;

        console.log(err);

      }
    }
  }
  Sandfamilynotes(id: any) {

    console.log(this.NBNotes);
    for (let i = 0; i < this.NBNotes; i++) {

      this.familynotes[i].id_familydata = id;
      this.provider.Setfamilynotes(this.familynotes[i]).subscribe((data: any) => {
        console.log(data);
        // this.validfamilynotes=true;

      }), (err) => {
        //  this.validfamilynotes=false;

        console.log(err);

      }
    }
  }

  Sandfamilyvisite(id: any) {


    this.familyvisite.id_familydata = id;
    this.provider.Setfamilyvisite(this.familyvisite).subscribe((data: any) => {
      console.log(data);

      //     this.validfamilyvisite=true;
    }), (err) => {

      //     this.validfamilyvisite=false;
      console.log(err);

    }

  }
  SendInformationFamly() {
    this.familydata.id_users = this.user.id;
    this.provider.Setfamilydata(this.familydata).subscribe((data: any) => {
      //  this.validfamilydata=true;
      //   console.log('children :'+this.validfamilychildren+'familydata:'+this.validfamilydata+'familynotes:'+this.validfamilynotes+'familyvisite:'+this.validfamilyvisite+'familyneeds:'+this.validfamilyneeds);
      //  if(this.validfamilychildren==true&& this.validfamilydata==true && this.validfamilyneeds==true && this.validfamilynotes==true && this.validfamilyvisite==true)
      //  {

      if (this.familydata.wifename == '' ||
        this.familydata.husbandname == '' ||
        this.familydata.phonehusband == '' ||
        this.familydata.phonewife == '' ||
        this.familydata.adress == '' ||
        this.familydata.Governorate == '' ||
        this.familydata.Region == '' ||
        this.familydata.Sexuality == '' ||
        this.familydata.greencard == '' ||
        this.familydata.cinwife == '' ||
        this.familydata.cinhusband == '' ||
        this.familydata.HomeOwnership == '' ||
        this.familydata.Typeofaid == '' ||
        this.familydata.FileNo == '' ||
        this.familydata.fatherwork == '' ||
        this.familydata.motherwork == '' ||
        this.familydata.Religiousdoctrine == '' ||
        this.familydata.familymembers == '') {
        this.showPopup("خطأ ", " يجب عليك تعمير جميع الخانات الخاصة ببيانات الاسرة");
        return false;
      }
      else if (this.familyneeds[0].Neednumber == '' ||
        this.familyneeds[0].Needname == '' ||
        this.familyneeds[0].Urgent == '' ||
        this.familyneeds[0].needsgift == '') {
        this.showPopup("خطأ ", " يجب عليك تعمير جميع الخانات الخاصة الخاصة بإحتياجات الاسرة");
      }
      else if (this.familyvisite.date_visite == '' ||
        this.familyvisite.name_visiter == '' ||
        this.familyvisite.objectnumber == '' ||
        this.familyvisite.objectname == '' ||
        this.familyvisite.Urgent == '' ||
        this.familyvisite.objectgift == '') {
        this.showPopup("خطأ ", " يجب عليك تعمير جميع الخانات الخاصة الخاصة بتم توفيره للاسرة");
      }
      else if (this.familynotes[0] == '') {
        this.showPopup("خطأ ", " يجب عليك تعمير جميع الخانات الخاصة الخاصة بالملاحضات");
      }
      else {
        this.Sandfamilychildren(data.id);
        this.Sandfamilyneeds(data.id);
        this.Sandfamilyvisite(data.id);
        this.Sandfamilynotes(data.id);

        this.showPopup("نجاح ", "تم إرسال البيانات بنجاح");
        this.navCtrl.setRoot(this.navCtrl.getActive().component);
      }
      //  else
      //  {
      //      this.showPopup("خطأ ", "يجب عليك تعمير جميع الخانات");
      // }

    }), (err) => {
      this.validfamilydata = false;
      this.showPopup("خطأ ", "يجب عليك تعمير جميع الخانات");
      console.log(err);

    }
  }
  showPopup(title, text) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: text,
      buttons: [
        {
          text: 'موافق',
          handler: data => {
            if (this.createSuccess) {
              //  this.nav.popToRoot();
            }
          }
        }
      ]
    });
    alert.present();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad FirstpagePage');
  }

  formulaire(andex: any) {
    this.index = andex;
  }
  pushpages(indexpage: any) {

    if (indexpage == "1") this.navCtrl.push(LibraryPage);
    if (indexpage == "3") this.navCtrl.push(MyaccountPage);
    if (indexpage == "4") this.navCtrl.push(MorePage);

  }
  nbNotes() {

    this.NBNotes++;
    this.all_Nots[this.NBNotes - 1] = this.NBNotes - 1;
  }
  nbSons() {

    this.NBSons++;
    this.all_Sons[this.NBSons - 1] = this.NBSons - 1;


    console.log(this.familychildren);

  }
  nbobject() {
    console.log(this.familyneeds[this.NBObject].needdate);
    this.NBObject++;
    this.all_Object[this.NBObject - 1] = this.NBObject - 1;
  }
  get_governorate() {

    this.provider.get_governorate().subscribe((res: any) => {
      console.log(res);
      this.gov = res.data;

    })

  }
  get_region(id: any) {

    this.provider.get_region(id).subscribe((res: any) => {
      console.log(res);
      this.reg = res.data;
    })

  }
}
