import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LocationComponent} from './components/location/location.component';
import {Route, RouterModule} from "@angular/router";
import {TableModule} from "primeng/table";
import {LoaderModule} from 'src/app/shared/components/loader/loader.module';
import {TooltipModule} from 'primeng/tooltip';
import {AvatarGroupModule} from 'primeng/avatargroup';
import {AvatarModule} from 'primeng/avatar';
import {ButtonModule} from 'primeng/button';
import {DialogService, DynamicDialogModule} from 'primeng/dynamicdialog';
import { LocationCreateEditComponent } from './components/location-create-edit/location-create-edit.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { RippleModule } from 'primeng/ripple';

const routes: Route[] = [
  {
    path: '',
    component: LocationComponent
  }
]

@NgModule({
  declarations: [
    LocationComponent,
    LocationCreateEditComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    TableModule,
    LoaderModule,
    TooltipModule,
    AvatarGroupModule,
    AvatarModule,
    ButtonModule,
    DynamicDialogModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    RippleModule
  ],
  providers: [
    DialogService
  ]
})
export class LocationModule {
}
