import { Component, HostListener } from '@angular/core';
// import { window } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  backgroundImage = 'logo.png';
  isMenuOpen = false;
  activeLink = 'Accueil';

  links = ['Accueil', 'Menu', 'Temoignages', 'Horaires', 'Contact'];

  isMobile = window.innerWidth < 600;
  @HostListener('window:resize')
  onResize() {
    this.isMobile = window.innerWidth < 600;

    if (!this.isMobile) {
      this.isMenuOpen = false;
    }
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  setActive(link: string) {
    this.activeLink = link;
    this.isMenuOpen = false;
  }
}
