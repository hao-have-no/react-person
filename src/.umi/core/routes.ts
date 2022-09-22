// @ts-nocheck
import React from 'react';
import { ApplyPluginsType } from '/opt/react-project/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/",
    "component": require('@/layouts/BasicLayout').default,
    "routes": [
      {
        "path": "/",
        "component": require('@/pages/index').default,
        "exact": true
      },
      {
        "path": "/login",
        "component": require('@/pages/login/index').default,
        "exact": true
      },
      {
        "path": "/",
        "component": require('@/layouts/SecurityLayout').default,
        "routes": [
          {
            "path": "/cart",
            "component": require('@/pages/cart/index').default,
            "exact": true
          },
          {
            "path": "/olist",
            "component": require('@/pages/olist/index').default,
            "exact": true
          },
          {
            "path": "/user",
            "component": require('@/pages/user/index').default,
            "exact": true
          }
        ]
      }
    ]
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
