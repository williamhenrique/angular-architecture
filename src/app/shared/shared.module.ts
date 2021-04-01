import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PoModule, PoTableModule, PoWidgetModule } from '@po-ui/ng-components';

@NgModule({
  imports: [
    CommonModule,
    PoModule,
    PoWidgetModule,
    PoTableModule
  ],
  declarations: [],
  exports: [
    PoModule,
    PoWidgetModule,
    PoTableModule
  ]
})
export class SharedModule { }
