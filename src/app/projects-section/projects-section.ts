import { Component, signal } from '@angular/core';
import { Project } from '../types';

@Component({
  selector: 'app-projects-section',
  imports: [],
  templateUrl: './projects-section.html',
})
export class ProjectsSection {
  PROJECTS: Project[] = [
    {
      "id": "proj-study-partner",
      "title": "Study Partner (Graduation Project)",
      "period": "2025–2026",
      "technologies": ["Python", "Django", "React", "RAG", "AI"],
      "url": "https://github.com/yourusername/study-partner-rag",
      "description": [
        "Developed an AI-powered study assistant that leverages Retrieval-Augmented Generation (RAG) to answer academic questions, generate personalized quizzes, and evaluate user performance."
      ]
    },
    {
      "id": "proj-gan-synthesis",
      "title": "Image Synthesis with GAN",
      "period": "2025–2026",
      "technologies": ["Python", "PyTorch", "GAN", "Computer Vision"],
      "url": "https://github.com/yourusername/gan-image-synthesis",
      "description": [
        "Trained a variant of Generative Adversarial Network (GAN) to generate realistic images from random noise."
      ]
    },
    {
      "id": "proj-crowd-tracking",
      "title": "Crowd Person Tracking with YOLOX and BoostTrack",
      "period": "2025–2026",
      "technologies": ["Python", "YOLOX", "BoostTrack", "Object Detection"],
      "url": "https://github.com/yourusername/crowd-tracking-yolox",
      "description": [
        "Implemented a real-time crowd tracking system using the YOLOX object detector integrated with the BoostTrack algorithm for multi-object tracking.",
        "Processed public datasets (e.g., MOT17, CrowdHuman) and evaluated tracking performance using standard metrics such as MOTA and HOTA.",
        "Optimized detection-tracking pipeline for crowded scenes by tuning detection thresholds and managing ID switches."
      ]
    },
    {
      "id": "proj-nmt-transformer",
      "title": "German-to-English Translation Model",
      "period": "2024–2025",
      "technologies": ["Python", "PyTorch", "Transformers", "NLP"],
      "url": "https://github.com/yourusername/transformer-nmt",
      "description": [
        "Implemented a Transformer-based model from scratch to translate German to English.",
        "Trained the model using German-English datasets, optimizing for translation accuracy."
      ]
    },
    {
      "id": "proj-rust-chatbot",
      "title": "Chat bot Web Application",
      "period": "2022–2023",
      "technologies": ["Rust", "Actix Web"],
      "url": "https://github.com/yourusername/rust-actix-chatbot",
      "description": [
        "Developed a web application using Actix Web that allows users to hold conversations with a chat bot."
      ]
    },
    {
      "id": "proj-student-affairs",
      "title": "Student Affairs System",
      "period": "2022–2023",
      "technologies": ["Python", "Django", "CRUD"],
      "url": "https://github.com/yourusername/django-student-affairs",
      "description": [
        "Created a CRUD web application for managing student information."
      ]
    }
  ];

  currentProjectIndex = signal(0);

  next() {
    this.currentProjectIndex.update(index => (index + 1) % this.PROJECTS.length);
  }
  prev() {
    this.currentProjectIndex.update(index => (index-1+this.PROJECTS.length) % this.PROJECTS.length);
  }
  goTo(index: number) {
    this.currentProjectIndex.set(index);
  }
}
