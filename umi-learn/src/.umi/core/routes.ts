// @ts-nocheck
import React from 'react';
import { ApplyPluginsType } from 'C:/Users/JuneLy/Desktop/practice/umi-learn/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/",
    "component": require('@/layouts/index.js').default,
    "routes": [
      {
        "path": "/a",
        "exact": true,
        "component": require('@/pages/a.js').default
      },
      {
        "path": "/b",
        "exact": true,
        "component": require('@/pages/b.js').default
      },
      {
        "path": "/counter",
        "exact": true,
        "component": require('@/pages/counter.js').default
      },
      {
        "path": "/",
        "exact": true,
        "component": require('@/pages/index.js').default
      },
      {
        "path": "/sub",
        "routes": [
          {
            "path": "/sub/a",
            "exact": true,
            "component": require('@/pages/sub/a.js').default
          },
          {
            "path": "/sub",
            "exact": true,
            "component": require('@/pages/sub/index.js').default
          }
        ],
        "component": require('@/pages/sub/_layout.js').default
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
