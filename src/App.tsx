import React from 'react';
import {
  Route,
  BrowserRouter as Router,
  Routes,
  Navigate
} from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

// components
import { ScrollToTop } from './components/scrollToTop/ScrollToTop';

// contexts
import { LanguageContextProvider } from './contexts/language';
import { LinearViewContextProvider } from './contexts/linearView';

// pages
import { AboutPage } from '@pages/about/AboutPage';
import { DiscoverPage } from '@pages/discover/DiscoverPage';
import { ErrorPage } from '@pages/error/ErrorPage';
import { HomePage } from '@pages/home/HomePage';
// import { OldHomePage } from '@pages/OLDhome/OldHomePage';

// templates
import { MainTemplate } from '@templates/main/MainTemplate';

// types
import { AppProvidersProps } from './types/appProviders';

// styles
import './App.module';

export const App: React.FC = () => {
  return (
    <>
      <Router>
        <ScrollToTop/>
        <MainTemplate>
          <Helmet titleTemplate={`%s | ${ENV.appTitle}`} />
          <Routes>
            <Route  path="/" element={<HomePage />}/>
            <Route  path="/es" element={<HomePage />}/>

            <Route path="/" element={<HomePage />} />
            <Route path="/es" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/es/about" element={<AboutPage />} />
            <Route path="/discover" element={<Navigate to={`/discover/${DISCOVER_PAGE.CATEGORY_DEFAULT}`} replace />} />
            <Route path="/es/discover" element={<Navigate to={`/es/discover/${DISCOVER_PAGE.CATEGORY_DEFAULT}`} replace />} />
            <Route path="/discover/:discoverCategory" element={<DiscoverPage />} />
            <Route path="/es/discover/:discoverCategory" element={<DiscoverPage />} />
            <Route path="/error" element={<ErrorPage />} />
            <Route path="/es/error" element={<ErrorPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </MainTemplate>
      </Router>
    </>
  );
};

export const AppProviders: React.FC<AppProvidersProps> = ({ children }) => (
  <LanguageContextProvider>
    <LinearViewContextProvider>
      {children}
    </LinearViewContextProvider>
  </LanguageContextProvider>
);
