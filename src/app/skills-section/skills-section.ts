import { Component } from '@angular/core';
import { SkillProgress } from './skill-progress';


interface Skill {
  name: string;
  id: string;
  level: number;
}

@Component({
  selector: 'app-skills-section',
  imports: [SkillProgress],
  templateUrl: './skills-section.html',
})
export class SkillsSection {
  SKILLS = [
    {
      "id": "programming-languages",
      "category": "Programming Languages",
      "items": [
        { "id": "lang-python", "name": "Python", "level": 95 },
        { "id": "lang-c", "name": "C", "level": 70 },
        { "id": "lang-cpp", "name": "C++", "level": 75 },
        { "id": "lang-csharp", "name": "C#", "level": 70 },
        { "id": "lang-java", "name": "Java", "level": 80 },
        { "id": "lang-rust", "name": "Rust", "level": 85 },
        { "id": "lang-javascript", "name": "JavaScript", "level": 90 },
        { "id": "lang-typescript", "name": "TypeScript", "level": 90 },
        { "id": "lang-html", "name": "HTML", "level": 95 },
        { "id": "lang-css", "name": "CSS", "level": 90 },
        { "id": "lang-sql", "name": "SQL", "level": 85 },
        { "id": "lang-bash", "name": "Bash", "level": 75 }
      ]
    },
    {
      "id": "artificial-intelligence",
      "category": "Artificial Intelligence",
      "items": [
        { "id": "ai-dl", "name": "DL", "level": 85 },
        { "id": "ai-nn-design", "name": "NN Design", "level": 80 },
        { "id": "ai-transfer-learning", "name": "Transfer Learning", "level": 85 },
        { "id": "ai-fine-tuning-llms", "name": "Fine-tuning LLMs", "level": 90 },
        { "id": "ai-opencv", "name": "OpenCV", "level": 80 },
        { "id": "ai-nlp", "name": "NLP", "level": 90 },
        { "id": "ai-generative-ai", "name": "Generative AI", "level": 95 },
        { "id": "ai-rag-systems", "name": "RAG Systems", "level": 95 }
      ]
    },
    {
      "id": "full-stack",
      "category": "Full-stack",
      "items": [
        { "id": "fs-wordpress", "name": "Wordpress", "level": 75 },
        { "id": "fs-django", "name": "Django", "level": 90 },
        { "id": "fs-flask", "name": "Flask", "level": 85 },
        { "id": "fs-react", "name": "React", "level": 90 },
        { "id": "fs-actix-web", "name": "Actix Web (Rust)", "level": 80 },
        { "id": "fs-nodejs", "name": "Node.js", "level": 85 },
        { "id": "fs-flutter", "name": "Flutter", "level": 75 }
      ]
    },
    {
      "id": "cloud-devops",
      "category": "Cloud & DevOps",
      "items": [
        { "id": "cd-docker", "name": "Docker", "level": 85 },
        { "id": "cd-github-actions", "name": "Github actions", "level": 80 },
        { "id": "cd-aws-cloud", "name": "AWS cloud", "level": 75 },
        { "id": "cd-git", "name": "Git", "level": 90 },
        { "id": "cd-unix", "name": "Unix", "level": 85 }
      ]
    }
  ];

  selectedSkill: Skill | undefined = undefined;

  chooseSkill(id: string)
  {
    this.selectedSkill = this.SKILLS.flatMap(cat => cat.items).find(item => item.id == id);
  }
}
