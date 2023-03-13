import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderDirective } from './loader.directive';
import {ProgressSpinnerModule} from 'primeng/progressspinner';


@NgModule({
  declarations: [
    LoaderDirective
  ],
  imports: [
    CommonModule,
    ProgressSpinnerModule
  ],
  exports: [LoaderDirective]
})
export class LoaderModule { }
