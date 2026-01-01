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
      imageUrl: 'assets/projects/dashboard.jpg',
      title: 'Speaky balblala',
      description: 'Dashboard interactivo para visualización de datos en tiempo real con gráficos y métricas personalizables.',
      technologies: ['SpringBoot', 'Java', 'Docker', 'MariaDB','Angular', 'TypeScript', 'Material', 'SASS'],
      githubUrl: 'https://github.com/tuusuario/dashboard'
    }
  ];
}
