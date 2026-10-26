/**
 * AIC MUN 2026 — Official Central Conference Configuration
 * 
 * Edit this single file to update conference dates, registration links,
 * committees, schedule details, secretariat information, and contact channels.
 * No UI components need to be modified when updating conference data.
 */

export interface Committee {
  id: string;
  name: string;
  shortName: string;
  category: 'General Assembly' | 'Specialized Agency' | 'Regional Body' | 'Crisis Committee' | 'International Press' | string;
  difficulty: 'Beginner Friendly' | 'Intermediate' | 'Advanced' | 'All Experience Levels';
  agenda: string;
  description: string;
  guideUrl?: string;
  image?: string;
  matrixAvailable?: boolean;
}

export interface ScheduleSlot {
  time: string;
  title: string;
  description?: string;
  venue?: string;
  badge?: string;
}

export interface ScheduleDay {
  dayNumber: number;
  dateFormatted: string;
  dayOfWeek: string;
  theme?: string;
  isDetailedScheduleAnnounced: boolean;
  slots: ScheduleSlot[];
}

export interface SecretariatMember {
  id: string;
  name: string;
  role: string;
  division: string;
  bio?: string;
  image?: string;
  email?: string;
  linkedin?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: 'General' | 'Eligibility & Registration' | 'Preparation' | 'Rules & Conduct';
}

export interface ConferenceConfig {
  event: {
    name: string;
    brandMonogram: string;
    fullName: string;
    edition: string;
    dates: string;
    startDate: string; // ISO date string for countdown (Asia/Kolkata)
    endDate: string;
    year: string;
    tagline: string;
    theme: string;
    coreValues: string[];
    timezone: string;
    venue: {
      isAnnounced: boolean;
      name: string;
      city: string;
      country: string;
      address?: string;
      note: string;
    };
  };

  registration: {
    isOpen: boolean;
    statusText: string;
    externalUrl: string; // Google Form or Registration Portal URL when active
    notificationWebhookUrl?: string; // Optional: Web3Forms, Formspree, or Google Apps Script URL to receive emails
    earlyBirdDeadline: string;
    regularDeadline: string;
    delegateFee: string;
    delegationFee: string;
    internationalDelegateFee: string;
    contactEmail: string;
    notes: string[];
  };

  committees: {
    areAnnounced: boolean;
    announcementNotice: string;
    items: Committee[];
  };

  schedule: {
    isAnnounced: boolean;
    announcementNotice: string;
    days: ScheduleDay[];
  };

  secretariat: {
    isAnnounced: boolean;
    announcementNotice: string;
    members: SecretariatMember[];
  };

  whyParticipate: {
    title: string;
    subtitle: string;
    skills: {
      title: string;
      description: string;
      iconName: 'Shield' | 'Users' | 'Mic' | 'Brain' | 'Handshake' | 'Globe';
      tag: string;
    }[];
  };

  faqs: FaqItem[];

  contact: {
    email: string;
    supportNote: string;
    socials: {
      platform: string;
      handle: string;
      url: string;
      isLive: boolean;
    }[];
  };
}

