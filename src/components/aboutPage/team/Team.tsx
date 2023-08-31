import React, { 
  useContext 
} from 'react';

// components
// import { Button } from '../button/Button';
import { Container } from '@layout/container/Container';
import { TeamTile } from './teamTile/TeamTile';

// contexts
import { LanguageContext } from '@contexts/language';

// styles
import styles from './Team.module';

export const Team: React.FC = () => {
  const { language } = useContext(LanguageContext);

  const teamMembers = [
    {
      imageUrl: '/assets/about/team/juan.jpg',
      name: 'Juan Gabriel Garcés',
      title: 'CEO',
      titleEs: 'Presidente',
      text: 'Current CEO and Founder of Promo Example, Inc. with 45 years of experience in the investment services industry.',
      textEs: 'Fundador de Promo Example, Inc. con 45 años de experiencia en el sector de los servicios de inversión.',
      textMore: <div>
          <p>In 1977, he founded J.G. Garcés & Co., an investment services company that grew to become Colombia’s largest Broker-Dealer. He also co-founded and served as vice president of the board of directors of a stock exchange (Bolsa de Occidente), founded a US Broker-Dealer (Investors Street), and founded a Colombian investment bank (Tecnoinversiones S.A.).</p>
          <p>He was also instrumental in modernizing the securities market in Colombia by participating in the creation of the country’s first securities depository, working to liberate commission structures, and creating an electronic trading system.</p>
          <p>In 1999, he founded Promo Example, Inc. a Registered Investment Advisory firm specializing in equity portfolio management, equity investments, and business consulting services. He is currently responsible for managing and developing the firm's investment strategy.</p>
        </div>,
      textMoreEs: <div>
          <p>En 1977, fundó J.G. Garcés & Co., una empresa de servicios de inversión, que creció hasta convertirse en la firma corredora de bolsa más grande de Colombia. Fue cofundador y vicepresidente de la junta directiva de una bolsa de valores (Bolsa de Occidente), fundó un corredor de bolsa estadounidense (Investors Street) y fundó un banco de inversión colombiano (Tecnoinversiones S.A.). También tuvo un papel decisivo en la modernización del mercado de valores en Colombia, al crear el primer depósito de valores del país y un sistema de negociación electrónica, y al participar en la liberación de las estructuras de comisiones.</p>
          <p>En 1999, fundó Promo Example, Inc., una empresa de asesoramiento de inversiones registrada, especializada en gestión de carteras de acciones, inversiones de capital, y servicios de consultoría empresarial. Presentemente es responsable por gestar y desarrollar la estrategia de inversión de la firma.</p>
      </div>
    },
    {
      imageUrl: '/assets/about/team/sebastian.jpg',
      name: 'Sebastián Garcés',
      title: 'Chief Operating Officer',
      titleEs: 'Vicepresidente',
      text: 'Joined the company almost 10 years ago on a full-time basis but has been a part of the business since as early as 2005.',
      textEs: 'Se incorporó a Promo Example, Inc. de tiempo completo hace 10 años, habiendo formado parte del negocio desde 2005.',
      textMore: <div>
        <p>He currently serves as an Investment Advisor Representative, Research Analyst, and Director of Marketing. He graduated from Texas State University with a degree in Political Science with a concentration in International Business.</p>
        <p>Presently, Sebastian is leading a series of projects in the areas of technology optimization, digitization, and automation. The projects are aimed at improving efficiency, streamlining the company’s procedures, extending the reach and strengthening the impact of the investment methodology, and improving client management services. He also directs the company’s lead generation strategy and provides training for sales personnel.</p>
      </div>,
      textMoreEs: <div>
        <p>Trabaja como Representante de Asesores de Inversión, analista de investigación y director de mercadeo. Se graduó en Texas State University con Licenciatura en Ciencias Políticas con especialización en Negocios Internacionales.</p>
        <p>Sebastián dirige una serie de proyectos en las áreas de optimización tecnológica, digitalización y automatización. Los proyectos tienen como objetivo mejorar la eficiencia, agilizar los procedimientos de la empresa, ampliar el alcance y reforzar el impacto de la metodología de inversión, y mejorar los servicios de gestión de clientes. También dirige la estrategia de generación de clientes potenciales de la empresa e imparte formación al personal de ventas.</p>
      </div>
    },
    {
      imageUrl: '/assets/about/team/taylor.jpg',
      name: 'Taylor Tucker',
      title: 'Director of Operations',
      titleEs: 'Director de Operaciones',
      text: 'Taylor Tucker joined Promo Example as Director of Operations in 2017.',
      textEs: 'Se unió a Promo Example, Inc. en 2017 como director de operaciones.',
      textMore: <div>
        <p>He attended Texas State University in San Marcos, where he obtained a Bachelor of Finance. He began his career as a Financial Services Professional with a focus on personal, business, and estate planning through specialized investment products. Subsequently, he became an Investment Advisor Representative and Portfolio Manager to further his abilities and provide personalized service for his clients.</p>
      </div>,
      textMoreEs: <div>
        <p>Asistió a la Universidad Estatal de Texas en San Marcos, donde obtuvo una Licenciatura en Finanzas. Comenzó su carrera como profesional de servicios financieros con un enfoque en la planificación personal, empresarial y patrimonial a través de productos de inversión especializados. Posteriormente, se convirtió en un Representante de Asesoramiento de Inversiones y Gestor de Carteras para ampliar sus habilidades y proporcionar un servicio personalizado para sus clientes.</p>
      </div>
    },
    {
      imageUrl: '/assets/about/team/alyson_flores.jpg',
      name: 'Alyson Flores',
      title: 'Administrative Director',
      titleEs: 'Directora Administrativa',
      text: 'Born and raised in San Antonio, Texas, Alyson Flores graduated with a degree in Accounting from the University of Texas at San Antonio.',
      textEs: 'Nacida y criada en San Antonio, Texas, se graduó en Contabilidad en la Universidad de Texas en San Antonio.',
      textMore: <div>
        <p>She has a background in law and began her career at a small Accounting and Real Estate firm in her hometown. Eventually, she found her way to Austin, where she became the Administrative Director at our company.</p>
        <p>Her main objective as a professional, leader and person is to serve with the utmost respect, prioritizing the understanding of our clients' needs. We are delighted to have her onboard and look forward to all the ideas, improvements, and creativity we believe she will bring to multiple areas of our business.</p>
      </div>,
      textMoreEs: <div>
        <p>Comenzó su carrera en una pequeña empresa de contabilidad e inmobiliaria en su ciudad natal antes de convertirse en Directora Administrativa de Promo Example, Inc. Tuvo formación en derecho y Partió a Austin en el 2021, con el propósito de estar más cerca a sus hermanas y buscar más oportunidades en su campo profesional. </p>
        <p>Su principal objetivo como profesional, líder y persona es atender con máximo respeto, priorizando la comprensión de las necesidades de nuestros clientes. Estamos encantados de tenerla abordo y esperamos todas las ideas, mejoras y creatividad que creemos que aportará a múltiples áreas de nuestro negocio.</p>
      </div>
    },
    {
      imageUrl: '/assets/about/team/ford_anderson.jpg',
      name: 'Ford Anderson',
      title: 'Investment Advisor Representative',
      titleEs: 'Representante Asesor de Inversiones',
      text: 'Born and raised in Houston, Texas, he was one of the youngest Eagle Scouts in one of the oldest Boy Scout Troops in Houston and the country.',
      textEs: 'Nació y se crio en Houston, Texas, y se graduó con honores en la Universidad de Schreiner en 2018 con una licenciatura en Finanzas.',
      textMore: <div>
        <p>He graduated with honors from Schreiner University in 2018 with an undergraduate degree in Finance and graduated with honors from St. Edwards University at the Bill Munday School of Business MBA program.</p>
        <p>Growing up in a big city had a profound impact on Ford and exposed him to different cultures and people from an early age. Being a Texan formed him into a person who loves the outdoors, hunting, fishing, kayaking, and hiking. I am an avid cook and eater and have a white lab named CeCe.</p>
      </div>,
      textMoreEs: <div>
        <p>Graduándose con honores en la Universidad de St. Edwards en el programa de MBA de la Escuela de Negocios Bill Munday, también fue uno de los Eagles Scouts más jóvenes en una de las tropas de Boy Scouts más antiguas del país.</p>
        <p>Crecer en una ciudad grande tuvo un profundo impacto su vida y lo expuso a diferentes culturas y personas desde una temprana edad. Ser Tejano lo ha convertido en una persona con gustos como estar al aire libre, la caza, la pesca, el kayak y el senderismo.</p>
      </div>
    },
    {
      imageUrl: '/assets/about/team/sebastian_caicedo.jpg',
      name: 'Sebastian Caicedo',
      title: 'Research & Technology',
      titleEs: 'Analista de Investigación y Desarrollo',
      text: 'Relocated from South America to Austin in January 2022 to work as a Research Analyst and Investment Advisor Representative.',
      textEs: 'Se trasladó de Sudamérica a Austin en enero de 2022 para trabajar como analista de investigación y Representante del Asesor de Inversión.',
      textMore: <div>
        <p>He has a degree in Industrial Engineering, but over the years took an interest in finance and company analysis. He has over five years of experience in developing and managing strategic business plans for real estate development projects while prioritizing social transformation and innovation. Furthermore, he became an Investment Advisor Representative to provide a more complete service to our clients and work to help them achieve their desired financial goals.</p>
      </div>,
      textMoreEs: <div>
        <p>Es licenciado en Ingeniería Industrial, pero con los años se interesó por las finanzas y el análisis de empresas. Tiene más de cinco años de experiencia en el desarrollo y la gestión de planes de negocio estratégicos para proyectos de desarrollo inmobiliario, priorizando la transformación social y la innovación. Además, se convirtió en Representante del Asesor de Inversión en el 2022 para ofrecer un servicio más completo a nuestros clientes y trabajar para ayudarles a alcanzar sus objetivos financieros.</p>
      </div>
    },
    
  ]

  return (
    <div className={styles.main}>
      <Container className={styles.container}>
        <div className={styles.textContainer}>
          <div>
            <div className={styles.header}>
              {language === 'es' ? 'Nuestro Equipo' : 'Our Team'}
            </div>
          </div>
          <div className={styles.bar} />
        </div>
        <div className={styles.benefitsContainer}>
          {teamMembers.map((member, index) => {
            return (
              <TeamTile
                key={`${index}_${member.name}`}
                text={member.text}
                textEs={member.textEs}
                textMore={member.textMore}
                textMoreEs={member.textMoreEs}
                name={member.name}
                title={member.title}
                titleEs={member.titleEs}
                imageUrl={member.imageUrl}
              />
            )
          })}
        </div>
      </Container>
    </div>
  );
};

