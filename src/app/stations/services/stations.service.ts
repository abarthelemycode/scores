import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class StationsService {

    constructor(private http: HttpClient) {
    }

    getStations(params) {
      return this.http.get<any>(`records/1.0/search/?dataset=velib-disponibilite-en-temps-reel`, { params: params });
      // return this.http.get<any>(`recordel`, { params: params });
      // params optionnal
      // rows
      // &facet=overflowactivation&facet=creditcard&facet=kioskstate&facet=station_state
    }

    // this methods will no work because there is no endpoint for POST, PUT , PATCH or DELETE station in API
    editStation(station) {
      return this.http.get<any>(`records/1.0/search/`, { params: station });
      // return this.http.patch<any>(`link-of-api`, {});
    }

    deleteStation(station) {
      return this.http.get<any>(`records/1.0/search/`, { params: station });
      // return this.http.delete<any>(`link-of-api`, {});
    }

}
