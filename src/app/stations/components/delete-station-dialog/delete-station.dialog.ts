import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { Station } from '../../models';

@Component({
  selector: 'delete-station-dialog',
  templateUrl: 'delete-station.dialog.html',
})
export class DeleteStationDialog {

  station: Station;

  constructor(
    public dialogRef: MatDialogRef<DeleteStationDialog>,
    @Inject(MAT_DIALOG_DATA) public data) {
      this.station = data.station.fields as Station;
    }

  cancelAction() {
    this.dialogRef.close({ action: 'cancel' });
  }

  validateAction() {
    this.dialogRef.close({ action: 'validate', params: this.station });
  }

}