export const conferenceConfig: ConferenceConfig = {
  event: {
    name: "AIC MUN",
    brandMonogram: "AIC",
    fullName: "AIC Model United Nations 2026",
    edition: "Inaugural Edition 2026",
    dates: "12th & 13th December 2026",
    startDate: "2026-12-12T09:00:00+05:30", // Asia/Kolkata timezone default 09:00 AM IST
    endDate: "2026-12-13T19:00:00+05:30",
    year: "2026",
    tagline: "Peace. Progress. Prosperity.",
    theme: "Diplomacy, International Relations, Global Leadership & Space-Inspired Elegance",
    coreValues: ["Peace", "Progress", "Prosperity"],
    timezone: "Asia/Kolkata (IST)",
    venue: {
      isAnnounced: false,
      name: "Official Venue to Be Announced",
      city: "Asia/Kolkata Zone",
      country: "International",
      note: "The conference venue is currently undergoing premier hospitality selection. Official location announcement will be published across all channels."
    }
  },

  registration: {
    isOpen: false, // Set to true once official Google Form / Registration portal link is ready
    statusText: "Registrations Opening Soon",
    externalUrl: "", // Paste Google Forms / Delegate Portal URL here
    notificationWebhookUrl: "", // Paste Web3Forms (https://api.web3forms.com/submit), Formspree, or Google Sheet endpoint here
    earlyBirdDeadline: "To Be Announced",
    regularDeadline: "To Be Announced",
    delegateFee: "To Be Announced",
    delegationFee: "To Be Announced",
    internationalDelegateFee: "To Be Announced",
    contactEmail: "registrations@aicmun.org",
    notes: [
      "Individual delegate applications and institutional school/college delegations will be accommodated.",
      "Executive Board applications and International Press Corps accreditations will open simultaneously.",
      "All registered delegates will receive verified certificates, comprehensive background guides, and conference kits."
    ]
  },

  committees: {
    areAnnounced: true, // Official committees announced
    announcementNotice: "The official committees for AIC MUN 2026 have been announced. Comprehensive study guides, committee agendas, and country matrices will be released shortly.",
    items: [
      {
        id: "unga",
        name: "United Nations General Assembly",
        shortName: "UNGA",
        category: "General Assembly",
        difficulty: "Beginner Friendly",
        agenda: "Agenda To Be Announced",
        description: "The primary policy-making organ of the United Nations, offering a multilateral platform where all member states convene to debate international security, cooperation, and global initiatives.",
        matrixAvailable: false
      },
      {
        id: "unhrc",
        name: "United Nations Human Rights Council",
        shortName: "UNHRC",
        category: "Specialized Agency",
        difficulty: "Intermediate",
        agenda: "Agenda To Be Announced",
        description: "Charged with strengthening the promotion and protection of human rights worldwide, addressing violations, and formulating actionable diplomatic resolutions for human dignity.",
        matrixAvailable: false
      },
      {
        id: "ecosoc",
        name: "United Nations Economic and Social Council",
        shortName: "ECOSOC",
        category: "Specialized Agency",
        difficulty: "Intermediate",
        agenda: "Agenda To Be Announced",
        description: "The premier UN forum for coordinating economic, social, environmental, and developmental policies, fostering multilateral solutions for global progress and sustainability.",
        matrixAvailable: false
      },
      {
        id: "aippm",
        name: "All India Political Parties Meet",
        shortName: "AIPPM",
        category: "Regional Body",
        difficulty: "Intermediate",
        agenda: "Agenda To Be Announced",
        description: "A dynamic simulation of India's parliamentary architecture and diverse political factions convening to debate national policy, governance reforms, and strategic domestic issues.",
        matrixAvailable: false
      },
      {
        id: "ip-journalism",
        name: "International Press — IP Journalism",
        shortName: "IP Journalism",
        category: "International Press",
        difficulty: "All Experience Levels",
        agenda: "Press Briefs & Investigative Reporting (Guidelines TBA)",
        description: "The journalistic vanguard of AIC MUN, responsible for interviewing ambassadors, publishing press bulletins, investigating bloc maneuvers, and delivering fair, unfiltered reporting.",
        matrixAvailable: false
      },
      {
        id: "ip-photography",
        name: "International Press — IP Photography",
        shortName: "IP Photography",
        category: "International Press",
        difficulty: "All Experience Levels",
        agenda: "Photojournalism Portfolio & Visual Media Coverage (Guidelines TBA)",
        description: "Visual storytellers tasked with capturing the raw emotion, intense debates, bilateral consultations, and iconic assembly moments across all conference chambers.",
        matrixAvailable: false
      },
      {
        id: "crisis-reich-cabinet-3",
        name: "Continuous Crisis Committee: Reich Cabinet 3",
        shortName: "Crisis Committee: Reich Cabinet 3",
        category: "Crisis Committee",
        difficulty: "Advanced",
        agenda: "Classified Crisis Directives (To Be Announced)",
        description: "A fast-paced, high-stakes historic continuous crisis committee navigating wartime cabinet deliberations, intelligence communiqués, covert directives, and turbulent geopolitical developments.",
        matrixAvailable: false
      }
    ]
  },

  schedule: {
    isAnnounced: false, // Toggle to true when session timings are confirmed
    announcementNotice: "The two-day conference itinerary across 12th & 13th December 2026 is currently structured. Detailed hour-by-hour session schedules will be released alongside the Delegate Handbook.",
    days: [
      {
        dayNumber: 1,
        dateFormatted: "12th December 2026",
        dayOfWeek: "Saturday",
        theme: "Inauguration, Diplomatic Caucuses & Policy Drafts",
        isDetailedScheduleAnnounced: false,
        slots: [
          {
            time: "Morning (TBA)",
            title: "Delegate Registration & Welcome Kit Distribution",
            description: "Credential verification, delegate seating, and distribution of official conference materials.",
            badge: "Arrival"
          },
          {
            time: "Morning (TBA)",
            title: "Opening Plenary Ceremony & Keynote Address",
            description: "Official inaugural address by the Secretariat and distinguished guest diplomats.",
            badge: "Plenary"
          },
          {
            time: "Midday (TBA)",
            title: "Committee Session I — Setting the Agenda",
            description: "Formal roll call, adoption of the agenda, opening speeches, and moderated caucuses.",
            badge: "Session"
          },
          {
            time: "Afternoon (TBA)",
            title: "Committee Session II — Bloc Formation & Working Papers",
            description: "Unmoderated debate, bilateral diplomacy, and formulation of preliminary working papers.",
            badge: "Session"
          },
          {
            time: "Evening (TBA)",
            title: "Day 1 Adjournment & Informal Delegate Mixer",
            description: "Review of Day 1 progress and informal networking among delegates and advisors.",
            badge: "Social"
          }
        ]
      },
      {
        dayNumber: 2,
        dateFormatted: "13th December 2026",
        dayOfWeek: "Sunday",
        theme: "Draft Resolutions, Amendments & Grand Closing Ceremony",
        isDetailedScheduleAnnounced: false,
        slots: [
          {
            time: "Morning (TBA)",
            title: "Committee Session III — Resolution Drafting & Amendments",
            description: "Introduction of draft resolutions, rigorous clause-by-clause review, and friendly amendments.",
            badge: "Session"
          },
          {
            time: "Midday (TBA)",
            title: "Committee Session IV — Substantive Voting Procedures",
            description: "Debate on amendments, closing statements by sponsors, and final voting on resolutions.",
            badge: "Voting"
          },
          {
            time: "Afternoon (TBA)",
            title: "Executive Board Feedback & Debrief",
            description: "Individual feedback from committee chairs and academic commendations.",
            badge: "Academic"
          },
          {
            time: "Evening (TBA)",
            title: "Closing Plenary & Awards Ceremony",
            description: "Presentation of Best Delegate, High Commendation, Special Mention, and Best Delegation trophies.",
            badge: "Awards"
          }
        ]
      }
    ]
  },

  secretariat: {
    isAnnounced: false, // Toggle to true when team members are ready to display
    announcementNotice: "The AIC MUN 2026 Executive Secretariat and Organizing Committee appointments are currently underway. Profiles of the Secretary-General and Directorate will be announced shortly.",
    members: [
      {
        id: "sg",
        name: "To Be Announced",
        role: "Secretary-General",
        division: "Executive Secretariat",
        bio: "Leading the strategic vision, diplomatic integrity, and overall administration of AIC MUN 2026."
      },
      {
        id: "dg",
        name: "To Be Announced",
        role: "Director-General",
        division: "Executive Secretariat",
        bio: "Overseeing conference logistics, delegate welfare, and institutional partnerships."
      },
      {
        id: "usg-acad",
        name: "To Be Announced",
        role: "USG Academic Affairs",
        division: "Academic Affairs",
        bio: "Directing committee research, background guides, and Executive Board allocations."
      },
      {
        id: "usg-del",
        name: "To Be Announced",
        role: "USG Delegate Affairs",
        division: "Delegate Relations",
        bio: "Assisting school delegations, individual delegates, and faculty advisors throughout registration."
      }
    ]
  },

  whyParticipate: {
    title: "Why Participate in AIC MUN?",
    subtitle: "A transcendent arena designed to cultivate the diplomats, strategists, and visionaries of tomorrow.",
    skills: [
      {
        title: "Diplomatic Acumen",
        description: "Master the subtle art of international diplomacy, multilateral negotiations, and sovereign consensus-building under global scrutiny.",
        iconName: "Shield",
        tag: "Diplomacy"
      },
      {
        title: "Executive Leadership",
        description: "Command committee rooms, build cross-regional alliances, and guide diverse delegations toward unified global resolutions.",
        iconName: "Users",
        tag: "Leadership"
      },
      {
        title: "Persuasive Oratory",
        description: "Deliver compelling opening statements, unmoderated defenses, and articulate diplomatic rhetoric that captivates assembly halls.",
        iconName: "Mic",
        tag: "Public Speaking"
      },
      {
        title: "Strategic Critical Thinking",
        description: "Deconstruct complex geopolitical conflicts, anticipate counter-motions, and craft resilient policy answers to multifaceted crises.",
        iconName: "Brain",
        tag: "Analysis"
      },
      {
        title: "High-Stakes Negotiation",
        description: "Bridge stark ideological divides through compromise, drafting nuanced treaties, and harmonizing divergent national interests.",
        iconName: "Handshake",
        tag: "Negotiation"
      },
      {
        title: "Global Geopolitical Awareness",
        description: "Immerse yourself in real-world international law, UN treaties, and the socio-economic forces shaping our interconnected planetary future.",
        iconName: "Globe",
        tag: "Global Outlook"
      }
    ]
  },

  faqs: [
    {
      category: "General",
      question: "What is Model United Nations (MUN)?",
      answer: "Model United Nations is an academic simulation of the United Nations where students step into the shoes of diplomats representing different countries. Delegates debate pressing international dilemmas, formulate foreign policy positions, negotiate with global allies, and draft comprehensive UN resolutions to resolve world challenges."
    },
    {
      category: "Eligibility & Registration",
      question: "Can first-time delegates and beginners participate in AIC MUN?",
      answer: "Absolutely. AIC MUN provides dedicated beginner-friendly committees with introductory rules-of-procedure guides and experienced Executive Board members who foster a supportive, intellectually stimulating environment for newcomers alongside seasoned delegates."
    },
    {
      category: "Eligibility & Registration",
      question: "Who is eligible to attend AIC MUN 2026?",
      answer: "AIC MUN welcomes high school students, college undergraduates, postgraduate scholars, and youth delegations passionate about international relations, public policy, law, and diplomacy. Institutional delegations and independent delegates are equally eligible."
    },
    {
      category: "Preparation",
      question: "How should I prepare for my assigned committee and country?",
      answer: "Each delegate will receive an official AIC MUN Background Guide providing in-depth analysis of the committee's agenda. Preparation involves studying your country's foreign policy, relevant UN conventions, past international actions, and drafting a formal Position Paper articulating your delegation's proposed solutions."
    },
    {
      category: "Preparation",
      question: "What happens during a typical committee session?",
      answer: "Committee sessions follow formal Rules of Procedure. The session begins with Roll Call, followed by setting the agenda. Delegates deliver speeches in a General Speakers List, engage in Moderated Caucuses on specific sub-issues, deliberate in Unmoderated Caucuses to write Working Papers, and culminate in voting on Draft Resolutions."
    },
    {
      category: "Rules & Conduct",
      question: "What is the official dress code for the conference?",
      answer: "The official conference dress code is Western Formal or Traditional Diplomatic Attire (e.g., suits, blazers with ties/cravats, formal trousers, formal shirts, sarees, or traditional national dress suitable for a formal international summit)."
    },
    {
      category: "Rules & Conduct",
      question: "Will delegates receive certificates and awards?",
      answer: "Yes. All participating delegates will receive official Certificates of Participation. In addition, outstanding delegates in each committee will be recognized with prestigious awards including Best Delegate, High Commendation, Special Mention, and Best Delegation trophies."
    },
    {
      category: "General",
      question: "When will registration details, fees, and the venue be announced?",
      answer: "Official announcements regarding the delegate registration portal, registration fee structure, payment methods, and hospitality venue are scheduled to be published soon. You can join the early-notification registry on this website to receive priority alerts."
    }
  ],

  contact: {
    email: "contact@aicmun.org",
    supportNote: "For institutional delegation queries, faculty advisor coordination, or partnership opportunities, please reach our organizing desk.",
    socials: [
      {
        platform: "Instagram",
        handle: "@aicmun (Official handle TBA)",
        url: "#",
        isLive: false
      },
      {
        platform: "LinkedIn",
        handle: "AIC Model United Nations (TBA)",
        url: "#",
        isLive: false
      },
      {
        platform: "X / Twitter",
        handle: "@AICMUN (TBA)",
        url: "#",
        isLive: false
      }
    ]
  }
};
