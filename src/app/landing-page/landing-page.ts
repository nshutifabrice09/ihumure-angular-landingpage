import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './landing-page.html',
  styleUrls: ['./landing-page.css']
})
export class LandingPage implements OnInit {
  
  currentYear: number = new Date().getFullYear();
  isMobileMenuOpen: boolean = false;

  stats = {
    peopleHelped: '5,000',
    counselors: '150',
    availability: '24/7'
  };

  services = [
    {
      icon: `<svg viewBox="0 0 60 60" fill="none">
              <circle cx="30" cy="30" r="25" stroke="currentColor" stroke-width="2"/>
              <path d="M30 15 L30 30 L40 40" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
            </svg>`,
      title: 'Ubujyanama bw\'umwihariko',
      description: 'Kubonana n\'abajyanama b\'inzobere mu buzima bwo mu mutwe bakubera ku buryo bw\'ibanga'
    },
    {
      icon: `<svg viewBox="0 0 60 60" fill="none">
              <rect x="10" y="10" width="40" height="40" rx="8" stroke="currentColor" stroke-width="2"/>
              <circle cx="22" cy="25" r="5" fill="currentColor"/>
              <circle cx="38" cy="25" r="5" fill="currentColor"/>
              <path d="M20 38 Q30 43 40 38" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>`,
      title: 'Amatsinda y\'ubufasha',
      description: 'Jya muri amatsinda y\'abantu bafite ibibazo bimwe kandi mushyigikirane'
    },
    {
      icon: `<svg viewBox="0 0 60 60" fill="none">
              <path d="M10 30 Q20 10, 30 30 T50 30" stroke="currentColor" stroke-width="2" fill="none"/>
              <circle cx="30" cy="30" r="8" fill="currentColor"/>
              <circle cx="10" cy="30" r="4" fill="currentColor"/>
              <circle cx="50" cy="30" r="4" fill="currentColor"/>
            </svg>`,
      title: 'Gukurikirana iterambere',
      description: 'Koresha ibikoresho by\'ikoranabuhanga kugira ngo ukurikire iterambere ryawe mu buzima'
    },
    {
      icon: `<svg viewBox="0 0 60 60" fill="none">
              <path d="M30 10 L35 25 L50 25 L38 35 L43 50 L30 40 L17 50 L22 35 L10 25 L25 25 Z" stroke="currentColor" stroke-width="2" fill="currentColor" opacity="0.3"/>
            </svg>`,
      title: 'Amakuru n\'amabwiriza',
      description: 'Soma inyandiko, video, n\'izindi mfashanyigisho ku buzima bwo mu mutwe'
    }
  ];

  communityFeatures = [
    'Ikingira ry\'ibanga n\'umutekano',
    'Umuryango w\'ubwigenge utanga inkunga',
    'Imikoro n\'ibikorwa by\'amajyambere',
    'Abajyanama b\'inzobere'
  ];

  testimonial = {
    text: 'Ihumure yampaye umwanya wo kuvuga ibibazo byanjye kandi nsanga abantu banshyigikira. Mfite ibyiringiro bishya mu buzima.',
    authorName: 'Marie',
    authorInitial: 'M',
    location: 'Kigali, Rwanda'
  };

  constructor() { }

  ngOnInit(): void {
    console.log('Landing page initialized');
  }

  scrollToSection(sectionId: string, event: Event): void {
    event.preventDefault();
    const element = document.getElementById(sectionId);
    
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }

  navigateTo(route: string, event: Event): void {
    event.preventDefault();
    console.log(`Navigating to: ${route}`);
    // TODO: Implement routing
  }

  onLogin(): void {
    console.log('Login button clicked');
    // TODO: Navigate to login page
  }

  onStartNow(): void {
    console.log('Start Now button clicked');
    // TODO: Navigate to signup
  }

  onLearnMore(): void {
    console.log('Learn More button clicked');
    this.scrollToSection('services', new Event('click'));
  }

  onJoinCommunity(): void {
    console.log('Join Community button clicked');
    // TODO: Navigate to community
  }

  onCreateAccount(): void {
    console.log('Create Account button clicked');
    // TODO: Navigate to signup
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    console.log('Mobile menu toggled:', this.isMobileMenuOpen);
  }
}