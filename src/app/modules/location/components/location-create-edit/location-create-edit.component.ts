import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ILocation } from '../../models/location';
import { LocationService } from '../../services/location.service';

@Component({
  selector: 'app-location-create-edit',
  templateUrl: './location-create-edit.component.html',
  styleUrls: ['./location-create-edit.component.scss']
})
export class LocationCreateEditComponent implements OnInit {

  locationForm = this._fb.group({
    name: ['', Validators.required]
  })

  constructor(private config: DynamicDialogConfig, private _fb: FormBuilder, private locationService: LocationService, private ref: DynamicDialogRef){
    if(config.data.location)
      this.locationForm.reset(config.data.location);

  }

  ngOnInit(): void {

  }

  handleCreateLocation(){
    this.locationService.create(this.locationForm.value as ILocation).subscribe((data) => this.ref.close(!!data));
  }
}
