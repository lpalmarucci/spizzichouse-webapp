import {Component, OnDestroy, OnInit} from '@angular/core';
import {LocationService} from "../../services/location.service";
import {ILocation} from "../../models/location";
import { DialogService, DynamicDialogComponent, DynamicDialogRef } from 'primeng/dynamicdialog';
import { LocationCreateEditComponent } from '../location-create-edit/location-create-edit.component';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-teams',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit, OnDestroy{
  locations: ILocation[] = [];
  ref: DynamicDialogRef;

  constructor(private locationService: LocationService, private dialogService: DialogService, private messageService: MessageService) {
  }

  fetchData(){
    this.locationService.getAll().subscribe((locations) => this.locations = locations);
  }

  ngOnInit() {
    this.fetchData();
  }

  ngOnDestroy(): void {
    if(this.ref)
      this.ref.close();
  }

  showDialog(){
    this.ref = this.dialogService.open(LocationCreateEditComponent, {
      closable: true,
      closeOnEscape: true,
      keepInViewport: true,
      contentStyle: {"overflow": "auto"},
      data: {
        isNew: true
      }
    });

    this.ref.onClose.subscribe((created: boolean) => {
      debugger;
      if (created) {
          this.messageService.add({severity:'success', summary: 'Location Created'});
          this.fetchData();
      } else {
        this.messageService.add({severity:'error', summary: 'Location created'});
      }
    });
  }

}
