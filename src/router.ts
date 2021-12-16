import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: "/",
      name: "mainele",
      component: () =>
        import(/* webpackChunkName: "module9" */ "./views/home.vue"),
    },
  ],
});
