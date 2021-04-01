import { ChangeDetectionStrategy, Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { PoTableColumn } from '@po-ui/ng-components';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {

  columns: Array<PoTableColumn> = [
    {property: 'name', label: 'Name' },
    {property: 'age', label: 'Idade', type: 'number'  },
    {property: 'skills', label: 'Skills'},
  ];

  @Input() data;
  constructor() { }

  ngOnInit() {
    console.log(this.data)
  }

}
