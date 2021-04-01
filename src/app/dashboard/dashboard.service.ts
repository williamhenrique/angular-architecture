import { Injectable } from '@angular/core';
import { HttpService } from '@core/http.service';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

constructor(private http: HttpService) { }

  getDevs() {
    return this.http.get('devs');
  }

}
