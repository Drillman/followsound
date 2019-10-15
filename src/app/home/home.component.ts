import { Component, OnInit } from "@angular/core";
import { DataService, IDataItem } from "../shared/data.service";
import { BluetoothService } from "../shared/bluetooth.service";

@Component({
    selector: "Home",
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {
    items: Array<IDataItem>;
    bluetoothStatus: string;

    constructor(private _itemService: DataService, private bluetoothService: BluetoothService) { }

    ngOnInit(): void {
        // this.items = this._itemService.getItems();
        this.bluetoothService.getBluetoothStatus().then(
            (status: string) => this.bluetoothStatus = status
        )
    }
}
