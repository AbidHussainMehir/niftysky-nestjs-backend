import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from "@nestjs/mongoose";
import { CollectionsModule } from './collections/collections.module';
import { RealEstateModule } from './realestate/realestate.module';
import { SupportModule } from './support/support.module';
import { MulterModule } from "@nestjs/platform-express"
@Module({
  imports: [
    MulterModule.register({ dest: './uploads' }),
    MongooseModule.forRoot('mongodb://abidh:abid1080@cluster0-shard-00-00.yjjjj.mongodb.net:27017,cluster0-shard-00-01.yjjjj.mongodb.net:27017,cluster0-shard-00-02.yjjjj.mongodb.net:27017/niftysky?replicaSet=atlas-7mqem7-shard-0&ssl=true&authSource=admin'),
    RealEstateModule, CollectionsModule, SupportModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
