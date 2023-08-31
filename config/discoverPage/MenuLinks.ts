import { CLIENT_EXPERIENCE_CONFIG } from './clientExperience';
import { DISCLOSURES_CONFIG } from './discolsures';
import { PRIVACY_POLICY_CONFIG } from './privacyPolicy';
import { OUR_PROCESS_CONFIG } from './ourProcess';
import { WHY_EQUITIES_CONFIG } from './whyEquities';
import { FAQ_CONFIG } from './faq';
import { RETIREMENT_CALCULATOR_INFO_CONFIG } from './retirementCalculatorInfo';

const sections = [
  CLIENT_EXPERIENCE_CONFIG,
  WHY_EQUITIES_CONFIG,
  OUR_PROCESS_CONFIG,
  FAQ_CONFIG,
  RETIREMENT_CALCULATOR_INFO_CONFIG,
  DISCLOSURES_CONFIG,
  PRIVACY_POLICY_CONFIG,
];

export const MENU_LINKS = sections.map((section) => {
  return {
    id: section.id,
    url: {
      es: `/es/discover/${section.id}`,
      en: `/discover/${section.id}`,
    },
    label: section.header.title,
  };
});
