import { Component } from '@angular/core';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent {

  results: any[]=[
  {
    "name": "Germany",
    "value": 8940000
  },
  {
    "name": "USA",
    "value": 5000000
  },
  {
    "name": "France",
    "value": 7200000
  }
];

  view: any[number] = [700, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Game';
  showYAxisLabel = true;
  yAxisLabel = 'Score';

  colorScheme = 'nightLights';

  constructor() {

  }

  onSelect(event:any) {
    console.log(event);
  }
}
