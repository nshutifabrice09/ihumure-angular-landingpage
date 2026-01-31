import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.html',
  styleUrls: ['./services.css']
})
export class Services implements OnInit {
  
  currentLang: 'rw' | 'en' = 'rw';
  currentTheme: 'light' | 'dark' = 'light';

  // Service icons (reusable)
  private serviceIcons = {
    counseling: `<svg viewBox="0 0 60 60" fill="none">
                  <circle cx="30" cy="30" r="25" stroke="currentColor" stroke-width="2"/>
                  <path d="M30 15 L30 30 L40 40" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
                </svg>`,
    groups: `<svg viewBox="0 0 60 60" fill="none">
              <rect x="10" y="10" width="40" height="40" rx="8" stroke="currentColor" stroke-width="2"/>
              <circle cx="22" cy="25" r="5" fill="currentColor"/>
              <circle cx="38" cy="25" r="5" fill="currentColor"/>
              <path d="M20 38 Q30 43 40 38" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>`,
    tracking: `<svg viewBox="0 0 60 60" fill="none">
                <path d="M10 30 Q20 10, 30 30 T50 30" stroke="currentColor" stroke-width="2" fill="none"/>
                <circle cx="30" cy="30" r="8" fill="currentColor"/>
                <circle cx="10" cy="30" r="4" fill="currentColor"/>
                <circle cx="50" cy="30" r="4" fill="currentColor"/>
              </svg>`,
    resources: `<svg viewBox="0 0 60 60" fill="none">
                 <path d="M30 10 L35 25 L50 25 L38 35 L43 50 L30 40 L17 50 L22 35 L10 25 L25 25 Z" stroke="currentColor" stroke-width="2" fill="currentColor" opacity="0.3"/>
               </svg>`
  };

