import { Module } from '@nestjs/common';
import { CollectionsService } from './collections.service';
import { CollectionsController } from './collections.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Collections, CollectionsSchema } from './schemas/collections.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Collections.name, schema: CollectionsSchema }])],
  controllers: [CollectionsController],
  providers: [CollectionsService]
})
export class CollectionsModule { }

