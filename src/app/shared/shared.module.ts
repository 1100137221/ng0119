import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatIconModule, MatSidenavModule,
        MatToolbarModule, MatListModule } from '@angular/material';

@NgModule({
  imports: [MatButtonModule], // 先import
  exports: [MatButtonModule,
            MatIconModule,
            MatSidenavModule,
            MatToolbarModule,
            MatListModule], // 在export,
  declarations: []
})
export class SharedModule { }
