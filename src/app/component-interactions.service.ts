import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComponentInteractionsService {
  isLoginMenuOpened : boolean = false;
  toggleMenuLogin(): void{this.isLoginMenuOpened = !this.isLoginMenuOpened;}
  constructor() { }
}
