import { NgModule } from '@angular/core';
import {
  MatToolbarModule,
  MatTabsModule,
  MatCardModule,
  MatButtonModule,
  MatListModule,
  MatDividerModule
} from '@angular/material';

const materialModules = [
  MatToolbarModule,
  MatTabsModule,
  MatCardModule,
  MatButtonModule,
  MatListModule,
  MatDividerModule
];

@NgModule({
  imports: [materialModules],
  exports: [materialModules]
})
export class MaterialModule { }
