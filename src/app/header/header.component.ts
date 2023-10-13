import { ChangeDetectionStrategy, Component, HostListener, OnInit } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  host: { '(document:click)': 'handleClick($event)' },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
  @HostListener('window:resize', ['$event'])
  onResize(event?: any) {
    if(window.innerWidth>1067){
      this.closeNav = true;
      this.hidingIcons = true;
    }else if(window.innerWidth<1067){
      this.closeNav = false;
      this.hidingIcons = false;
    }
  }
  ngOnInit(): void {
    if(window.innerWidth>1067){
      this.closeNav = true;
      this.hidingIcons = true;
    }else if(window.innerWidth<1067){
      this.closeNav = false;
      this.hidingIcons = false;
    }
  }
  hidingIcons : boolean = true;
  isProjectMenuOpened: boolean = false;
  isMoreInfoMenuOpened: boolean = false;
  experiencesMenu : boolean = false;
  competencesMenu : boolean = false;
  certifsMenu : boolean = false;
  formationsMenu : boolean = false;
  closeNav : boolean = true;
  toggleMenus(id:number){id==0 ? this.experiencesMenu = !this.experiencesMenu : id==1 ? this.competencesMenu = !this.competencesMenu : id==2 ? this.certifsMenu = !this.certifsMenu : id==3 ? this.formationsMenu = !this.formationsMenu : null}
  toggleMenuProjects(): void{this.isProjectMenuOpened = !this.isProjectMenuOpened;}
  toggleMenuMoreInfo(): void{this.isMoreInfoMenuOpened = !this.isMoreInfoMenuOpened;}
  closeNavigation(): void{this.closeNav = !this.closeNav;}
  openNavigation(): void{this.closeNavigation();}
}
