import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Geolocation } from '@ionic-native/geolocation';

declare var google;

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class Home {
  
  @ViewChild('map') mapElement: ElementRef;
  map: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public geolocation: Geolocation) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Home');
    this.loadMap();
  }

loadMap(){
 
    let latLng = new google.maps.LatLng(32.864063, -117.214697);
 
    let mapOptions = {
      center: latLng,
      zoom: 13,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
 
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
 
  }
  
  addMarker() {
    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: this.map.getCenter()
    });
    
    let content = "<h4>Donor Post Information!</h4>";
    
    this.addInfoWindow(marker, content);
  }
  
  
  addInfoWindow(marker, content){
    
    let infoWindow = new google.maps.InfoWindow({
      content: content
    });
    
    google.maps.event.addListener(marker, 'click', () => {
      infoWindow.open(this.map, marker);
    });
  }
  
}



// Location Services Enabled 
//   loadMap(){
    
//     this.geolocation.getCurrentPosition().then((position) => {
      
//       let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    
//       let mapOptions = {
//       center: latLng,
//       zoom: 15,
//       mapTypeId: google.maps.MapTypeId.ROADMAP
//     }
    
//     this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    
      
//     }, (err) => {
//       console.log(err);
//     });
//   }
// }
