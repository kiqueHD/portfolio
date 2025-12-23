import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
 navItems = [
    { path: '/', label: 'home' },
    { path: '/projects', label: 'proyectos' },
    { path: '/contact', label: 'contacto' }
  ];
}
