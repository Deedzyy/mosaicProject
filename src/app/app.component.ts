import { Component } from '@angular/core';
import { ComponentInteractionsService } from './component-interactions.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mosaicProject';
  constructor(public service: ComponentInteractionsService) {}
}
