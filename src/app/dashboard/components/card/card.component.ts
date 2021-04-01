import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent implements OnInit {

  @Input() data;

  constructor() { }

  ngOnInit(): void {
  }

  getRandomColor() {
    const color = [
      'color-01',
      'color-03',
      'color-05',
      'color-07',
      'color-09',
    ];
    const random = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
    return color[random];
  }

}
