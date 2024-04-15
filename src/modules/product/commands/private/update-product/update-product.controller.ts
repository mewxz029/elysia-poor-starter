import Elysia from 'elysia';

export const UpdateProductController = new Elysia()
  .post('/:id', ({ params: { id } }) => `Update Product ${id}`);
