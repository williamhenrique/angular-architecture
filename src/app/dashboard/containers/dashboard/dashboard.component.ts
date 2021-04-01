import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { DashboardService } from '../../dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  data$ = this.dashboard.getDevs();

  data2$ = of([
    {
      "name": "Vituxo",
      "age": 31,
      "skills": ["Musico", "Trocar Lampadas sem escada"]
    },
    {
      "name": "Caiquera",
      "age": 22,
      "skills": ["Novão", "Fuma Narguila"]
    },
    {
      "name": "Gameleira",
      "age": 20,
      "skills": ["Não abre o Mic", "Xingar no portão"]
    },
    {
      "name": "Deia Mobilete",
      "age": 23,
      "skills": ["Sedanapo", "Faz tudo para o Tuty"]
    }
  ])

  canDisplayGrid = false;

  constructor(private dashboard: DashboardService) { }

  ngOnInit(): void {
    this.data2$.subscribe()
  }

  showDisplayGrid(){
    this.canDisplayGrid = !this.canDisplayGrid;
  }

}
