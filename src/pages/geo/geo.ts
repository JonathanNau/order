import { Component } from '@angular/core';
import { Platform, MenuController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from 'ionic-native';
/**
 * Generated class for the Geo page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-geo',
  templateUrl: 'geo.html',
})
export class Geo {
  public lat: number = 0;
  public lng: number = 0;
  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController) {
    var options = {
        enableHighAccuracy: true,
        timeout: 50000,
        maximumAge: 0
      };

      console.log(options);
      Geolocation.getCurrentPosition(options).then((data) => {
          this.lat = data.coords.latitude;
          this.lng = data.coords.longitude;
          console.log('My latitude : ' + data.coords.latitude);
          console.log('My longitude: ' + data.coords.longitude);
      })
      .catch((error) => {
        console.log('Error getting location', error);
    });
  }
  getPos(){
    return 2
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad Geo');
  }

}
