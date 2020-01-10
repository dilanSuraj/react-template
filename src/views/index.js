import Dashboard from './pages/Dashboard';
import Invoice from './pages/Invoice';
import CmsPage from './pages/Cms';
import ErrorPage from './pages/404';
import ViewPage from './pages/driver/View'
import BlankPage from './pages/BlankPage'

// See React Router documentation for details: https://reacttraining.com/react-router/web/api/Route
const pageList = [
  {
    name: 'Dashboard',
    path: '/home',
    component: Dashboard,
  },
  {
    name: '404',
    path: '/pages/404',
    component: ErrorPage,
  },
  {
    name: 'Invoice',
    path: '/apps/invoice',
    component: Invoice,
  },
  {
    name: 'CMS',
    path: '/apps/cms',
    component: CmsPage,
  },
  {
    name: 'Drivers',
    path: '/driver/view',
    component: ViewPage,
  },
  {
    name: 'Reports',
    path: '/reports/view',
    component: BlankPage,
  },
  {
    name: 'Settings',
    path: '/settings/view',
    component: BlankPage,
  },
  {
    name: 'Profile',
    path: '/profiles/view',
    component: BlankPage,
  },
  {
    name: 'Users',
    path: '/users/view',
    component: BlankPage,
  }
];

export default pageList;
