import React from 'react';
import { useContext } from 'react';

// components
import { Button } from '@components/button/Button';
import { Container } from '@layout/container/Container';
import { LinkBanner } from '../linkBanner/LinkBanner';

// contexts
import { LanguageContext } from '@contexts/language';

// styles
import styles from './HistoryAndIdentity.module';

export const HistoryAndIdentity: React.FC = () => {
  const { language } = useContext(LanguageContext);

  return (
    <div className={styles.main}>
      <Container className={styles.container}>
        <LinkBanner
          parentCategory='OurProcessHeaderRefactor'
          linkTypes={[
            'faq',
            'why_equities',
            'contact_us'
          ]}
        />
        <div className={styles.history}>
          <h1>
            { language === 'es'
              ? 'Nuestra empresa se fundó en 1999 en Austin, Texas con un objetivo: Identificar oportunidades de inversión extraordinarias para nuestros clientes.'
              : 'Our company was founded in 1999 in Austin, Texas, with one goal in mind: to identify extraordinary investment opportunities.'
            }
          </h1>
        </div>
        <div className={styles.aboutContainer}>
          <div className={styles.aboutImage} />
            <div className={styles.aboutDescription}>
              <div>
                <span className={styles.spanSmall}>
                  {language === 'es'
                    ? "Somos una empresa de asesoría en inversiones registrada. Nuestro equipo de fiduciarios trabaja exclusivamente para usted con base en honorarios sin comisiones por venta de productos. Nuestro servicio de gestión activo de carteras está disponible a nivel nacional e internacional para: Particulares, profesionales independientes e inversionistas institucionales."
                    : "We are a Registered Investment Advisory firm in Austin, Texas. Our team of fiduciaries works exclusively for you on a fee-only basis and doesn't earn commissions for selling products. Our actively managed equity portfolios are available domestically and internationally to individuals, independent professionals, and institutional investors."
                  } 
                </span>
              </div>
              <div className={styles.buttonContainer}>
                <Button
                  type='link'
                  className={styles.button}
                  style="dark"
                  to={language === 'es'
                    ? '/es/discover/client-experience'
                    : '/discover/client-experience'
                  }
                  onClick={() => {
                    return {};
                  }}
                >
                  {language === 'es'
                    ? 'Vea nuestros servicios'
                    : 'See Our Services'
                  }
                </Button>
              </div>
            </div>
        </div>
      </Container>
    </div >
  );
};

