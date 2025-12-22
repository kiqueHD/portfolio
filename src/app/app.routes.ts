import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './components/about/about';
import { Projects } from './pages/projects/projects';
import { Timeline } from './components/timeline/timeline';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: Home },
    { path: 'about', component: About },
    { path: 'projects', component: Projects },
    { path: 'timeline', component: Timeline }
];