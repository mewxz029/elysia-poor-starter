import Elysia from 'elysia';
import { ProductRoutes } from './modules/product/product.route';

export const V1Routes = new Elysia({ prefix: 'api/v1' })
  .use(ProductRoutes);
