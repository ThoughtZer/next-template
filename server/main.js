const Koa = require('koa');
const next = require('next');
const Router = require('koa-router');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });

const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = new Koa();
  const router = new Router();

  server.use(router.routes());
  // 中间件
  server.use(async (ctx) => {
    // 传入的是nodeJS原生的req、res达到兼容更多的node框架
    await handle(ctx.req, ctx.res);
    ctx.respond = false;
  });

  server.listen(9999, () => {
    console.log('koa server listen on port 9999');
  });
});
