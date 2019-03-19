import { Component, OnInit } from '@angular/core';
import { StationsService } from '../../services';
import { Station } from '../../models';
import { Subscription } from 'rxjs';
import { EditStationDialog, DeleteStationDialog } from '../../components';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  searchSubscription: Subscription = new Subscription();
  // TODO : put translation instead of brut text
  fields: object = {
    'actions'      : 'Actions',
    'station_code' : 'Code de la station',
    'station_name' : 'Nom de la station',
    'station_state' : 'Etat des stations',
    'kioskstate' : 'Etat du Totem',
    'nbedock' : 'Nb de bornes en station',
    'nbfreeedock' : 'Nb de bornes disponibles',
    'nbbike' : 'Nb de vélo méchanique',
    'nbebike' : 'Nb de vélo electrique',
    'creditcard' : 'Achat possible en station',
    'overflowactivation' : 'PARK + activation',
    'nbebikeoverflow' : 'Nb vélo en PARK+'
  };
  stations: Station[] = [];
  loading: boolean = true;
  totalStations: number = 0;
  actualPage: number = 0;
  page: number = 1;
  nbElementByPage: number = 10;

  error: string = ""

  constructor(private stationsService: StationsService, public dialog: MatDialog) {
  }


  ngOnInit() {
    const params = {};
    this.getStations(params);
  }

  getStations(params) {
    this.loading = true;

    // rajouter les params dans getStations
    this.searchSubscription.unsubscribe();
    this.searchSubscription = this.stationsService.getStations(params)
      .subscribe(
        (res) => {
          this.loading = false;
          this.actualPage = res.parameters.start;
          this.nbElementByPage = res.parameters.rows;
          this.totalStations = res.nhits;
          this.stations = res.records as Station[];
        },
        (err) => {
          this.loading = false;
          this.error = err
        }
      );
  }

  editStation(station: Station){
    console.log("edit", station)
    this.stationsService.editStation(station).subscribe(res => {
      // reload the list after its done
      this.getStations({})
    })
  }

  deleteStation(station: Station){
    console.log("delete", station)
    this.stationsService.deleteStation(station).subscribe(res => {
      // reload the list after its done
      this.getStations({})
    })
  }

  changePage(e) {
    const params = {
      'start': e.pageIndex,
      'rows' : e.pageSize
    };

    this.getStations(params);
  }

  openDialog(e) {

    let dialog, widthDialog;
    if (e.type === 'edit') {
      dialog = EditStationDialog;
      widthDialog = '800px';
    }
    if (e.type === 'delete') {
      dialog = DeleteStationDialog;
      widthDialog = '300px';
    }

    const dialogRef = this.dialog.open(dialog, {
      width: widthDialog,
      data: {
        station : e.station
      }
    });

    dialogRef.afterClosed().subscribe((res) => {

      if(res !== undefined){
        if(res.action === "validate") {
          if(e.type === "edit")
            this.editStation(res.params)

          if(e.type === "delete")
            this.deleteStation(res.params)
        }
      }
    });
  }
}