  translations = {
    rw: {
      title: 'Serivisi Zacu',
      subtitle: 'Serivisi zose zo gufasha ubuzima bwawe bwo mu mutwe',
      features: 'Ibikubiyemo:',
      howItWorksTitle: 'Bigenda gute?',
      ctaTitle: 'Witeguye gutangira?',
      ctaText: 'Hitamo serivisi ukeneye kandi utangire urugendo rwawe rwo kwita ku buzima bwawe',
      ctaButton: 'Tangira Ubu',
      services: [
        {
          id: 1,
          badge: '🎯',
          icon: this.serviceIcons.counseling,
          title: 'Ubujyanama bw\'umwihariko',
          description: 'Kubonana n\'abajyanama b\'inzobere mu buzima bwo mu mutwe bakubera ku buryo bw\'ibanga rirambye',
          features: [
            'Ibiganiro by\'ibanga na mushakashatsi w\'ubuzima bwo mu mutwe',
            'Gahunda yo kugira inama ihariye kuri wowe',
            'Gukurikirana iterambere ryawe',
            'Ubufasha bwa 24/7 mu bihe by\'ihutirwa'
          ],
          pricing: {
            amount: '20,000 RWF',
            period: '/isaha',
            note: 'Serivisi ya mbere ni ubuntu'
          },
          buttonText: 'Tanga Inama'
        },
        {
          id: 2,
          badge: '👥',
          icon: this.serviceIcons.groups,
          title: 'Amatsinda y\'ubufasha',
          description: 'Jya muri amatsinda y\'abantu bafite ibibazo bimwe kandi mushyigikirane',
          features: [
            'Amatsinda atandukanye ku bibazo bitandukanye',
            'Ubuyobozi n\'inzobere mu buzima bwo mu mutwe',
            'Ibiganiro bya buri cyumweru',
            'Ikingira ry\'ibanga n\'ubwubahane'
          ],
          pricing: {
            amount: 'Ubuntu',
            period: '',
            note: 'Ntago hari amafaranga asabwa'
          },
          buttonText: 'Jya mu itsinda'
        },
        {
          id: 3,
          badge: '📊',
          icon: this.serviceIcons.tracking,
          title: 'Gukurikirana iterambere',
          description: 'Koresha ibikoresho by\'ikoranabuhanga kugira ngo ukurikire iterambere ryawe mu buzima',
          features: [
            'Dashboard yo kugenzura ubuzima bwawe',
            'Raporo z\'iterambere ryawe',
            'Ibikoresho byo kwibuka',
            'Intego n\'intego ntarengwa'
          ],
          pricing: {
            amount: '5,000 RWF',
            period: '/ukwezi',
            note: 'Ibyinjira byose bishobora gukoreshwa'
          },
          buttonText: 'Tangira gukurikirana'
        },
        {
          id: 4,
          badge: '📚',
          icon: this.serviceIcons.resources,
          title: 'Amakuru n\'amabwiriza',
          description: 'Soma inyandiko, video, n\'izindi mfashanyigisho ku buzima bwo mu mutwe',
          features: [
            'Inyandiko n\'amakuru ku buzima bwo mu mutwe',
            'Video z\'amahugurwa',
            'Podcast n\'ibiganiro',
            'Ibikoresho byo kwiga ubwawe'
          ],
          pricing: {
            amount: 'Ubuntu',
            period: '',
            note: 'Byose bishobora kuboneka ku buntu'
          },
          buttonText: 'Tangira kwiga'
        }
      ],
      steps: [
        {
          icon: '📝',
          title: 'Iyandikishe',
          description: 'Fungura konti yawe mu minota mike gusa'
        },
        {
          icon: '🔍',
          title: 'Hitamo serivisi',
          description: 'Hitamo serivisi ikubereye'
        },
        {
          icon: '📅',
          title: 'Tanga inama',
          description: 'Tanga inama cyangwa jya mu itsinda'
        },
        {
          icon: '🌟',
          title: 'Tangira urugendo',
          description: 'Tangira inzira yawe yo kwita ku buzima bwawe'
        }
      ]
    },
    en: {
      title: 'Our Services',
      subtitle: 'Comprehensive mental health services to support your journey',
      features: 'What\'s Included:',
      howItWorksTitle: 'How It Works',
      ctaTitle: 'Ready to Get Started?',
      ctaText: 'Choose the service you need and begin your mental health journey today',
      ctaButton: 'Get Started Now',
      services: [
        {
          id: 1,
          badge: '🎯',
          icon: this.serviceIcons.counseling,
          title: 'Private Counseling',
          description: 'Connect with expert mental health counselors in confidential one-on-one sessions',
          features: [
            'Private sessions with licensed mental health professionals',
            'Personalized treatment plans tailored to you',
            'Progress tracking and monitoring',
            '24/7 crisis support available'
          ],
          pricing: {
            amount: '20,000 RWF',
            period: '/hour',
            note: 'First session is free'
          },
          buttonText: 'Book Session'
        },
        {
          id: 2,
          badge: '👥',
          icon: this.serviceIcons.groups,
          title: 'Support Groups',
          description: 'Join groups with people facing similar challenges for mutual support',
          features: [
            'Various groups for different concerns',
            'Facilitated by mental health experts',
            'Weekly group sessions',
            'Safe and confidential environment'
          ],
          pricing: {
            amount: 'Free',
            period: '',
            note: 'No cost to join'
          },
          buttonText: 'Join a Group'
        },
        {
          id: 3,
          badge: '📊',
          icon: this.serviceIcons.tracking,
          title: 'Progress Tracking',
          description: 'Use digital tools to monitor your mental health progress and growth',
          features: [
            'Personal wellness dashboard',
            'Progress reports and insights',
            'Mood tracking tools',
            'Goal setting and milestones'
          ],
          pricing: {
            amount: '5,000 RWF',
            period: '/month',
            note: 'Access all features'
          },
          buttonText: 'Start Tracking'
        },
        {
          id: 4,
          badge: '📚',
          icon: this.serviceIcons.resources,
          title: 'Resources & Education',
          description: 'Access articles, videos, and educational materials on mental health',
          features: [
            'Mental health articles and guides',
            'Educational videos',
            'Podcasts and talks',
            'Self-help tools and worksheets'
          ],
          pricing: {
            amount: 'Free',
            period: '',
            note: 'All resources are free'
          },
          buttonText: 'Explore Resources'
        }
      ],
      steps: [
        {
          icon: '📝',
          title: 'Sign Up',
          description: 'Create your account in just a few minutes'
        },
        {
          icon: '🔍',
          title: 'Choose Service',
          description: 'Select the service that fits your needs'
        },
        {
          icon: '📅',
          title: 'Book Session',
          description: 'Schedule a session or join a group'
        },
        {
          icon: '🌟',
          title: 'Start Journey',
          description: 'Begin your path to better mental health'
        }
      ]
    }
  };

  constructor(private router: Router) {}

  ngOnInit(): void {
    const savedLang = localStorage.getItem('ihumure-lang');
    const savedTheme = localStorage.getItem('ihumure-theme');
    
    if (savedLang) this.currentLang = savedLang as 'rw' | 'en';
    if (savedTheme) this.currentTheme = savedTheme as 'light' | 'dark';
  }

  getCurrentServices() {
    return this.translations[this.currentLang].services;
  }

  getCurrentSteps() {
    return this.translations[this.currentLang].steps;
  }

  bookService(serviceId: number): void {
    console.log('Booking service:', serviceId);
    this.router.navigate(['/signup']);
  }

  onGetStarted(): void {
    this.router.navigate(['/signup']);
  }
}