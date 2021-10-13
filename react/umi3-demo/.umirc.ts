import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  proxy:{
    "/api":{
      "target":"http://121.36.51.141:8080",
      "changeOrigin":true,
      "pathRewrite":{'^/api':""}
    }
  },
  fastRefresh: {},
});
