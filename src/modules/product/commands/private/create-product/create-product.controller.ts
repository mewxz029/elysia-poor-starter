import Elysia from 'elysia';

export const CreateProductController = new Elysia()
  .post('/', () => 'Create Product');
