import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { ExpensesModule } from './expenses/expenses.module';
import { MongooseModule } from "@nestjs/mongoose";
@Module({
  imports: [
    MongooseModule.forRoot('mongodb://abidh:abid1080@cluster0-shard-00-00.yjjjj.mongodb.net:27017,cluster0-shard-00-01.yjjjj.mongodb.net:27017,cluster0-shard-00-02.yjjjj.mongodb.net:27017/test?replicaSet=atlas-7mqem7-shard-0&ssl=true&authSource=admin'),
    CatsModule, ExpensesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
