// @ts-nocheck
import React from 'react';
import { ApplyPluginsType } from 'C:/Users/JuneLy/AppData/Roaming/npm/node_modules/umi/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
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
    "path": "/sub",
    "exact": true,
    "component": require('@/pages/sub/index.js').default
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
