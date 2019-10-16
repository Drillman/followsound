import { Component, OnInit } from "@angular/core";
import { DataService, IDataItem } from "../shared/data.service";
import { BluetoothService } from "../shared/bluetooth.service";
import { Peripheral } from "nativescript-bluetooth";

@Component({
    selector: "Home",
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {
    items: Array<IDataItem>;
    bluetoothStatus: string;
    bluetoothDevices: Peripheral[];

    constructor(private _itemService: DataService, private bluetoothService: BluetoothService) { }

    ngOnInit(): void {
        this.bluetoothService.getBluetoothStatus().then((status: string) =>
            this.bluetoothStatus = status
        );
        this.bluetoothService.getRegisteredDevices().then((devices: Peripheral[]) =>
            this.bluetoothDevices = devices
        );
    }
}
