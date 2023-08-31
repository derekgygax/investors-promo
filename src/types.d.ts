declare module 'd3';
declare module 'favicons-webpack-plugin';
declare module 'gtag';
declare module 'highcharts';
declare const gtag: Function;

type LanguageVariation = {
  es: string;
  en: string;
}

type Meta = {
  name: string;
  content: string;
}

type Helmet = {
  title: LanguageVariation;
  meta: Meta[];
}

type HeroInfo = {
  description: LanguageVariation;
  headers: LanguageVariation[];
}

type Hero = {
  info: HeroInfo;
  mobileInfo: HeroInfo;
  id: string;
}

type Slogan = LanguageVariation;

// Discover Page
type DiscoverMenuLinks = {
  url: LanguageVariation;
  label: LanguageVariation;
  id: string;
}

type DiscoverImage = {
  name: string;
  altText: string;
  descriptions: LanguageVariation[];
}

type DescriptionLink = {
  label: LanguageVariation,
  url: string;
}

type DescriptionFAQ = {
  id: string;
  question: LanguageVariation,
  answer: LanguageVariation;
  showEmail: {
    text: LanguageVariation;
  }
}

type DiscoverTopicInfo = {
  id: string;
  title: LanguageVariation;
  label?: LanguageVariation;
  image?: DiscoverImage;
  descriptions: LanguageVariation[];
  descriptionLinks?: DescriptionLink[];
  questions?: DescriptionFAQ[];
}

type DiscoverTopic = {
  id: string;
  header: DiscoverTopicInfo;
  info: DiscoverTopicInfo[];
}

interface DISCOVER_PAGE_DATA {
  [key: string]: DiscoverTopic;
};

declare const DISCOVER_PAGE: {
  DATA: DISCOVER_PAGE_DATA;
  MENU_LINKS: DiscoverMenuLinks[];
  CATEGORY_DEFAULT: string;
};

// types that will be used for many globals
type TopicDetailsLink = {
  url: LanguageVariation,
  label: LanguageVariation
};

type TopicInfo = {
  header?: LanguageVariation;
  title: LanguageVariation[];
  description: LanguageVariation[];
  detailsLink?: TopicDetailsLink;
};

type TopicData = {
  id?: string;
  imageUrl: string;
  label: LanguageVariation;
  text: LanguageVariation;
};

type Topic = {
  id: string;
  info: TopicInfo;
  mobileInfo: TopicInfo;
  data: TopicData[];
};

type TopicNoData = {
  id: string;
  info: TopicInfo;
  mobileInfo: TopicInfo,
}

type FooterLink = {
  url: LanguageVariation;
  label: LanguageVariation;
  pageName?: string;
  download: boolean;
}

type SocialMediaIcon = {
  id: string;
  href: string;
  iconName: string;
}

type FooterInformation = {
  slogan: LanguageVariation;
  leftLinks: FooterLink[];
  rightLinks: FooterLink[];
  socialMedia: SocialMediaIcon[];
  callUsWords: LanguageVariation;
}

type FooterCallToAction = {
  invitation: LanguageVariation;
  buttonText: LanguageVariation;
}

declare const FOOTER_CONFIG: {
  info: FooterInfo;
  callToActionInfo: FooterCallToAtion;
}

type EmailFormInput = {
  name: LanguageVariation;
  email: LanguageVariation;
  message: LanguageVariation;
}

declare const EMAIL_FORM_CONFIG: {
  labels: EmailFormInput,
  placeHolders: EmailFormInput;
  loading: LanguageVariation;
  thankyou: LanguageVariation;
}

type NavItem = {
  id: string;
  name: LanguageVariation;
  label: LanguageVariation;
  url: LanguageVariation;
}

type MENU_CONFIG = {
  navItems: NavItem[];
  canSwitchToSpanish: boolean;
}

declare const HEADER_CONFIG: {
  menu: MENU_CONFIG;
}

declare Topic;
declare TopicNoData;
declare TopicInfo;
declare TopicData;

type AssetsGraphSeries = {
  id: string;
  type: string;
  name: LanguageVariation;
  data: string;
  color: string;
  hoverData: {
    name: LanguageVariation;
    valIncrease: number;
    text: LanguageVariation;
    mouseOverColor: string;
    mouseOutColor: string;
  }
}

type AssetsGraphChart = {
  height: string;
  backgroundColor: string;
  style: {
    color: string;
  }
}

type AssetsGraphSources = {
  sourcesLabel: LanguageVariation;
  description: LanguageVariation;
  link: {
    label: LanguageVariation;
    url: LanguageVariation;
  }
}

interface AssetsGraphData {
  [key: string]: AssetsGraphSeries;
};

declare const ASSETS_GRAPH_CONFIG: {
  chart: {
    linear: AssetsGraphChart;
    logarithmic: AssetsGraphChart;
  };
  datesString: string;
  seriesData: AssetsGraphData;
  seriesIds: string[];
  sources: AssetsGraphSources;
}

// declare is what makes it global
declare const LANGUAGES: {
  ENGLISH: string;
  ESPANOL: string;
}

declare const PAGES: {
  HOME: string;
  ABOUT: string;
  DISCOVER: string;
  ERROR: string;
};

declare const PAGE_LABELS: {
  HOME: LanguageVariation;
  ABOUT: LanguageVariation;
  DISCOVER: LanguageVariation;
  ERROR: LanguageVariation;
}

// Can you use the type about variable language you created???
// The topic information for sections
declare const HOME_PAGE : {
  HELMET: Helmet;
  HERO: Hero;
  ABOUT_US: Topic;
  ABOUT_YOU: Topic;
  RETIREMENT_SLOGAN: Slogan;
  WHY_EQUITIES: Topic;
  GROWTH: Topic;
  PERFORMANCE_SLOGAN: Slogan;
  OUR_PROCESS: Topic;
  RESEARCH: Topic;
}

declare const CALL_TO_ACTION: LanguageVariation;

declare const TELEPHONE_NUMBER: string;
declare const FOOTER_SLOGAN: LanguageVariation;

declare interface IEnv {
  appTitle: string;
  appUrl: string;
  nodeEnv: string;
}

declare const ENV: IEnv;

// This is a special one needed for styling
// It's also in the webpack
declare const WHY_EQUITIES_PRODUCTS_AND_SERVICES_ID: string;