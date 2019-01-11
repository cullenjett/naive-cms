import Koa from 'koa';
import Router from 'koa-router';

export const app = new Koa();
const router = new Router();

router.get('/api', async (ctx) => {
  ctx.body = {
    foo: 'bar',
  };
});

app.use(router.routes());
