import { createRouter, createWebHistory } from 'vue-router'
import { storeKey } from 'vuex'
import { store } from '@/main';

import Login from '@/views/auth/Login.vue'
import DashboardVue from '@/views/Dashboard.vue'
import MainLayout from '@/views/layout/Main.vue'

import Dashboard from '@/views/Dashboard.vue'
import Casters from '@/views/Casters.vue'
import Channels from '@/views/Channels.vue'
import Live from '@/views/Live.vue'
import Event from '@/views/Event.vue'
import Subscription from '@/views/Subscription.vue'

import Settings from '@/views/settings/Settings.vue'
import Category from '@/views/settings/Category.vue';
import PaymentGateway from '@/views/settings/PaymentGateway.vue'
import Vault from '@/views/settings/Vault.vue'

import Log from '@/views/log/Log.vue'
import ErrorLog from '@/views/log/ErrorLog.vue'
import RequestLog from '@/views/log/RequestLog.vue'

import Security from '@/views/security/Security.vue'
import GroupRoles from '@/views/security/GroupRoles.vue'
import Permissions from '@/views/security/Permissions.vue'
import Users from '@/views/security/Users.vue'

import Advertising from '@/views/Advertising.vue'
import Logout from '@/views/Logout.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login,
      meta: { guest: true },
    },
    {
      path: '/app',
      component: MainLayout,
      meta: { requiresAuth: true },
      children: [
        {
          path: 'logout',
          name: 'logout',
          component: Logout
        },
        {
          path: 'advertising',
          name: 'advertising',
          component: Advertising
        },
        {
          path: 'security',
          component: Security,
          children: [
            {
              path: 'users',
              name: 'users',
              component: Users
            },
            {
              path: 'permissions',
              name: 'permissions',
              component: Permissions
            },
            {
              path: 'groups-roles',
              name: 'groups-roles',
              component: GroupRoles
            }
          ]
        },
        {
          path: 'log',
          component: Log,
          children: [
            {
              path: 'request-log',
              name: 'request-log',
              component: RequestLog
            },
            {
              path: 'error-log',
              name: 'error-log',
              component: ErrorLog
            }
          ]
        },
        {
          path: 'settings',
          component: Settings,
          children: [
            {
              path: 'vault',
              name: 'vault',
              component: Vault
            },
            {
              path: 'payment-gateway',
              name: 'payment-gateway',
              component: PaymentGateway
            },
            {
              path: 'category',
              name: 'category',
              component: Category
            }
          ]
        },
        {
          path: 'subscription',
          name: 'subscription',
          component: Subscription
        },
        {
          path: 'event',
          name: 'event',
          component: Event
        },
        {
          path: 'live',
          name: 'live',
          component: Live
        },
        {
          path: 'channels',
          name: 'channels',
          component: Channels
        },
        {
          path: 'casters',
          name: 'casters',
          component: Casters
        },
        {
          path: 'dashboard',
          name: 'dashboard',
          component: DashboardVue
        }
      ]
    }

  ]
})

router.beforeEach(async (to, from, next) => {


  let isAuthenticated = localStorage.getItem('adminBearerToken');

  if (to.name !== 'login' && !isAuthenticated) {

      next({ name: 'login' })

  } 
  else {

      await store.restored;
      next()

  }

});

export default router
