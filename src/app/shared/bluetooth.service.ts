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

  getRegisteredDevices(): Promise<Bluetooth.Peripheral[]> {
    let bluetoothDevices: Bluetooth.Peripheral[];
    return Bluetooth.startScanning({
      serviceUUIDs: [],
      seconds: 4,
      onDiscovered: (peripheral: Bluetooth.Peripheral) => {
        bluetoothDevices = [ ...bluetoothDevices , peripheral ];
        console.log("Periperhal found with UUID: " + peripheral.UUID);
      },
      skipPermissionCheck: false,
    }).then(() => {
      console.log("scanning complete");
      return Promise.resolve(bluetoothDevices);
    }).catch(err => {
      console.error(err);
      return Promise.reject(err);
    })
  }
}
