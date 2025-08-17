export interface NavItem {
  label: string;
  href: string;
}

export const navbarConfig = {
  logo: {
    src: '/logo.png',
    alt: 'Blync',
    width: 70,
    height: 70,
  },
  navItems: [
    // {
    //   label: 'Home',
    //   href: '/',
    // },
    // {
    //   label: 'Games',
    //   href: '/games',
    // },
    //  {
    //   label: 'Contact',
    //   href: 'https://www.nishul.dev/',
    // },
  ] as NavItem[],
};