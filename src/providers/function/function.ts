import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the FunctionProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FunctionProvider {
  public api: string = "http://whitehandskw.com/public/api";
  constructor(public http: HttpClient) {
    console.log('Hello FunctionProvider Provider');
  }
  connect(form: any) {
    console.log(form);

    let link = "http://whitehandskw.com/public/api/loginapi";

    return this.http.get(link + `?email=${form.email}&password1=${form.password}`);

  }

  Setfamilydata(familydata: any) {
    let link = "/setfamilydata";

    var header = { "headers": { "Content-Type": "application/json" } };
    let req_parm =
    {

      "wifename": familydata.wifename,
      "husbandname": familydata.husbandname,
      "phonehusband": familydata.phonehusband,
      "phonewife": familydata.phonewife,
      "adress": familydata.adress,
      "Governorate": familydata.Governorate,
      "Region": familydata.Region,
      "Sexuality": familydata.Sexuality,
      "greencard": familydata.greencard,
      "cinwife": familydata.cinwife,
      "cinhusband": familydata.cinhusband,
      "HomeOwnership": familydata.HomeOwnership,
      "amountlease": familydata.amountlease,
      "Typeofaid": familydata.Typeofaid,
      "Amountaid": familydata.Amountaid,
      "FileNo": familydata.FileNo,
      "fatherwork": familydata.fatherwork,
      "motherwork": familydata.motherwork,
      "Monthlyincomefather": familydata.Monthlyincomefather,
      "Monthlyincomemother": familydata.Monthlyincomemother,
      "Religiousdoctrine": familydata.Religiousdoctrine,
      "familymembers": familydata.familymembers,
      "id_users": familydata.id_users,
    }


    return this.http.post(this.api + link, req_parm, header);
  }
  Setfamilyneeds(familyneeds: any) {
    let link = "/setfamilyneeds";
    var header = { "headers": { "Content-Type": "application/json" } };

    let req_parm =
    {
      "Neednumber": familyneeds.Neednumber,
      "Needname": familyneeds.Needname,
      "Urgent": familyneeds.Urgent,
      "needsgift": familyneeds.needsgift,
      "needdate": familyneeds.needdate,
      "id_familydata": familyneeds.id_familydata,

    }
    console.log(this.api + link);
    console.log(req_parm);
    console.log(header);
    return this.http.post(this.api + link, req_parm, header);
  }
  Setfamilyvisite(familyvisite: any) {
    var header = { "headers": { "Content-Type": "application/json" } };
    let link = this.api + "/setfamilyvisite";
    let req_parm =
    {
      "date_visite": familyvisite.date_visite,
      "name_visiter": familyvisite.name_visiter,
      "objectnumber": familyvisite.objectnumber,
      "objectname": familyvisite.objectname,
      "Urgent": familyvisite.Urgent,
      "objectgift": familyvisite.objectgift,
      "objectgiftdate": familyvisite.objectgiftdate,
      "id_familydata": familyvisite.id_familydata,
    }
    console.log(this.api + link);
    console.log(req_parm);
    console.log(header);
    return this.http.post(link, req_parm, header);
  }
  Setfamilynotes(familynotes: any) {

    var header = { "headers": { "Content-Type": "application/json" } };
    let link = this.api + "/setfamilynotes";
    let req_parm =
    {
      "notes": familynotes.notes,
      "id_familydata": familynotes.id_familydata,
    }
    return this.http.post(link, req_parm, header);
  }
  Setfamilychildren(familychildren: any) {
    console.log("familynotes:     " + familychildren);
    var header = { "headers": { "Content-Type": "application/json" } };
    let link = this.api + "/familychildren";
    let req_parm =
    {
      "name": familychildren.name,
      "Age": familychildren.Age,
      "job": familychildren.job,
      "amountmounth": familychildren.amountmounth,
      "cinchildren": familychildren.cinchildren,
      "id_familydata": familychildren.id_familydata,
    }
    return this.http.post(link, req_parm, header);
  }
  get_governorate() {

    let link = this.api + "/governorate";

    return this.http.get(link);

  }
  get_region(id: any) {

    let link = this.api + "/region";

    return this.http.get(link + `?id_governorate=${id}`);

  }
  get_post() {

    let link = this.api + "/get_post";

    return this.http.get(link);

  }
  update_password(form: any) {
    var header = { "headers": { "Content-Type": "application/json" } };
    let link = this.api + "/apiuserspassword";
    let req_parm =
    {
      "id": form.id,
      "password1": form.password,

    }
    return this.http.post(link, req_parm, header);

  }
}
