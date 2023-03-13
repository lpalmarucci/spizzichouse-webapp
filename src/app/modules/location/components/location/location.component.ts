import { Component, OnDestroy, OnInit } from '@angular/core';
import { LocationService } from '../../services/location.service';
import { ILocation } from '../../models/location';
import {
    DialogService,
    DynamicDialogComponent,
    DynamicDialogRef,
} from 'primeng/dynamicdialog';
import { LocationCreateEditComponent } from '../location-create-edit/location-create-edit.component';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
    selector: 'app-teams',
    templateUrl: './location.component.html',
    styleUrls: ['./location.component.scss'],
})
export class LocationComponent implements OnInit, OnDestroy {
    locations: ILocation[] = [];
    ref: DynamicDialogRef;

    constructor(
        private locationService: LocationService,
        private dialogService: DialogService,
        private messageService: MessageService,
        private confirmationService: ConfirmationService
    ) {}

    fetchData() {
        this.locationService
            .getAll()
            .subscribe((locations) => (this.locations = locations));
    }

    ngOnInit() {
        this.fetchData();
    }

    ngOnDestroy(): void {
        if (this.ref) this.ref.close();
    }

    showCreateEditDialog(isNew: boolean, location?: ILocation) {
        this.ref = this.dialogService.open(LocationCreateEditComponent, {
            closable: true,
            closeOnEscape: true,
            keepInViewport: true,
            header: isNew ? 'Crea' : 'Modifica',
            contentStyle: { overflow: 'auto' },
            data: {
                isNew,
                location,
            },
        });

        this.ref.onClose.subscribe((op: boolean) => {
            if (op) {
                this.fetchData();
            }
        });
    }

    deleteLocation(locationId: string, name: string) {
        this.confirmationService.confirm({
            message: 'Sei sicuro di voler procedere?',
            accept: () => {
                this.locationService
                    .remove(locationId)
                    .subscribe(({ affected }) => {
                        console.log(affected);
                        if (affected === 1) {
                            this.messageService.add({
                                severity: 'success',
                                summary: 'Deleted',
                                detail: `${name} has been deleted`,
                            });
                            this.fetchData();
                        }
                    });
            },
        });
    }
}
