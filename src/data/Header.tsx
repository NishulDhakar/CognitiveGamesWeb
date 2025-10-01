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
         {
      label: 'Contact',
      href: '/contact',
    },
  ] as NavItem[],
};