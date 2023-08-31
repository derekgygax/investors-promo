import { PRODUCTS_AND_SERVICES } from './ProductsAndServices';
import { EFFICIENCY_AND_INNOVATION } from './EfficiencyAndInnovation';
import { EXPANSION_AND_ACQUISITION } from './ExpansionAndAcquisition';
import { SHARE_REPURCHASES } from './ShareRepurchases';

export const WHY_EQUITIES_CONFIG = {
  id: 'why-equities',
  header: {
    id: 'why-equities',
    title: {
      es: '¿Por qué acciones?',
      en: 'Why Equities?'
    },
    descriptions: [],
  },
  info: [
    PRODUCTS_AND_SERVICES,
    EFFICIENCY_AND_INNOVATION,
    EXPANSION_AND_ACQUISITION,
    SHARE_REPURCHASES
  ]
};