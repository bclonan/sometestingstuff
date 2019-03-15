import Vue from "vue";
import Router from "vue-router";
//Special Hidden Routes
import routes from "./specialRoutes/routes";
//Dynamic prop passed to routes
function dynamicPropsFn(route) {
  const now = new Date();
  return {
    name: now.getFullYear() + parseInt(route.params.years) + "!"
  };
}

import Home from "./views/Home";

//lazy loading
import Main from "./views/Main";

import APIDrivenRoutes from "./views/APIDrivenRoutes";
import pageOne from "./views/pageOne";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      props: dynamicPropsFn,
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/main",
      component: Main,
      children: [
        {
          path: "",
          name: "pageOne",
          component: pageOne
        }
      ]
    },
    {
      path: "/apiroutes",
      component: APIDrivenRoutes,
      children: routes
    }
  ]
});
