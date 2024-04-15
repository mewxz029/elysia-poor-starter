import Elysia from 'elysia';
import { CreateProductController } from './commands/create-product/create-product.controller';
import { UpdateProductController } from './commands/update-product/update-product.controller';

const PrivateProductRoutes = new Elysia({ prefix: 'private/product' })
  .use(CreateProductController)
  .use(UpdateProductController);

const PublicProductRoutes = new Elysia({ prefix: 'public/product' })
  .get('/', () => 'GET PUBLIC PRODUCT');

export const ProductRoutes = new Elysia()
  .use(PrivateProductRoutes)
  .use(PublicProductRoutes);
