import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// flex layout
import { FlexLayoutModule } from '@angular/flex-layout';
// import material modules
import {
  MatGridListModule,
  MatButtonModule,
  MatCheckboxModule,
  MatTableModule,
  MatSelectModule,
  MatFormFieldModule,
  MatPaginatorModule,
  MatDialogModule,
  MatIconModule,
  MatCardModule,
  MatProgressSpinnerModule,
  MatInputModule
} from '@angular/material';

const MODULES_LIST = [
  CommonModule,
  FlexLayoutModule,
  MatGridListModule,
  MatButtonModule,
  MatCheckboxModule,
  MatTableModule,
  MatSelectModule,
  MatFormFieldModule,
  MatPaginatorModule,
  MatDialogModule,
  MatIconModule,
  MatCardModule,
  MatInputModule,
  MatProgressSpinnerModule,
  FormsModule,
  ReactiveFormsModule
];


@NgModule({
  declarations: [],
  imports: MODULES_LIST,
  exports: MODULES_LIST,
})
export class SharedModule {}
