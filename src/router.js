import Vue from 'vue'
import Router from 'vue-router'
//Special Hidden Routes
import routes from '../specialRoutes/routes'
//Dynamic prop passed to routes
function dynamicPropsFn (route) {
  const now = new Date()
  return {
    name: (now.getFullYear() + parseInt(route.params.years)) + '!'
  }
}

//lazy loading
const Home = resolve => {
  require.ensure(['./views/Home'], () => {
    resolve(require('./views/Home'));
  }, 'Home');
};

const Main = resolve => {
  require.ensure(['./views/Main'], () => {
    resolve(require('./views/Main'));
  }, 'Main');
};

const APIDrivenRoutes = resolve => {
  require.ensure(['./views/APIDrivenRoutes'], () => {
    resolve(require('./views/APIDrivenRoutes'));
  }, 'APIDrivenRoutes');
};


const pageOne = resolve => {
  require.ensure(['@/components/Main/pages/pageOne'], () => {
    resolve(require('@/components/Main/pages/pageOne'));
  }, 'Main');
};



routes
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      props: dynamicPropsFn,
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/main',
      component: Main,
      children: [{
          path: '',
          name: 'pageOne',
          component: pageOne
        }]
      },
      {
        path: '/apiroutes',
        component : APIDrivenRoutes,
        children : routes
      }
    
  ]
})
