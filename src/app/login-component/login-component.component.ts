import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ComponentInteractionsService } from '../component-interactions.service';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponentComponent{
  constructor(public service: ComponentInteractionsService) {}
}
