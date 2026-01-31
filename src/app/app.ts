import { Component, signal } from '@angular/core';
import { Header } from "./header/header";
import { HeroSection } from "./hero-section/hero-section";

@Component({
  selector: 'app-root',
  imports: [Header, HeroSection],
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('day-one');
}
