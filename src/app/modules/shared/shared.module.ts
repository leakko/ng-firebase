import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { FormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card'

const materialComponents = [
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatCardModule
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LayoutModule,
    materialComponents
  ],
  exports: [
    FormsModule,
    CommonModule,
    LayoutModule,
    materialComponents
  ]
})
export class SharedModule { }
