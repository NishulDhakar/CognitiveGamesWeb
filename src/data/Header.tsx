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
      href: '/capgemini-game',
    },
    {
      label: 'Games',
      href: '/capgemini-games',
    },
     {
      label: 'Contact',
      href: '/contact',
    },
       {
      label: 'Leaderboard',
      href: '/Leaderboard',
    },
  ] as NavItem[],
};