import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3002);
}
bootstrap();
// mongodb://abidh:abid1080@<hostname>/?ssl=true&replicaSet=atlas-7mqem7-shard-0&authSource=admin&retryWrites=true&w=majority
//mongoDB compass url:mongodb://abidh:abid1080@cluster0-shard-00-00.yjjjj.mongodb.net:27017,cluster0-shard-00-01.yjjjj.mongodb.net:27017,cluster0-shard-00-02.yjjjj.mongodb.net:27017/test?replicaSet=atlas-7mqem7-shard-0&ssl=true&authSource=admin 