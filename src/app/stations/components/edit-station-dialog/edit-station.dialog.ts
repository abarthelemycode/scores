import {Component, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Station } from '../../models';

@Component({
  selector: 'edit-station-dialog',
  templateUrl: 'edit-station.dialog.html',
  styleUrls: ['./edit-station.dialog.sass']
})
export class EditStationDialog {

  station: Station;
  editForm: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<EditStationDialog>,
    @Inject(MAT_DIALOG_DATA) public data) {
      this.station = data.station.fields;
      this.editForm = this.formBuilder.group({
        station_name: [this.station.station_name, Validators.required],
        station_code: [this.station.station_code, Validators.required],
        station_state: [this.station.station_state, Validators.required],
        kioskstate: [this.station.kioskstate, Validators.required],
      });
    }

    cancelAction() {
      this.dialogRef.close({ action: 'cancel' });
    }

    validateAction() {
      this.submitted = true;
      if (this.editForm.invalid) {
          return;
      }

      this.dialogRef.close({ action : 'validate', params: this.editForm.value });
    }

}
