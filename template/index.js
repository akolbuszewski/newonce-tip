const Koa = require('koa')
const koaProxy = require('koa-proxies')

const app = new Koa()

// app.use(koaProxy('/', {
//   target: 'https://newonce.net/',
//   changeOrigin: true,
//   logs: true,
//   autoRewrite: true
// }))

app.use(ctx => {
  console.log('>> KISIEL');
  ctx.body = 'Hello Koa';
});

// app2.listen(3000);

module.exports = app.callback()

// const server = app.listen(5500, () => {
//   console.log(`Koa is running on port 5500`)
// })
