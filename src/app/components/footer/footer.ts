import { Component } from '@angular/core';
import { Socials } from '../socials/socials';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [Socials],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer {
  currentYear: number = new Date().getFullYear();
}
