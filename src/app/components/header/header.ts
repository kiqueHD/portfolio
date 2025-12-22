import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
 navItems = [
    { path: '/', label: 'home' },
    { path: '/proyectos', label: 'proyectos' },
    { path: '/contacto', label: 'contacto' }
  ];
}
