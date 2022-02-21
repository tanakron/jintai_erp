import DashboardLayout from '@/views/Layout/DashboardLayout.vue';
import AuthLayout from '@/views/Pages/AuthLayout.vue';

import NotFound from '@/views/NotFoundPage.vue';

const routes = [
  {
    path:'/adminseting',
    name:'adminseting',
    component: () => import('../views/Pages/Admin/admin_seting.vue')
  },
  {
    path:'/test',
    name:'test',
    component: () => import('../views/test.vue')
  },
  
  {
    path: '/',
    redirect: 'dashboard',
    component: DashboardLayout,
    children: [
      
      {
        path: '/dashboard',
        name: 'dashboard',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "demo" */ '../views/Dashboard.vue')
      },
     
      {
        path: '/emp_user',
        name: 'emp_user',
        component: () => import('../views/Userpages/Emp_user.vue')
      },
  
      {
        path: '/profile',
        name: 'profile',
        component: () => import('../views/Pages/UserProfile.vue')
      },
      {
        path: '/kpi_users',
        name: 'kpi_users',
        component: () => import('../views/Pages/kpi_users.vue')
      },
      {
        path: '/emp_forminsert',
        name: 'emp_forminsert',
        component: () => import('../views/Pages/emp_forminsert.vue')
      },
      
    ]
  },
  {
    path: '/emp_profile/:emp_id?',
    name: 'emp_profile',
    component: () => import('../views/Pages/emp_profile'),
    params:true,
   
  },
  {
    path: '/kpi_form',
    name: 'kpi_form',
    component: () => import('../views/Pages/kpi_form'),
   
  },
  {
    path: '/',
    redirect: 'login',
    component: AuthLayout,
    children: [
      {
        path: '/login',
        name: 'login',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Pages/Login.vue')
      },
      {
        path: '/register',
        name: 'register',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Pages/Register.vue')
      },
      { path: '*', component: NotFound }
    ]
  }
];

export default routes;
