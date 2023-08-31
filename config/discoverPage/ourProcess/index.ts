import { PORTFOLIO_EXECUTION } from './PortfolioExecution';
import { REGIONS_AND_INDUSTRIES } from './RegionsAndIndustries';
import { SELECTION_AND_ANALYSIS } from './SelectionAndAnalysis';
import { TRACKING_AND_PERFORMANCE } from './TrackingPerformance'

export const OUR_PROCESS_CONFIG = {
  id: 'our-process',
  header: {
    id: 'our-process',
    title: {
      es: 'Nuestro Proceso',
      en: 'Our Process'
    },
    descriptions: [],
  },
  info: [
    REGIONS_AND_INDUSTRIES,
    SELECTION_AND_ANALYSIS,
    PORTFOLIO_EXECUTION,
    TRACKING_AND_PERFORMANCE
  ]
};