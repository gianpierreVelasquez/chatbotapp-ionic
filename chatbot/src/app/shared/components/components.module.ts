import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageBoxComponent } from './message-box/message-box.component';

@NgModule({
  declarations: [
    MessageBoxComponent
  ],
  exports: [
    MessageBoxComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
