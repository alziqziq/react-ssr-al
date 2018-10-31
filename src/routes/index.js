import Layout from './../components/Layout';
import Home from './Landing'
import Grid from './Grid'

export default [
  {
    component: Layout,
    routes: [
      {
        path: '/',
        exact: true,
        component: Home,
      },
      {
        path: '/grid',
        component: Grid,
      }
    ]
  }
];