import { Component } from '@angular/core';
import { Project } from "../../components/project/project";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [Project, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  featuredProjects: any[] = [
    {
      imageUrl: 'https://raw.githubusercontent.com/kiqueHD/projecteTraficTrackin/refs/heads/main/caputratraffictrackingapp.png',
      title: 'Traffic Tracking',
      description: 'Plataforma para visualizar el estado del tráfico de Valencia en tiempo real con mapas interactivos.',
      technologies: ['SpringBoot', 'Java', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
      githubUrl: 'https://github.com/kiqueHD/projecteTraficTrackin',
    },
    {
      imageUrl: '',
      title: 'Speakly',
      description: 'Ecommerce de venta de cursos de idiomas con funcionalidades de gestión de usuarios, productos y pedidos.',
      technologies: ['SpringBoot', 'Java', 'Docker', 'MariaDB','Angular', 'TypeScript', 'Material', 'SASS'],
      githubUrl: ''
    }
  ];
}
