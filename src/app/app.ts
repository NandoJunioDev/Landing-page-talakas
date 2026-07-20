import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroComponent } from './hero-component/hero-component/hero-component';
import {AmenitiesComponent} from './amenities-component/amenities-component/amenities-component';
import {GalleryComponent} from './gallery-component/gallery-component/gallery-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeroComponent, AmenitiesComponent, GalleryComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('lading-page-talakas');
}
