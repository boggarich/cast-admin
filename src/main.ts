// @ts-nocheck

import { createApp } from 'vue'
import { createStore } from 'vuex'
import VuexPersistence from 'vuex-persist';
import localForage from 'localforage';
import App from './App.vue'
import router from './router'
import commonObj from './assets/js/common.js';
import './assets/main.css'

const vuexLocal = new VuexPersistence({
    storage: localForage,
    asyncStorage: true,
});

//  

// Create a new store instance.
export const store = createStore({
    state () {

      return {

        userData: {},
        dashboardCounterData: {}

      }

    },
    mutations: {

      setUserData (state, payload) {
        
          state.userData = payload.data.data.user;

      },

      setDashboardCounterData (state, payload) {

          state.dashboardCounterData = payload.data;

      }
      
    },
    actions: {
    
  
    },
    plugins: [vuexLocal.plugin]
})

const app = createApp(App)

app.use(store)
app.use(router)

app.mount('#app')
