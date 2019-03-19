import { NgModule } from '@angular/core';
import { StationsRoutingModule } from './stations-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './containers';
import { DatatableComponent, EditStationDialog, DeleteStationDialog } from './components';
import { StationsService } from './services';

@NgModule({
  declarations: [
    HomeComponent,
    DatatableComponent,
    EditStationDialog,
    DeleteStationDialog
  ],
  imports: [
    SharedModule,
    StationsRoutingModule,
  ],
  entryComponents : [
    EditStationDialog,
    DeleteStationDialog
  ],
  providers: [
    StationsService
  ],
})
export class StationsModule { }
