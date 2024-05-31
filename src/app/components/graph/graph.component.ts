import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css'],
})
export class GraphComponent  implements OnDestroy {
  results: any[] = [
    {
      name: 'Germany',
      value: 8940000,
    },
    {
      name: 'USA',
      value: 5000000,
    },
    {
      name: 'France',
      value: 7200000,
    },
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

  intervalo;

  constructor() {
    this.intervalo = setInterval(() => {

      const newResults = [...this.results];
      for (let i = 0; i < newResults.length; i++) {
        newResults[i].value = Math.floor(Math.random() * 500);
      }
      this.results = [...newResults];
    }, 1000);
  }
  ngOnDestroy(): void {
    clearInterval(this.intervalo);
  }

  onSelect(event: any) {
    console.log(event);
  }

}
