import { Component, OnChanges, Input, EventEmitter, Output } from '@angular/core';
import { Station } from '../../models';

@Component({
  selector: 'stations-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.sass']
})
export class DatatableComponent implements OnChanges {

  @Input() stations: Station[];
  @Input() fields: object;
  @Input() loading: boolean;
  @Input() totalStations: number;
  @Input() actualPage: number;
  @Input() pageSize: number;

  @Output() changePage = new EventEmitter<any>();
  @Output() openDialog = new EventEmitter<any>();

  fieldsKeys: string[] = [];

  ngOnChanges() {
    this.fieldsKeys = Object.keys(this.fields);
  }

  changePageHandler(e) {
    this.changePage.emit(e);
  }

  clickEditHandler(type: string, station: Station) {
    this.openDialog.emit({ type : type, station: station });
  }
}
