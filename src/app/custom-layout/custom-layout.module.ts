import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigModule } from '@spartacus/core';
import { CustomConfig } from './layout-config';

@NgModule({
  declarations: [],
  imports: [CommonModule, ConfigModule.withConfig(CustomConfig)],
})
export class CustomLayoutModule {}
