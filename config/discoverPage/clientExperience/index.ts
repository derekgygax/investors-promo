import { CLIENT_EVALUATION } from "./ClientEvaluation";
import { ACCOUNT_OPENING } from "./AccountOpening";
import { PORTFOLIO_DEVELOPMENT } from './PortfolioDevelopment';
import { PERFORMANCE_REPORTING } from './PerformanceReporting';

export const CLIENT_EXPERIENCE_CONFIG = {
  id: 'client-experience',
  header: {
    id: 'client-experience',
    title: {
      es: 'Experiencia del Cliente',
      en: 'Client Experience'
    },
    descriptions: [],
  },
  info: [
    CLIENT_EVALUATION,
    ACCOUNT_OPENING,
    PORTFOLIO_DEVELOPMENT,
    PERFORMANCE_REPORTING
  ]
};