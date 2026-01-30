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
  currentLang: 'rw' | 'en' = 'rw'; // Default to Kinyarwanda
  currentTheme: 'light' | 'dark' = 'light'; // Default to light theme

  stats = {
    peopleHelped: '5,000',
    counselors: '150',
    availability: '24/7'
  };

  // Translations Object
  translations = {
    rw: {
      hero: {
        title1: 'Ubuzima bwo',
        title2: 'mu mutwe',
        title3: 'ni ingenzi',
        description: 'Ihumure ni urubuga rw\'umwijima rutanga ubufasha mu buzima bwo mu mutwe n\'umuryango ushyigikira abantu b\'u Rwanda. Turafasha gutanga ubufasha bunoze, ubujyanama, n\'umuryango w\'ubwigenge.',
        startButton: 'Tangira ubu',
        learnButton: 'Menya byinshi'
      },
      stats: {
        peopleHelped: 'Abantu bafashijwe',
        counselors: 'Abajyanama',
        support: 'Ubufasha'
      },
      cards: {
        professional: 'Ubufasha bw\'uburyo',
        community: 'Umuryango w\'ubwigenge',
        wellness: 'Ubuzima bwiza'
      },
      services: {
        title: 'Serivisi zacu',
        subtitle: 'Turatanga serivisi zitandukanye zo gufasha ubuzima bwawe bwo mu mutwe',
        service1: {
          title: 'Ubujyanama bw\'umwihariko',
          description: 'Kubonana n\'abajyanama b\'inzobere mu buzima bwo mu mutwe bakubera ku buryo bw\'ibanga'
        },
        service2: {
          title: 'Amatsinda y\'ubufasha',
          description: 'Jya muri amatsinda y\'abantu bafite ibibazo bimwe kandi mushyigikirane'
        },
        service3: {
          title: 'Gukurikirana iterambere',
          description: 'Koresha ibikoresho by\'ikoranabuhanga kugira ngo ukurikire iterambere ryawe mu buzima'
        },
        service4: {
          title: 'Amakuru n\'amabwiriza',
          description: 'Soma inyandiko, video, n\'izindi mfashanyigisho ku buzima bwo mu mutwe'
        }
      },
      community: {
        title: 'Umuryango wacu',
        description: 'Ihumure ni ukwikuramo aho abantu bahura, basangira, kandi bashyigikirane. Umuryango wacu urakomeye kandi ugizwe n\'abantu bafite ibibazo bitandukanye ariko bafite intego imwe - kubaka ubuzima bwiza bwo mu mutwe.',
        features: [
          'Ikingira ry\'ibanga n\'umutekano',
          'Umuryango w\'ubwigenge utanga inkunga',
          'Imikoro n\'ibikorwa by\'amajyambere',
          'Abajyanama b\'inzobere'
        ],
        button: 'Jya mu muryango'
      },
      testimonial: {
        text: 'Ihumure yampaye umwanya wo kuvuga ibibazo byanjye kandi nsanga abantu banshyigikira. Mfite ibyiringiro bishya mu buzima.'
      },
      cta: {
        title: 'Tangira urugendo rwawe rwo kwita ku buzima bwawe bwo mu mutwe',
        text: 'Jya muri Ihumure ubu kandi utangire kubona ubufasha ukeneye',
        button: 'Fungura konti yawe'
      },
      footer: {
        description: 'Ubufasha mu buzima bwo mu mutwe n\'umuryango ushyigikira abantu b\'u Rwanda.',
        servicesTitle: 'Serivisi',
        counseling: 'Ubujyanama',
        groups: 'Amatsinda',
        resources: 'Amakuru',
        tools: 'Ibikoresho',
        aboutTitle: 'Kumenyekanisha',
        about: 'Abo turi',
        team: 'Ikipe',
        press: 'Amakuru y\'itangazamakuru',
        contact: 'Twandikire',
        contactTitle: 'Dufatanye',
        rights: 'Uburenganzira bwose burahawe.'
      }
    },
    en: {
      hero: {
        title1: 'Your mental',
        title2: 'health',
        title3: 'matters',
        description: 'Ihumure is a digital platform providing mental health support and community for Rwandans. We offer professional counseling, support groups, and a caring community.',
        startButton: 'Get Started',
        learnButton: 'Learn More'
      },
      stats: {
        peopleHelped: 'People Helped',
        counselors: 'Counselors',
        support: 'Support'
      },
      cards: {
        professional: 'Professional Support',
        community: 'Supportive Community',
        wellness: 'Good Health'
      },
      services: {
        title: 'Our Services',
        subtitle: 'We provide various services to support your mental health journey',
        service1: {
          title: 'Private Counseling',
          description: 'Connect with expert mental health counselors in confidential sessions'
        },
        service2: {
          title: 'Support Groups',
          description: 'Join groups with people facing similar challenges for mutual support'
        },
        service3: {
          title: 'Progress Tracking',
          description: 'Use digital tools to monitor your mental health progress and growth'
        },
        service4: {
          title: 'Resources & Education',
          description: 'Access articles, videos, and educational materials on mental health'
        }
      },
      community: {
        title: 'Our Community',
        description: 'Ihumure is a safe space where people connect, share, and support each other. Our community is strong and diverse, united by one goal - building better mental health.',
        features: [
          'Privacy and safety guaranteed',
          'Supportive and caring community',
          'Events and growth workshops',
          'Expert counselors'
        ],
        button: 'Join Community'
      },
      testimonial: {
        text: 'Ihumure gave me a space to express my struggles and I found supportive people. I have new hope in life.'
      },
      cta: {
        title: 'Start your mental health journey today',
        text: 'Join Ihumure now and begin getting the support you need',
        button: 'Create Your Account'
      },
      footer: {
        description: 'Mental health support and community for the people of Rwanda.',
        servicesTitle: 'Services',
        counseling: 'Counseling',
        groups: 'Groups',
        resources: 'Resources',
        tools: 'Tools',
        aboutTitle: 'About',
        about: 'About Us',
        team: 'Team',
        press: 'Press',
        contact: 'Contact Us',
        contactTitle: 'Contact',
        rights: 'All rights reserved.'
      }
    }
  };

  testimonial = {
    authorName: 'Marie',
    authorInitial: 'M',
    location: 'Kigali, Rwanda'
  };

  serviceIcons = {
    icon1: `<svg viewBox="0 0 60 60" fill="none">
            <circle cx="30" cy="30" r="25" stroke="currentColor" stroke-width="2"/>
            <path d="M30 15 L30 30 L40 40" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
          </svg>`,
    icon2: `<svg viewBox="0 0 60 60" fill="none">
            <rect x="10" y="10" width="40" height="40" rx="8" stroke="currentColor" stroke-width="2"/>
            <circle cx="22" cy="25" r="5" fill="currentColor"/>
            <circle cx="38" cy="25" r="5" fill="currentColor"/>
            <path d="M20 38 Q30 43 40 38" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>`,
    icon3: `<svg viewBox="0 0 60 60" fill="none">
            <path d="M10 30 Q20 10, 30 30 T50 30" stroke="currentColor" stroke-width="2" fill="none"/>
            <circle cx="30" cy="30" r="8" fill="currentColor"/>
            <circle cx="10" cy="30" r="4" fill="currentColor"/>
            <circle cx="50" cy="30" r="4" fill="currentColor"/>
          </svg>`,
    icon4: `<svg viewBox="0 0 60 60" fill="none">
            <path d="M30 10 L35 25 L50 25 L38 35 L43 50 L30 40 L17 50 L22 35 L10 25 L25 25 Z" stroke="currentColor" stroke-width="2" fill="currentColor" opacity="0.3"/>
          </svg>`
  };

  constructor() { }

  ngOnInit(): void {
    // Load saved preferences
    const savedLang = localStorage.getItem('ihumure-lang');
    const savedTheme = localStorage.getItem('ihumure-theme');
    
    if (savedLang) {
      this.currentLang = savedLang as 'rw' | 'en';
    }
    
    if (savedTheme) {
      this.currentTheme = savedTheme as 'light' | 'dark';
    }
    
    console.log('Landing page initialized');
  }

  // Get current services based on language
  getCurrentServices() {
    const services = this.translations[this.currentLang].services;
    return [
      { icon: this.serviceIcons.icon1, title: services.service1.title, description: services.service1.description },
      { icon: this.serviceIcons.icon2, title: services.service2.title, description: services.service2.description },
      { icon: this.serviceIcons.icon3, title: services.service3.title, description: services.service3.description },
      { icon: this.serviceIcons.icon4, title: services.service4.title, description: services.service4.description }
    ];
  }

  // Get current community features based on language
  getCurrentFeatures() {
    return this.translations[this.currentLang].community.features;
  }

  // Toggle Language
  toggleLanguage(): void {
    this.currentLang = this.currentLang === 'rw' ? 'en' : 'rw';
    localStorage.setItem('ihumure-lang', this.currentLang);
    console.log('Language switched to:', this.currentLang);
  }

  // Toggle Theme
  toggleTheme(): void {
    this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
    localStorage.setItem('ihumure-theme', this.currentTheme);
    console.log('Theme switched to:', this.currentTheme);
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
  }

  onLogin(): void {
    console.log('Login button clicked');
  }

  onStartNow(): void {
    console.log('Start Now button clicked');
  }

  onLearnMore(): void {
    console.log('Learn More button clicked');
    this.scrollToSection('services', new Event('click'));
  }

  onJoinCommunity(): void {
    console.log('Join Community button clicked');
  }

  onCreateAccount(): void {
    console.log('Create Account button clicked');
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    console.log('Mobile menu toggled:', this.isMobileMenuOpen);
  }
}