export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: 'Karasu Lab',
  description:
    'This is a site for Karasu Lab, a place for learning and sharing knowledge.',
  mainNav: [
    {
      title: 'Home',
      href: '/',
    },
    {
      title: 'Blog',
      href: '/blog',
    },
    {
      title: 'API Docs',
      href: 'https://api.karasu256.com/swagger',
    },
    {
      title: 'Service Status',
      href: 'https://karasu-lab.statuspage.io/',
    }
  ],
  links: {
    twitter: 'https://twitter.com/Columba_Karasu',
    github: 'https://github.com/Hashibutogarasu/',
    docs: 'https://api.karasu256.com/swagger',
  },
};
