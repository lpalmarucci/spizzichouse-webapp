import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ILocation } from '../../models/location';
import { LocationService } from '../../services/location.service';

@Component({
    selector: 'app-location-create-edit',
    templateUrl: './location-create-edit.component.html',
    styleUrls: ['./location-create-edit.component.scss'],
})
export class LocationCreateEditComponent implements OnInit {
    isNew: boolean;
    locationForm = this._fb.group({
        name: ['', Validators.required],
    });

    constructor(
        private messageService: MessageService,
        private config: DynamicDialogConfig,
        private _fb: FormBuilder,
        private locationService: LocationService,
        private ref: DynamicDialogRef
    ) {
        this.isNew = config.data.isNew;
        if (config.data.location) this.locationForm.reset(config.data.location);
    }

    ngOnInit(): void {}

    handleCreateEditLocation() {
        if (this.isNew)
            this.locationService
                .create(this.locationForm.value as ILocation)
                .subscribe((data) => {
                    let saved: boolean = false;
                    if (data.locationId) {
                        this.messageService.add({
                            severity: 'success',
                            summary: 'Success',
                            detail: `${data.name} has been created`,
                        });
                        saved = true;
                    }
                    this.ref.close(saved);
                });
        else
            this.locationService
                .update(
                    this.config.data.location.locationId,
                    this.locationForm.value as ILocation
                )
                .subscribe((data) => {
                    let saved: boolean = false;
                    if (data.affected === 1) {
                        this.messageService.add({
                            severity: 'success',
                            summary: 'Success',
                            detail: `Location has been saved`,
                        });
                        saved = true;
                    }
                    this.ref.close(saved);
                });
    }
}
