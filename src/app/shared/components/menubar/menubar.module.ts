import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MenubarComponent} from "./menubar.component";
import {MenubarModule as PrimeMenuModule} from "primeng/menubar";

@NgModule({
  declarations: [
    MenubarComponent
  ],
  imports: [
    CommonModule,
    PrimeMenuModule
  ],
  exports: [
    MenubarComponent
  ]
})
export class MenubarModule {
}
