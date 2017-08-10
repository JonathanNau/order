import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Json } from '../../providers/json'

/**
 * Generated class for the TesteJson page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-teste-json',
  templateUrl: 'teste-json.html',
})
export class TesteJson {
  public data: any;
  public teste: any;
  jobs: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public json: Json) {
    this.data = this.json.getData();
  }

  setData(){
    this.json.postRequest()
  }

  ionViewDidLoad() {
    this.json.getData().subscribe(data => {
      this.jobs = [];

      for(var i = 0; i < data.length; i++) {
                  
        this.jobs.push(
          {
        job_id: data[i].id, 
        job_name: data[i].nome
          }
        );
      }
      console.log(this.jobs);
    });
    this.teste = 'eai'
    
  }

}
