export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: 'Karasu Lab API Documentation',
  description:
    'This is the API documentation for the Karasu Lab project. It is a RESTful API that is used to manage the Karasu Lab project.',
  mainNav: [
    {
      title: 'Home',
      href: '/',
    },
    {
      title: 'Doc',
      href: '/api-doc/index.html',
    },
  ],
  links: {
    twitter: 'https://twitter.com/Columba_Karasu',
    github: 'https://github.com/Hashibutogarasu/',
    docs: 'https://karasu-lab-api.vercel.app/api-doc',
  },
};
