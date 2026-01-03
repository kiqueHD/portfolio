import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Project } from '../../components/project/project';

@Component({
  selector: 'app-home',
  imports: [Project, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  featuredProjects: any[] = [
    {
      imageUrl: 'assets/projects/traffictrackin.png',
      title: 'Traffic Tracking',
      description: 'Plataforma para visualizar el estado del tráfico de Valencia en tiempo real con mapas interactivos.',
      technologies: ['SpringBoot', 'Java', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
      githubUrl: 'https://github.com/kiqueHD/projecteTraficTrackin',
    },
    {
      imageUrl: 'assets/projects/cursoimg.png',
      title: 'Speakly',
      description: 'Ecommerce de venta de cursos de idiomas con funcionalidades de gestión de usuarios, productos y pedidos.',
      technologies: ['SpringBoot', 'Java', 'Docker', 'MariaDB','Angular', 'TypeScript', 'Material', 'SASS'],
      githubUrl: 'https://github.com/orgs/speakly-project/repositories'
    }
  ];
}
