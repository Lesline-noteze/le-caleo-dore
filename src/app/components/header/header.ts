import { Component, HostListener } from '@angular/core';
import { window } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  isMenuOpen = false;
  activelink = 'Acceuil';

  links = ['Acceuil', 'Menu', 'Temoignages','Horaires', 'Contact'];

  // isMobile = Window.innerWidth < 600;
  // @HostListener('window:resize')
  // onResize(){
  //   this.isMobile= Window.innerWidth < 600;

  //   if (!this.isMobile){
  //     this.isMenuOpen = false;
  //   }
  // }

  toogleMenu(){
    this.isMenuOpen = !this.isMenuOpen;
  }
  setActive(link : string){
    this.activelink = link;
    this.isMenuOpen = false
  }
}
