import path from 'path';
import CopyPlugin from 'copy-webpack-plugin';
import webpack, { DefinePlugin } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import WebappWebpackPlugin from 'favicons-webpack-plugin';
//create css file per js file: https://webpack.kr/plugins/mini-css-extract-plugin/
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';

// config files
import { HOME_PAGE_CONFIG } from './config/homePage';
import { DISCOVER_PAGE_CONFIG } from './config/discoverPage';
import { WHY_EQUITIES_PRODUCTS_AND_SERVICES_ID } from './config/homePage/WhyEquities';
import { FOOTER_CONFIG } from './config/footer';
import { EMAIL_FORM_CONFIG } from './config/emailForm';
import { HEADER_CONFIG } from './config/header';
import { ASSETS_GRAPH_CONFIG } from './config/assetsGraph';

// TODO do you need something for minimized code for production

const isDevelopment = process.env.NODE_ENV !== 'production';

const title = `Promo Example, Inc.`;
const description = `Focused on delivering performance.`;
const image = 'https://www.promo.us/assets/thumbnail.png';

const CONFIG_TEXT = {
  ENV: JSON.stringify({
    appTitle: process.env.APP_WEB_TITLE || '57 West',
    appUrl: process.env.APP_WEB_URL || 'http://localhost:3000',
    nodeEnv: process.env.NODE_ENV || 'development'
  }),
  PAGES: JSON.stringify({
    HOME: 'home',
    ABOUT: 'about',
    DISCOVER: 'discover',
    ERROR: 'error'
  }),
  // This is a special one needed for styling
  WHY_EQUITIES_PRODUCTS_AND_SERVICES_ID: JSON.stringify(WHY_EQUITIES_PRODUCTS_AND_SERVICES_ID),
  HOME_PAGE: JSON.stringify(HOME_PAGE_CONFIG),
  DISCOVER_PAGE: JSON.stringify(DISCOVER_PAGE_CONFIG),
  FOOTER_CONFIG: JSON.stringify(FOOTER_CONFIG),
  EMAIL_FORM_CONFIG: JSON.stringify(EMAIL_FORM_CONFIG),
  HEADER_CONFIG: JSON.stringify(HEADER_CONFIG),
  ASSETS_GRAPH_CONFIG: JSON.stringify(ASSETS_GRAPH_CONFIG),
  // TODO Need the spanish for the blank pieces
  CALL_TO_ACTION: JSON.stringify({
    es: 'Contáctenos para una presentación detallada de nuestros servicios, rendimientos, y una consulta de portafolio gratuita.',
    en: 'Reach out for a detailed presentation of our services, performance, and a free portfolio consultation.'
  }),
  TELEPHONE_NUMBER: JSON.stringify('833-457-5757'),
  FOOTER_SLOGAN: JSON.stringify({
    es: 'Enfocados en Proporcionar Rendimientos.',
    en: 'Focused on Delivering Performance.'
  }),
  PAGE_LABELS: JSON.stringify({
    HOME: {
      en: 'Home',
      es: 'Inicio',
    },
    ABOUT: {
      en: 'About Us',
      es: 'Quiénes Somos',
    },
    DISCOVER: {
      en: 'Discover',
      es: 'Descubrir',
    },
    ERROR: {
      en: 'Error',
      es: 'Error',
    }
  }),
};

const plugins: webpack.WebpackPluginInstance[] = [
  new CopyPlugin({
    patterns: [
    { from: 'src/assets', to: 'assets' },
  ]}),
  new HtmlWebpackPlugin({
    meta: {
      description,
      'og:title': title,
      'og:site_name': title,
      'og:description': description,
      'og:image': image,
      'og:image:secure_image': image,
      'og:url': 'https://promo.us',
      'twitter:card': 'summary_large_image',
      'twitter:image': image,
      'og:type': 'website',
      viewport: 'width=device-width, initial-scale=1.0'
    },
    template: './public/index.html',
    title: `promo`
  }),
  new WebappWebpackPlugin('./src/assets/promo-icon.png'),
  new DefinePlugin(CONFIG_TEXT)
];

isDevelopment
  ? plugins.push(new ReactRefreshWebpackPlugin())
  : plugins.push(new MiniCssExtractPlugin());

module.exports = async () => {
  return {
    mode: isDevelopment ? 'development' : 'production',
    entry: './src/index.tsx',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
      // more configurations: https://webpack.js.org/configuration/
    },
    devServer: {
      // TODO DO YOU NEED THIS???!!
      // satic: ['assets'],  // do you need this!
      historyApiFallback: true,
      hot: true,
      port: Number((process.env.APP_WEB_URL || 'http://localhost:3000').split(':').slice(-1)[0]),
    },
    // TODO DO YOU NEED THIS!!??
    devtool: 'source-map',
    plugins,
    resolve: {
      modules: [path.resolve(__dirname, './src'), 'node_modules'],
      // automatically resolve certain extensions (Ex. import './file' will automatically look for file.js)
      extensions: ['.ts', '.tsx', '.js', '.jsx', '.scss', '.css'],
      alias: {
        '@assets': path.resolve(__dirname, 'src/assets/'),
        '@components': path.resolve(__dirname, 'src/components/'),
        '@contexts': path.resolve(__dirname, 'src/contexts/'),
        '@layout': path.resolve(__dirname, 'src/layout/'),
        '@pages': path.resolve(__dirname, 'src/pages/'),
        '@templates': path.resolve(__dirname, 'src/templates/')
      }
    },
    module: {
      rules: [
        {
          test: /\.html$/,
          use: ['html-loader'],
        },
        {
          test: /\.(js|jsx|ts|tsx)$/,
          exclude: /node_modules/,
          use: [
            {
              loader: require.resolve('babel-loader'),
              options: {
                plugins: [
                  isDevelopment && require.resolve('react-refresh/babel'),
                ].filter(Boolean),
              },
            },
          ],
        },
        {
          test: /\.(sa|sc|c)ss$/i, // .sass or .scss
          use: [
            // Creates `style` nodes from JS strings
            'style-loader',
            // Translates CSS into CommonJS
            {
              loader: 'css-loader',
              options: {
                modules: {
                  localIdentName: '[name]__[local]__[hash:base64:5]',
                }
              }
            },
            // for Tailwind CSS
            'postcss-loader',
            // Compiles Sass to CSS
            'sass-loader',
          ],
        },
        {
          test: /\.(png|jpeg|jpg|pdf|svg)$/,
          type: 'asset/resource',
        },
        {
          test: /\.js$/, 
          enforce: 'pre', 
          use: [
            {
              loader: 'source-map-loader'
            }
          ] 
        }
      ],
    }
  };
};
