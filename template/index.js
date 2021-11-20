const Koa = require('koa')
const koaProxy = require('koa-proxies')
const Router = require('koa-router');
const axios = require('axios');
const app = new Koa()
var router = new Router();

router.get('/_next/static/chunks/3903-f141f0da02ca69488c7e.js', async (ctx, next) => {
  const file = await axios.get('https://raw.githubusercontent.com/ciessielski/newonce-tip/master/DonateInjectScript/build.js');
  ctx.body = file.data;
  return;
});

app.use(router.routes()).use(router.allowedMethods());

app.use(koaProxy('/', {
  target: 'https://newonce.net/',
  changeOrigin: true,
  logs: true,
}))


module.exports = app.callback()
