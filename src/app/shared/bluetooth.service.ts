import { Injectable } from '@angular/core';
import * as Bluetooth from 'nativescript-bluetooth';

@Injectable({
  providedIn: 'root'
})
export class BluetoothService {

  constructor() { }

  getBluetoothStatus(): Promise<String> {
    return Bluetooth.isBluetoothEnabled().then(
      (enabled: boolean) => {
        const status = enabled ? 'Activated' : 'Disabled';
        return Promise.resolve(status);
      }
    );
  }

  getRegisteredDevices(): Promise<any[]> {
    
  }
}
