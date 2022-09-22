// @ts-nocheck
import { Plugin } from '/opt/react-project/node_modules/@umijs/runtime';

const plugin = new Plugin({
  validKeys: ['modifyClientRenderOpts','patchRoutes','rootContainer','render','onRouteChange','dva','getInitialState','request',],
});

export { plugin };
