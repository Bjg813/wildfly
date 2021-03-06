import Typography from 'typography';

const config = require('../../config/SiteConfig');

const typography = new Typography({
  title: 'Wild Fly',
  baseFontSize: config.baseFontSize,
  baseLineHeight: 1.5,
  headerFontFamily: [config.headerFontFamily, 'lato'],
  bodyFontFamily: [config.bodyFontFamily, 'lato'],
  scaleRatio: 2.5,
  headerWeight: 700,
  googleFonts: [
    {
      name: config.headerFontFamily,
      styles: ['700'],
    },
    {
      name: config.bodyFontFamily,
      styles: ['400'],
    },
  ],
});

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles();
}

export default typography;
