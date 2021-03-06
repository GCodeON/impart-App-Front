import { Injectable } from '@angular/core';
import { Network } from '@ionic-native/network';
import { Platform } from 'ionic-angular';


declare var Connection;

@Injectable()
export class Connectivity {
  
  onDevice: boolean;

  constructor(public platform: Platform) {
    this.onDevice = this.platform.is('cordova');
  }

  isOnline(): boolean {
    if(this.onDevice && Network.prototype.onConnect){
      return Network.prototype.onConnect !== Connection.NONE;
    } else {
      return navigator.onLine;
    }
  }
  
  isOffline(): boolean {
    if(this.onDevice && Network.prototype.onConnect){
      return Network.prototype.onConnect === Connection.NONE;
    } else {
      return !navigator.onLine;
    }
  }
}
