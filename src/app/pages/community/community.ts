import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-community',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './community.html',
  styleUrls: ['./community.css']
})
export class CommunityComponent implements OnInit {
  
  currentLang: 'rw' | 'en' = 'rw';
  currentTheme: 'light' | 'dark' = 'light';

  stats = [
    { icon: '👥', number: '5,000+', key: 'members' },
    { icon: '🤝', number: '50+', key: 'groups' },
    { icon: '💬', number: '10,000+', key: 'discussions' },
    { icon: '⭐', number: '4.9/5', key: 'rating' }
  ];

  translations = {
    rw: {
      title: 'Umuryango Wacu',
      subtitle: 'Jya mu muryango w\'abantu bafite intego imwe - kubaka ubuzima bwiza bwo mu mutwe',
      joinButton: 'Jya mu muryango',
      members: 'abanyamuryango',
      statLabels: {
        members: 'Abanyamuryango',
        groups: 'Amatsinda',
        discussions: 'Ibiganiro',
        rating: 'Amanota'
      },
      groupsTitle: 'Amatsinda y\'ubufasha',
      groupsSubtitle: 'Hitamo itsinda rikubereye kandi utangire urugendo rwawe',
      joinGroupButton: 'Jya muritsinda',
      groups: [
        {
          id: 1,
          icon: '😰',
          name: 'Guhangayika n\'ubwoba',
          description: 'Amatsinda y\'abantu bahura n\'ibibazo byo guhangayika n\'ubwoba',
          schedule: 'Ku wa mbere buri cyumweru - 6:00pm',
          members: 234
        },
        {
          id: 2,
          icon: '😢',
          name: 'Kwiheba',
          description: 'Ubufasha ku bantu bahuye n\'ibibazo byo kwiheba',
          schedule: 'Ku wa kabiri buri cyumweru - 5:00pm',
          members: 189
        },
        {
          id: 3,
          icon: '💔',
          name: 'Umubano n\'umuryango',
          description: 'Ibiganiro ku bibazo by\'umubano n\'umuryango',
          schedule: 'Ku wa kane buri cyumweru - 7:00pm',
          members: 312
        },
        {
          id: 4,
          icon: '🎓',
          name: 'Abanyeshuri',
          description: 'Ubufasha ku banyeshuri bahura n\'ibibazo byo mu mutwe',
          schedule: 'Ku wa gatanu buri cyumweru - 4:00pm',
          members: 445
        },
        {
          id: 5,
          icon: '👨‍👩‍👧',
          name: 'Ababyeyi',
          description: 'Amatsinda y\'ababyeyi biga gufasha abana babo',
          schedule: 'Ku wa gatandatu buri cyumweru - 10:00am',
          members: 278
        },
        {
          id: 6,
          icon: '💪',
          name: 'Kwihangana',
          description: 'Kwiga ubuhanga bwo kwihangana no guhangana n\'ibibazo',
          schedule: 'Ku cyumweru buri cyumweru - 3:00pm',
          members: 356
        }
      ],
      guidelinesTitle: 'Amategeko y\'umuryango',
      guidelinesIntro: 'Kugira ngo tujye muri umuryango w\'umutekano, tubisaba kwubahiriza amategeko akurikira:',
      guidelines: [
        {
          icon: '🤝',
          title: 'Ubwubahane',
          description: 'Baha buri muntu icyubahiro no kwumva. Ntiwemererwa gusebanya cyangwa gutoteza abandi.'
        },
        {
          icon: '🔒',
          title: 'Ibanga',
          description: 'Ibivugwa mu matsinda bigumaho mu matsinda. Ntushobora kubivuga ahandi.'
        },
        {
          icon: '💬',
          title: 'Kwiga no kumvira',
          description: 'Tanga umusanzu wawe ariko kandi wumve abandi. Buri wese afite icyo avuga.'
        },
        {
          icon: '❌',
          title: 'Ntakibangamiye',
          description: 'Ntago twemeranyijwe kuvuga ibintu bikangura cyangwa bitera ubwoba.'
        },
        {
          icon: '👨‍⚕️',
          title: 'Ubahiriza abagenzuzi',
          description: 'Buri tsinda rifite umugenzuzi w\'inzobere. Mwubahirize inama zabo.'
        },
        {
          icon: '⏰',
          title: 'Kuba ku gihe',
          description: 'Shyira mu gaciro igihe cy\'abandi. Uka kandi ukore ku gihe.'
        }
      ],
      testimonialsTitle: 'Ibyo abanyamuryango bavuga',
      testimonials: [
        {
          text: 'Umuryango wa Ihumure wampaye impano y\'abantu banshigikira. Nifuza ko wese yari yaransanga.',
          name: 'Jean',
          initial: 'J',
          group: 'Itsinda ry\'ubwoba'
        },
        {
          text: 'Natangiye kubona amahoro nyuma yo kwinjira muri umuryango wa Ihumure. Murakoze cyane!',
          name: 'Marie',
          initial: 'M',
          group: 'Itsinda ryo kwiheba'
        },
        {
          text: 'Nkunda uko abantu bafite ububabare bumwe bahuriraho kandi bakaganira. Ndumva ndi umuntu.',
          name: 'Patrick',
          initial: 'P',
          group: 'Itsinda ry\'umubano'
        }
      ],
      ctaTitle: 'Witeguye kwinjira mu muryango?',
      ctaText: 'Iyandikishe uyu munsi kandi utangire kubona abantu bazagufasha',
      ctaButton: 'Iyandikishe ubu'
    },
    en: {
      title: 'Our Community',
      subtitle: 'Join a community of people united by one goal - building better mental health',
      joinButton: 'Join Community',
      members: 'members',
      statLabels: {
        members: 'Members',
        groups: 'Groups',
        discussions: 'Discussions',
        rating: 'Rating'
      },
      groupsTitle: 'Support Groups',
      groupsSubtitle: 'Choose a group that fits your needs and start your journey',
      joinGroupButton: 'Join Group',
      groups: [
        {
          id: 1,
          icon: '😰',
          name: 'Anxiety & Stress',
          description: 'Groups for people dealing with anxiety and stress-related challenges',
          schedule: 'Mondays - 6:00pm',
          members: 234
        },
        {
          id: 2,
          icon: '😢',
          name: 'Depression Support',
          description: 'Support for individuals experiencing depression',
          schedule: 'Tuesdays - 5:00pm',
          members: 189
        },
        {
          id: 3,
          icon: '💔',
          name: 'Relationships & Family',
          description: 'Discussions on relationship and family issues',
          schedule: 'Thursdays - 7:00pm',
          members: 312
        },
        {
          id: 4,
          icon: '🎓',
          name: 'Students',
          description: 'Support for students facing mental health challenges',
          schedule: 'Fridays - 4:00pm',
          members: 445
        },
        {
          id: 5,
          icon: '👨‍👩‍👧',
          name: 'Parents',
          description: 'Groups for parents learning to support their children',
          schedule: 'Saturdays - 10:00am',
          members: 278
        },
        {
          id: 6,
          icon: '💪',
          name: 'Resilience',
          description: 'Building resilience and coping skills',
          schedule: 'Sundays - 3:00pm',
          members: 356
        }
      ],
      guidelinesTitle: 'Community Guidelines',
      guidelinesIntro: 'To maintain a safe community, we ask that everyone follows these guidelines:',
      guidelines: [
        {
          icon: '🤝',
          title: 'Respect',
          description: 'Treat everyone with respect and empathy. No harassment or bullying allowed.'
        },
        {
          icon: '🔒',
          title: 'Confidentiality',
          description: 'What is shared in groups stays in groups. Do not share outside.'
        },
        {
          icon: '💬',
          title: 'Listen & Learn',
          description: 'Contribute your insights but also listen to others. Everyone has something valuable to share.'
        },
        {
          icon: '❌',
          title: 'No Harmful Content',
          description: 'No triggering or harmful content. Keep discussions constructive.'
        },
        {
          icon: '👨‍⚕️',
          title: 'Respect Facilitators',
          description: 'Each group has expert facilitators. Respect their guidance and expertise.'
        },
        {
          icon: '⏰',
          title: 'Be Punctual',
          description: 'Value others\' time. Arrive and participate on time.'
        }
      ],
      testimonialsTitle: 'What Our Members Say',
      testimonials: [
        {
          text: 'The Ihumure community gave me the gift of supportive people. I wish everyone could find this.',
          name: 'Jean',
          initial: 'J',
          group: 'Anxiety Group'
        },
        {
          text: 'I started finding peace after joining the Ihumure community. Thank you so much!',
          name: 'Marie',
          initial: 'M',
          group: 'Depression Group'
        },
        {
          text: 'I love how people with similar struggles come together and talk. I feel human.',
          name: 'Patrick',
          initial: 'P',
          group: 'Relationships Group'
        }
      ],
      ctaTitle: 'Ready to Join the Community?',
      ctaText: 'Sign up today and start connecting with people who understand',
      ctaButton: 'Sign Up Now'
    }
  };

  constructor(private router: Router) {}

  ngOnInit(): void {
    const savedLang = localStorage.getItem('ihumure-lang');
    const savedTheme = localStorage.getItem('ihumure-theme');
    
    if (savedLang) this.currentLang = savedLang as 'rw' | 'en';
    if (savedTheme) this.currentTheme = savedTheme as 'light' | 'dark';
  }

  getCurrentStatLabel(key: string): string {
    return this.translations[this.currentLang].statLabels[key as keyof typeof this.translations.rw.statLabels];
  }

  getCurrentGroups() {
    return this.translations[this.currentLang].groups;
  }

  getCurrentGuidelines() {
    return this.translations[this.currentLang].guidelines;
  }

  getCurrentTestimonials() {
    return this.translations[this.currentLang].testimonials;
  }

  joinGroup(groupId: number): void {
    console.log('Joining group:', groupId);
    this.router.navigate(['/signup']);
  }

  onJoinCommunity(): void {
    this.router.navigate(['/signup']);
  }
}