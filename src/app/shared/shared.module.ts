import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MenubarComponent} from "./components/menubar/menubar.component";
import {MenubarModule} from "primeng/menubar";


@NgModule({
  declarations: [
    MenubarComponent
  ],
  imports: [
    CommonModule,
    MenubarModule,
  ],
  exports: [MenubarComponent]
})
export class SharedModule {
}
