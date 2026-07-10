import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroComponent } from './hero-component/hero-component/hero-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeroComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('lading-page-talakas');
}
