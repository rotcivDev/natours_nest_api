import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/v1');
  await app.listen(3000);
}
bootstrap();

/**
 * Tours data handling scripts
 *
 *import {
 *  clear_tours_collection_data,
 *  upload_local_tours_data,
 *} from './tours/tours.scripts';
 *
 *clear_tours_collection_data();
 *upload_local_tours_data();
 */
