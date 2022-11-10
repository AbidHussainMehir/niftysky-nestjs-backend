import { Module } from '@nestjs/common';
import { RealEstateService } from './realestate.service';
import { RealEstateController } from './realestate.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { RealEstate, RealEstateSchema } from './schemas/realestate.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: RealEstate.name, schema: RealEstateSchema }])],
  controllers: [RealEstateController],
  providers: [RealEstateService]
})
export class RealEstateModule { }

