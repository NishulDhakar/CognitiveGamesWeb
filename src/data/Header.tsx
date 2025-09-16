export interface NavItem {
  label: string;
  href: string;
}

export const navbarConfig = {
  logo: {
    src: '/og-logo.png',
    width: 70,
    height: 70,
  },
  navItems: [
        {
      label: 'Check Video',
      href: 'https://www.linkedin.com/feed/update/urn:li:activity:7368774982589394945'
    },
    {
      label: 'Blog',
      href: '/capgemini-cognitive-ability-games',
    },
    {
      label: 'Games',
      href: '/capgemini-games',
    },

       {
      label: 'Leaderboard',
      href: '/Leaderboard',
    },
    //          {
    //   label: 'Feedback',
    //   href: '/feedback',
    // },
         {
      label: 'Contact',
      href: '/contact',
    },
  ] as NavItem[],
};