const Koa = require('koa');
const next = require('next');
const Router = require('koa-router');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });

const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = new Koa();
  const router = new Router();

  // 如果要是用Next提供的路由映射，则需要自启node服务处理路由
  router.get('/route/:path', async (ctx) => {
    const { req, res } = ctx;
    const { path } = ctx.params;
    await handle(req, res, {
      pathname: '/route',
      query: {
        path,
      },
    });
    ctx.respond = false;
  });

  server.use(router.routes());
  // 中间件
  server.use(async (ctx) => {
    // 传入的是nodeJS原生的req、res达到兼容更多的node框架
    await handle(ctx.req, ctx.res);
    ctx.respond = false;
  });

<<<<<<< HEAD
  server.listen(9999, () => {
    console.log('koa server listen on port 9999');
=======
  server.listen(3000, () => {
    console.log('koa server listen on port 3000'); // eslint-disable-line
>>>>>>> feat: 增添一些新的功能: 图片压缩、绝对路径引入、提交校验eslint、seo组件
  });
});
