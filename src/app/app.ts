import { Component, signal } from '@angular/core';
import { Header } from "./header/header";
import { HeroSection } from "./hero-section/hero-section";
import { BioSection } from "./bio-section/bio-section";
import { SkillsSection } from "./skills-section/skills-section";
import { ProjectsSection } from "./projects-section/projects-section";

@Component({
  selector: 'app-root',
  imports: [Header, HeroSection, BioSection, SkillsSection, ProjectsSection],
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('day-one');
}
