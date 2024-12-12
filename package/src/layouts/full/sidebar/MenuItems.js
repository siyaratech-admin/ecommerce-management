import {
  IconAperture, IconCopy, IconLayoutDashboard, IconLogin, IconMoodHappy, IconTypography, IconUserPlus
} from '@tabler/icons-react';

import { uniqueId } from 'lodash';

const Menuitems = [
  {
    navlabel: true,
    subheader: 'Home',
  },

  {
    id: uniqueId(),
    title: 'Dashboard',
    icon: IconLayoutDashboard,
    href: '/dashboard',
  },
  {
    navlabel: true,
    subheader: 'MANAGE STORE',
  },
  {
    id: uniqueId(),
    title: 'Products ',
    icon: IconTypography,
    href: '/ui/products',
  },
  {
    id: uniqueId(),
    title: 'Orders ',
    icon: IconCopy,
    href: '/ui/orders  ',
  },
  {
    navlabel: true,
    subheader: 'Auth',
  },
  {
    id: uniqueId(),
    title: 'Login',
    icon: IconLogin,
    href: '/auth/login',
  },
  {
    id: uniqueId(),
    title: 'Register',
    icon: IconUserPlus,
    href: '/auth/register',
  },
  {
    navlabel: true,
    subheader: 'CUSTOMER MANAGEMENT',
  },
  {
    id: uniqueId(),
    title: 'Customers ',
    icon: IconMoodHappy,
    href: '/customers ',
  },
  {
    id: uniqueId(),
    title: 'Reviews',
    icon: IconAperture,
    href: '/reviews',
  },
];

export default Menuitems;
