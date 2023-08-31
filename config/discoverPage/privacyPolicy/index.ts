import { INTELLECTUAL_PROPERTY } from "./IntellecutalProperty";
import { JURISDICTION_AND_GOVERNING_LAW } from "./JurisdictionAndGoverningLaw";
import { LIMITATION_OF_LIABILITY } from "./LimitationOfLiability";
import { LIMITED_PURPOSE_WEBSITE } from "./LimitedPurposeWebsite";
import { SERVABILITY_CLAUSE } from "./ServabilityClause";
import { LINKED_WEBSITES } from "./LinkedWebsites";

export const PRIVACY_POLICY_CONFIG = {
  id: 'privacy-policy',
  header: {
    id: 'privacy-policy',
    title: {
      es: 'Políticas de Privacidad',
      en: 'Privacy Policy'
    },
    descriptions: [
      {
        es: 'Por favor, lea los siguientes términos y condiciones relativos a su acceso al sitio web de Promo Example, Inc. Al acceder a este sitio web, usted está obligado a cumplir con los términos aquí contenidos. Los términos de esta exención de responsabilidad están sujetos a cambios, por lo que debe comprobar los términos y condiciones si se ha realizado algún cambio. Si accede a este sitio después de que se hayan efectuado cambios, constituirá una aceptación de los términos y condiciones modificados. Si no está de acuerdo con los términos y condiciones aquí expresados, no acceda a este sitio web.',
        en: 'Please read the following terms and conditions regarding your access to the Promo Example, Inc. website. By accessing this Website, you are now bound to the terms contained herein. Terms in this disclaimer are subject to change, so check the terms and conditions if any changes have been made. If you access this site after changes have been made, it shall constitute an acceptance of the terms and conditions as changed. If you do not agree to the terms and conditions expressed herein, please do not access this Website.'
      }
    ]
  },
  info: [
    LINKED_WEBSITES,
    LIMITED_PURPOSE_WEBSITE,
    INTELLECTUAL_PROPERTY,
    LIMITATION_OF_LIABILITY,
    JURISDICTION_AND_GOVERNING_LAW,
    SERVABILITY_CLAUSE
  ]
}
