import { Elysia } from 'elysia';
import { swagger } from '@elysiajs/swagger';
import { V1Routes } from './app.route';

const app = new Elysia().get('/', () => 'Hello Elysia')
  .use(swagger())
  .use(V1Routes)
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
);

app.handle(new Request('http://localhost/api/v1/private/product', { method: 'POST' })).then((x) => x.text()).then(console.log);
