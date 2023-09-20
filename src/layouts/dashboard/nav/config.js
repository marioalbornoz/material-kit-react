// component
import SvgColor from '../../../components/svg-color';
// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.png`} sx={{ width: 1, height: 1 }} />;

const navConfig = [
  {
    title: 'dashboard',
    path: '/dashboard/app',
    icon: icon('dash'),
  },{
    title: 'jaulas',
    path: '/dashboard/jaulas',
    icon: icon('cages'),
  },
  {
    title: 'user',
    path: '/dashboard/user',
    icon: icon('user'),
  },
  {
    title: 'store',
    path: '/dashboard/products',
    icon: icon('store'),
  },
  {
    title: 'Orders',
    path: '/dashboard/blog',
    icon: icon('union'),
  },
  {
    title: 'login',
    path: '/login',
    icon: icon('ic_lock'),
  },
  {
    title: 'Not found',
    path: '/404',
    icon: icon('ic_disabled'),
  },
];

export default navConfig;
