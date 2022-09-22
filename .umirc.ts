import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      path:'/',
      component:'@/layouts/BasicLayout',
      routes:[
        { path: '/', component: '@/pages/index' },
        { path: '/login', component: '@/pages/login/index' },
        {
          path: '/',
          component: '@/layouts/SecurityLayout',
          routes: [
            { path: '/cart', component: '@/pages/cart/index' },
            { path: '/olist', component: '@/pages/olist/index' },
            { path: '/user', component: '@/pages/user/index' },
          ],
        },
    ]}
  ],
  "proxy": {
    "/api": {
      "target": "http://192.168.1.13:12138",
      "changeOrigin": true,
      "pathRewrite": { "^/api": "" }
    }
  }
});
